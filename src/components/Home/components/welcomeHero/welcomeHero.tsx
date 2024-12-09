"use client";

import { useEffect, useRef } from "react";

// typed-js
import Typed from "typed.js"; // 수정된 모듈 임포트 방식 (여기는 ".js" 확장자를 붙여야함)

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "@/MKcomponents/MKBox";
import MKTypography from "@/MKcomponents/MKTypography";

// Framer Motion
import { motion } from "framer-motion";
import styles from "./welcomeHero.module.css";

export default function WelcomeHero() {
  const typedJSRef = useRef(null);

  // Setting up typedJS
  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: ["metrics", "tasks", "models"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 700,
      startDelay: 500,
      loop: true,
    });

    return () => typedJS.destroy();
  }, []);

  return (
    <MKBox component="header" position="relative">
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="100vh"
        position="relative" // 배경 이미지와 다른 콘텐츠를 구분
      >
        <motion.img
          src="/images/welcome-hero/AI_BMT_Background_Size_Optimized.png"
          alt="Background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            filter: "brightness(0.4)", // 밝기 조절
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />

        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            mx="auto"
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints }) => ({
                textTransform: "capitalize", // 단어별 첫 글자만 대문자로 변환

                fontSize: "3rem", // 기본 크기
                [breakpoints.up("xl")]: {
                  fontSize: "4rem", // 넓은 화면에서 폰트 크기 설정
                },
                [breakpoints.down("md")]: {
                  fontSize: "2rem", // 좁은 화면에서 폰트 크기 설정
                },
              })}
            >
              Easily Analyze <br />
              Your APU Performance <br />
              By The <span
                ref={typedJSRef}
                className={styles.highlightText}
              />{" "}
              That all you need
            </MKTypography>

            <MKTypography
              variant="body1"
              color="white"
              mt={1}
              mb={6}
              px={{ xs: 3, lg: 6 }}
            >
              Benchmark your APU and compare your results with others.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}
