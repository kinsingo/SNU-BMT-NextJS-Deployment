import { MongoClient, ServerApiVersion } from "mongodb";


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

let db = null;
async function getConnectedDB() {
  if (!db) {
    try {
      const connectedClient = await client.connect();
      db = connectedClient.db("bmt-db");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  }
  return db;
}

async function getCollection(collectionName) {
  const _db = await getConnectedDB();
  return await _db.collection(collectionName);
}

export { getCollection };
