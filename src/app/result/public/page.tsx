import ResultPage from "../components/resultPage";
import { Column, Row } from "@/app/result/components/Table";
import { getPublicCollection } from "@/MongoDB/db-manager";

export default async function PublicResultPage() {

  const columns: Column[] = [
    { name: "email", align: "center" },
    { name: "latency_ms", align: "center" },
    { name: "accuracy", align: "center" },
    { name: "query", align: "center" },
  ];

  const collection = await getPublicCollection("results");
  const documents = await collection.find({}).toArray();

  const rows: Row[] = documents.map((doc) => ({
    email: doc.email || "N/A",
    latency_ms: doc.latency_ms || "N/A",
    accuracy: doc.accuracy || "N/A",
    query: doc.query || "N/A",
  }));

  return <ResultPage columns={columns} rows={rows} />;
}
