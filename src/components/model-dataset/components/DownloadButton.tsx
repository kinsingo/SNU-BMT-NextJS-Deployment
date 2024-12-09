"use client";
import MKButton, { MKButtonColorType } from "@/MKcomponents/MKButton";
import {
  generatePresignedUrl,
  fetchDataUsingPresignedUrl,
} from "@/AWS-S3/actions";
import { useEffect, useState, useRef } from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

async function saveProgressToServer(
  email: string,
  dataPath: string,
  progress: number
) {
  try {
    const response = await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, dataPath, progress }),
    });
    if (!response.ok) {
      console.error("Failed to save progress:", response.statusText);
    }
  } catch (error) {
    console.error("Error saving progress:", error);
  }
}

export default function DownloadButton({
  dataPath,
  color,
  type,
  email,
}: {
  dataPath: string;
  color: MUIColor;
  type: "onnx" | "pytorch" | "small dataset" | "large dataset";
  email: string;
}) {
  const [progress, setProgress] = useState<number>(0);
  const previousProgress = useRef<number>(0); // useEffect 외부에서 초기화

  async function setWholeProgress(progress: number) {
    setProgress(progress);
    await saveProgressToServer(email, dataPath, progress); // 서버에 저장
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    let timeout: NodeJS.Timeout | null = null;
    async function fetchProgress() {
      try {
        const response = await fetch(
          `/api/progress?email=${email}&dataPath=${dataPath}`
        );
        if (response.ok) {
          const result = await response.json();
          await setWholeProgress(result.progress);
          if (result.progress > 0 && result.progress < 100) {

            // progress의 이전값과 현재값이 같은 경우에만 타이머 실행
            if (result.progress === previousProgress.current) {
              if (!timeout) {
                timeout = setTimeout(() => {
                  setWholeProgress(0); // progress를 0으로 초기화
                  timeout = null; // 타이머 실행 후 timeout 초기화
                }, 5000); // 5초 동안 변화 없으면 초기화
              }
            } else {
              // progress가 변경된 경우 timeout 초기화 및 previousProgress 업데이트
              if (timeout) {
                clearTimeout(timeout);
                timeout = null; // 타이머 상태 초기화
              }
              previousProgress.current = result.progress;
            }

            // 다운로드 진행 중인 경우 폴링 유지
            if (!interval) {
              interval = setInterval(fetchProgress, 1000);
            }
          } else {
            // 다운로드 완료 또는 초기 상태로 돌아가면 폴링 중단
            if (interval) {
              clearInterval(interval);
              interval = null;
            }
            await setWholeProgress(0);
          }
        } else {
          console.error("Failed to fetch progress:", response.statusText);
          if (interval) {
            clearInterval(interval);
            interval = null;
          }
          await setWholeProgress(0);
        }
      } catch (error) {
        console.error("Error fetching progress:", error);
        if (interval) {
          clearInterval(interval);
          interval = null;
        }
        await setWholeProgress(0);
      }
    }
    fetchProgress();

    // 컴포넌트 언마운트 시 정리
    return () => {
      if (interval) {
        clearInterval(interval);
      }
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [email, dataPath]);

  async function onClickDownload() {
    try {
      const presignedUrl = await generatePresignedUrl(dataPath);
      const dataName = dataPath.split("/").pop() as string;

      // 다운로드 시작 시 상태 초기화
      await setWholeProgress(0);

      // 다운로드 진행
      await fetchDataUsingPresignedUrl(
        presignedUrl,
        dataName,
        async (progress) => {
          await setWholeProgress(progress);
        }
      );

      // 다운로드가 완료되면 상태 초기화
      await setWholeProgress(100);
    } catch (error) {
      console.error("Error in process:", error);
    }
  }

  return (
    <>
      <MKButton
        variant="contained"
        color={color.toString() as MKButtonColorType}
        sx={{ fontSize: "1rem", padding: "10px 20px" }}
        onClick={onClickDownload}
        disabled={progress > 0 && progress < 100}
      >
        {progress > 0 && progress < 100
          ? `${type} Downloading...`
          : `${type} Download`}
      </MKButton>
      <CircularProgressWithLabel
        value={progress}
        color={color.toString() as any}
      />
    </>
  );
}
