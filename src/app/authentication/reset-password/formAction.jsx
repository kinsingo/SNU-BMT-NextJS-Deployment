"use server";
import { redirect } from "next/navigation";
import resetPassword from "../lib/reset-password";

export default async function resetPasswordServerAction(prevState, formData) {
  const authData = {
    email: formData.get("email"),
    password: formData.get("password"),
    newPassword: formData.get("newPassword"),
  };
  try {
    await resetPassword(authData);
  } catch (error) {
    return {
      message: "Reset P/W Error Occured",
      error: error.message,
    }; //useActionState 에서 state 로 전달됨
  }

  //next-auth credentials 한계로, reset-password 이후 해당 아이디로 자동 로그인은 여기서 구현 불가
  redirect("/");

}
