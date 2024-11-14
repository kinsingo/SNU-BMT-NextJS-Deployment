import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import login from "@/app/authentication/lib/login";


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      type: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const user = await login(credentials);
          return user; // 성공 시 사용자 객체를 반환하여 세션에 저장
        } catch (error) {
          return null; // 인증 실패 시 null 반환 (CredentialsSignin 에러 발생), throw Error 말고 반드시 null 로
        }
      },
    }),
  ],
  basePath: "/api/auth",
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "../../authentication/login",
  },
  trustHost:true,
});
