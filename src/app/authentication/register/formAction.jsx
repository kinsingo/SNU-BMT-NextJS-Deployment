"use server";
import { redirect } from "next/navigation";
import signup from "../lib/signup";

export default async function signUpServerAction(prevState, formData) {
  const authData = {
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  try {
    await signup(authData);
  } catch (error) {
    return {
      message: "Sign Up Error Occured",
      error: error.message,
    }; //useActionState 에서 state 로 전달됨
  }

  //next-auth credentials 한계로, sign-up 이후 해당 아이디로 자동 로그인은 여기서 구현 불가
  redirect("/");
}
