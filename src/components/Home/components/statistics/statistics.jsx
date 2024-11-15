"use client";

import Container from "@mui/material/Container";
import React, { useEffect } from "react";
import counterUp from "counterup2";
import styles from "./statistics.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";

export default function Statistics() {
  return (
    <section id="statistics" className={styles["statistics"]}>
      <Image
        src="/images/statistics/Statistics_BG.png"
        alt="Statistics Background"
        fill // 전체 배경을 덮도록 설정
        style={{ zIndex:-1, objectFit:"cover" }} // zIndex로 콘텐츠 뒤에 배치
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgcolor="rgba(0, 0, 0, 0.6)" // 배경을 어둡게 만드는 반투명 검정색
        zIndex={-1}
      />
      <Container>
        <Box
          className={styles["statistic-header"]}
          position="relative"
          textAlign="center"
        >
          <Typography
            variant="h4"
            color="white"
            mb={2.5}
            style={{ letterSpacing: "1.3px", textTransform: "uppercase" }}
          >
            Statistics
          </Typography>
          <Typography variant="body2" mb={2.5} color="white" fontWeight={400}>
            What We Offer
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center">
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6} lg={3}>
              <SingleStatistic
                number={8}
                description="BMT models"
                url="/model"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <SingleStatistic
                number={6}
                description="BMT scenarios"
                url="/model"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <SingleStatistic number={5} description="AI tasks" url="/model" />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <SingleStatistic
                number={10}
                description="model&dataset pairs"
                url="/dataset"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

function SingleStatistic({ number, description, url }) {
  const router = useRouter();
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      counterUp(counter, {
        duration: 3000,
        delay: 10,
      });
    });
  }, []);

  return (
    <div className="col">
      <motion.div
        className={styles["single-ststistics-box"]}
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring" }}
        onClick={() => router.push(url)}
        style={{ cursor: "pointer" }}
      >
        <motion.div className={`counter ${styles["statistics-content"]}`}>
          {number}
        </motion.div>
        <motion.h3>{description}</motion.h3>
      </motion.div>
    </div>
  );
}
