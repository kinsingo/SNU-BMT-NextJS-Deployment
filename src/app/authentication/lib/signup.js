import { addUser } from "./data/user.js";
import {
  isValidEmail,
  isValidText,
  isPasswordEqual,
} from "./util/validation.js";
import { getCollection } from "@/MongoDB/db-manager.js";

export default async function signup({ email, password, confirmPassword }) {
  
  if (!isValidEmail(email)) {
    throw new Error("Invalid email.");
  }

  const collection = await getCollection("users");
  const existingUser = await collection.findOne({ email });
  if(existingUser){
    throw new Error("Email exists already.");
  }

  if (!isValidText(password, 8)) {
    throw new Error("Invalid password. Must be at least 8 characters long.");
  }

  if (!isPasswordEqual(password, confirmPassword)) {
    throw new Error("Passwords do not match.");
  }

  addUser(email, password);
  //const { token, expirationTime } = createJSONToken(email); //이 부분은 따로 별도로 필요할때 불러오면 되는거임.
  //return { token, expirationTime };
}
