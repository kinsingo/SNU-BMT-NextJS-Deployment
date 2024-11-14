import { sign, verify } from "jsonwebtoken";


const KEY = process.env.JWT_SECRET_KEY;
if (!KEY)
  throw new Error(
    "Please define the KEY environment variable inside .env.local"
  );

export function createJSONToken(email) {
  //expiresIn => 7d = 7 day, 5h = 5 hour, 10m = 10 minute, 30 = 30 seconds
  const token = sign({ email }, KEY, { expiresIn: "1d" });
  const expirationTime = Date.now() + 24 * 60 * 60 * 1000; // 현재 시간 + 1일 (밀리초 단위)
  return { token, expirationTime }; // 토큰과 만료 시간을 함께 반환
}

export function validateJSONToken(token) {
  try {
    return verify(token, KEY);
  } catch (error) {
    console.error("Invalid or expired token:", error.message);
  }
}

