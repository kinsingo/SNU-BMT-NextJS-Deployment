import ResultPage from "../components/resultPage";
import { auth } from "@/app/api/auth/next-auth";
import { signInServerAction } from "@/app/api/auth/components/auth-server-action";
import { Column, Row } from "@/app/result/components/Table";
import { getPrivateCollection } from "@/MongoDB/db-manager";

export default async function PrivateResultPage() {
  const session = await auth();
  if (!session || !session.user || !session.user.email) {
    await signInServerAction();
    return;
  }

  const columns: Column[] = [
    { name: "email", align: "center" },
    { name: "latency_ms", align: "center" },
    { name: "accuracy", align: "center" },
    { name: "query", align: "center" },
    { name: "CPU_Type", align: "center" },
    { name: "Accelerator_Type", align: "center" },
    { name : "created", align: "center" },
  ];

  const collection = await getPrivateCollection(session.user.email, "results");
  let documents = await collection.find({}).toArray();

  const formattedDate : string = new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // 24시간 형식
  });

  //test 용으로, 만약 데이터가 없다면 더미 데이터를 추가
  if (documents.length === 0) {
    await collection.insertOne({
      email: "dummy_1@naver.com",
      latency_ms: 0.0001,
      accuracy: 97.8,
      query: 5000,
      CPU_Type:"Intel Core i7-10750H",
      Accelerator_Type: "GPU",
      created: formattedDate,
    });
    await collection.insertOne({
      email: "dummy_2@naver.com",
      latency_ms: 0.0002,
      accuracy: 98.5,
      query: 10000,
      CPU_Type:"Intel Core i7-10750H",
      Accelerator_Type: "NPU(M1)",
      created: formattedDate,
    });
    documents = await collection.find({}).toArray();
  }

  console.log("documents: ", documents);

  const rows: Row[] = documents.map((doc) => ({
    email: doc.email || "N/A",
    latency_ms: doc.latency_ms || "N/A",
    accuracy: doc.accuracy || "N/A",
    query: doc.query || "N/A",
    CPU_Type: doc.CPU_Type || "N/A",
    Accelerator_Type: doc.Accelerator_Type || "N/A",
    created : doc.created || "N/A",
  }));

  console.log("rows: ", rows);

  return <ResultPage columns={columns} rows={rows} />;
}
