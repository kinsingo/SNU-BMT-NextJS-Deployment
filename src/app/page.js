
import { redirect } from 'next/navigation';
import HomePage from '@/components/Home';
//import {getCollection} from '@/MongoDB/db-manager'; DB 테스트

export default async function Home() {
  //하기 DB 테스트 완료
  //const testData = {"email": "jonghyun_shin@naver.com", "latency_ms": 0.001, "accuracy": 97.3, "query": 10000};
  //const collection = await getCollection('results');
  //await collection.insertOne(testData);
  //const results = await collection.find({}).toArray();
  //console.log(results);

  return <HomePage />;
}
