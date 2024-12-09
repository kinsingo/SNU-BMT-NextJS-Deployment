import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

// Define the Next.js configuration function
const nextConfig = (phase: string): NextConfig => {
  // Check if the current phase is development or production
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const vercelUrl = process.env.VERCEL_URL || "example.vercel.app";

  return {
    // 클라이언트에서 사용할 환경 변수를 env 에 정의
    env: {
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS: process.env.SMTP_PASS,
      MONGO_URI: isDev ? process.env.MONGO_URI_DEV : process.env.MONGO_URI_PROD,
      BASE_URL: isDev
        ? "http://localhost:3000" // 로컬 개발 환경 기본값
        : `https://${vercelUrl}`, // Vercel 배포 환경
      AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
      AWS_BUCKET_REGION: process.env.AWS_BUCKET_REGION,
      AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    },
  };
};

export default nextConfig;
