import { getPrivateCollection } from "@/MongoDB/db-manager";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, dataPath, progress } = await req.json(); // 클라이언트로부터 데이터 수신
  const collection = await getPrivateCollection(email,"progress");

  await collection.updateOne(
    { email, dataPath}, // 이메일과 데이터 경로 모두 조건에 들어가야 함
    {
      $set: {
        dataPath: dataPath,
        progress: progress,
      },
    }, 
    { 
      upsert: true // 데이터가 없으면 새로 생성
    } 
  );
  return NextResponse.json({ success: true });
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const dataPath = url.searchParams.get("dataPath");
  const email = url.searchParams.get("email") as string;
  const collection = await getPrivateCollection(email, "progress");
  const record = await collection.findOne({ dataPath });
  return NextResponse.json({ progress: record ? record.progress : 0 });
}
