import { hash } from "bcryptjs";
import { getCollection } from "@/MongoDB/db-manager";

//private
async function getHashedPassword(password) {
  return await hash(password, 12);
}

//public
async function addUser(email, password) {
  try {
    const collection = await getCollection("users");
    await collection.insertOne({
      email: email,
      password: await getHashedPassword(password),
    });
  } catch (error) {
    throw new Error(`Could not add new user - ${error.message}`);
  }
}

async function modifyPassword(email, newPassword) {
  try {
    const collection = await getCollection("users");
    await collection.updateOne(
      { email }, // 업데이트 조건: 이메일이 일치하는 사용자
      { $set: { password: await getHashedPassword(newPassword) } } // 변경할 필드: 새로운 비밀번호로 갱신
    );
  } catch (error) {
    throw new Error(`Could not update the user's password - ${error.message}`);
  }
}

async function findUserByEmail(email) {
  const collection = await getCollection("users");
  const user = await collection.findOne({ email });
  if (!user) {
    throw new Error(`Could not find user for email ${email}`);
  }
  return user;
}

export { addUser, modifyPassword, findUserByEmail };
