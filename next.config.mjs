/** @type {import('next').NextConfig} */

import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const nextConfig = (phase) => {
  //개발환경인지 배포환경인지 확인 (true : 개발, false : 배포)
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  return {
    env: {
      MONGO_URI: isDev
        ? "mongodb+srv://jonghyun_shin:!jonghyun04@snu-bmt-cluster.h9c5k.mongodb.net/?retryWrites=true&w=majority&appName=snu-bmt-cluster"
        : "mongodb+srv://jonghyun_shin:!jonghyun04@jonghyun.qx6jo.mongodb.net/?retryWrites=true&w=majority&appName=jonghyun",
      AUTH_SECRET: isDev
        ? "supersecret"
        : "lad2ad24ya9S#s2+ajN76x4ss23$%F@wdbf#Nws^4J@g4zQdtWgMd=D9#BfhP+hU+Vjx7#sV$F", //이렇게 고정하고 배포 했으면 변경 금지 !
    },
  };
};

export default nextConfig;
