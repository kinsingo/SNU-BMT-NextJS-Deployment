import { Db, MongoClient, ServerApiVersion } from "mongodb";
import crypto from "crypto";

const URI = process.env.MONGO_URI;
if (!URI)
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env.local"
  );

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let publicDB: Db | null = null;
let connectedClient: MongoClient | null = null;

async function getConnectedClient() {
  if (!connectedClient) 
    connectedClient = await client.connect();
  return connectedClient;
}

async function getConnectedPublicDB() {
  if (!publicDB) {
    try {
      const _connectedClient = await getConnectedClient();
      publicDB = _connectedClient.db("bmt-db");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  }
  return publicDB;
}

async function getPublicCollection(collectionName: string) {
  const _publicDB = await getConnectedPublicDB();
  if (!_publicDB) {
    throw new Error("Failed to connect to the database.");
  }
  return _publicDB.collection(collectionName);
}

//보안을 위해서 사용자의 이메일을 해시화하여 데이터베이스 이름을 생성 (SQL Injection 등 데이터 보안을 위함)
//이메일의 일부를 포함하여 추적 가능성을 확보하면서도 완전한 이메일 노출은 방지했음.
//MongoDB 데이터베이스 이름의 길이는 64자로 제한됨. 따라서 이메일이 매우 길 경우 잘라내는 추가 로직 적용 (20 자리 제한)
///MongoDB 데이터베이스 이름은 특수 문자를 허용하지 않으므로, 이메일 접두부에서 특수 문자를 제거하는 로직을 추가
function getHashedaccountDBName(email: string) {
  const emailPrefix = email.split("@")[0].replace(/[^a-zA-Z0-9]/g, "").slice(0, 20); // 이메일의 '@' 이전 부분만 추출 + 특수 문자 제거 + 20 자리 사용
  const hashedEmail = crypto.createHash("sha256").update(email).digest("hex").slice(0, 20);//20 자리 사용
  return `user_${emailPrefix}_${hashedEmail}`;
}

async function getPrivateCollection(email: string, collectionName: string) {
  const accountDbName = getHashedaccountDBName(email);
  const _connectedClient = await getConnectedClient();
  const _accountDb = _connectedClient.db(accountDbName); // 데이터베이스가 없으면 자동으로 생성됨
  
  const collections = await _accountDb.listCollections({ name: "users" }).toArray();
  if (collections.length === 0) {
    const usersCollection = _accountDb.collection("users");
    await usersCollection.insertOne({ email, createdAt: new Date() });
  }

  return _accountDb.collection(collectionName); // 컬렉션 없으면 자동으로 생성됨
}

export { getPublicCollection, getPrivateCollection };
