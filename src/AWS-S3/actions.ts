import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import axios from "axios";

if (
  !process.env.AWS_BUCKET_NAME ||
  !process.env.AWS_BUCKET_REGION ||
  !process.env.AWS_ACCESS_KEY_ID ||
  !process.env.AWS_SECRET_ACCESS_KEY
) {
  throw new Error("필수 환경 변수가 누락되었습니다. .env 파일을 확인하세요.");
}


// AWS S3 클라이언트 설정
const s3Client = new S3Client({
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// Presigned URL 생성 함수
async function generatePresignedUrl(objectKey: string): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: objectKey,
  });

  try {
    const presignedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 300, //300초 동안 유효한 URL 생성
    });
    //console.log("Generated Presigned URL:", presignedUrl);
    return presignedUrl;
  } catch (error) {
    console.error("Error generating presigned URL:", error);
    throw error;
  }
}

// Presigned URL로 데이터 가져오기
async function fetchDataUsingPresignedUrl(
  url: string,
  downloadFileName: string,
  onProgressUpdate: (progress: number) => void
): Promise<void> {
  try {
    const response = await axios.get(url, {
      responseType: "blob",
      onDownloadProgress: (progressEvent) => {
        if (progressEvent.total) {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          onProgressUpdate(percentCompleted); // 진행 상황 업데이트
        }
      },
    });
    console.log("Data fetched successfully:", response.data);

    // 브라우저 환경에서는 아래 코드로 파일 다운로드 트리거 가능
    const blob = new Blob([response.data], {
      type: response.headers["content-type"],
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = downloadFileName; // 다운로드할 파일 이름
    link.click();
  } catch (error) {
    console.error("Error fetching data using Presigned URL:", error);
    throw error;
  }
}

// 실행 함수
//const run = async () => {
//  const objectKey = "ai-model/classification/resnet50_v1.onnx";
//  try {
//    const presignedUrl = await generatePresignedUrl(objectKey);
//    await fetchDataUsingPresignedUrl(presignedUrl);
//  } catch (error) {
//    console.error("Error in process:", error);
//  }
//};

export { generatePresignedUrl, fetchDataUsingPresignedUrl };
