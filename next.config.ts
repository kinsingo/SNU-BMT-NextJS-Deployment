import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

// Define the Next.js configuration function
const nextConfig = (phase: string): NextConfig => {
  // Check if the current phase is development or production
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const vercelUrl = process.env.VERCEL_URL || "example.vercel.app";

  return {
    env: {
      MONGO_URI: isDev
        ? "mongodb+srv://jonghyun_shin:!jonghyun04@snu-bmt-cluster.h9c5k.mongodb.net/?retryWrites=true&w=majority&appName=snu-bmt-cluster"
        : "mongodb+srv://jonghyun_shin:!jonghyun04@jonghyun.qx6jo.mongodb.net/?retryWrites=true&w=majority&appName=jonghyun",
      BASE_URL: isDev
        ? "http://localhost:3000" // 로컬 개발 환경 기본값
        : `https://${vercelUrl}`, // Vercel 배포 환경
    },
  };
};

export default nextConfig;
