import { NextResponse } from "next/server";
import { getPrivateCollection } from "@/MongoDB/db-manager";
import { revalidatePath } from "next/cache";


//struct BMT_Data
//{
//    QString email;
//    double latency_ms;
//    double accuracy;
//    int query;
//};
//
//struct Optional_Data
//{
//    QString CPU_Type;
//    QString Accelerator_Type;
//};

export async function POST(req: Request) {
  try 
  {
    // 요청 본문에서 JSON 데이터를 파싱
    const jsonBody = await req.json();

    //must data
    const { email, latency_ms, accuracy, query } = jsonBody;
    if (!email || !latency_ms || !accuracy || !query) {
      return NextResponse.json({
        success: false,
        message: "Invalid request data. Please provide email, latency_ms, accuracy, and query.",
      });
    }

    //optional data
    const CPU_Type = jsonBody.CPU_Type || "Unknown";
    const Accelerator_Type = jsonBody.Accelerator_Type || "Unknown";

    // MongoDB 컬렉션 가져오기
    const collection = await getPrivateCollection(email, "results");

    // MongoDB에 데이터 삽입
    const formattedDate : string = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // 24시간 형식
      });

    await collection.insertOne({
      email,
      latency_ms,
      accuracy,
      query,
      CPU_Type,
      Accelerator_Type,
      created: formattedDate, // 데이터 생성 시간 추가
    });

    revalidatePath("/result/private");//데이터가 DB에 삽입되면 private table 캐시 업데이트

    // 삽입 결과 반환
    return NextResponse.json({
      success: true,
      message: "Data inserted successfully.",
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: "Failed to insert data. " + (error.message || "Unknown error."),
    });
  }
}

//단순 URL 테스트용
export async function GET(req: Request) {
    try {
      // 요청 URL 확인
      const url = req.url;
      // 성공 응답 반환
      return NextResponse.json({
        success: true,
        message: "GET request received successfully.",
        url,
      });
    } catch (error: any) {
      console.error("GET error:", error.message);
      return NextResponse.json({
        success: false,
        message: error.message || "Internal server error",
      });
    }
  }