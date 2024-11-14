import { compare } from "bcryptjs";

export function isValidText(value, minLength = 1) {
  return value && value.trim().length >= minLength;
}

export function isValidEmail(value) {
  return value && value.includes("@");
}

export function isPasswordEqual(password, confirmPassword) {
  return password === confirmPassword;
}

export async function isValidPassword(password, storedPassword) {
  return await compare(password, storedPassword);
}


