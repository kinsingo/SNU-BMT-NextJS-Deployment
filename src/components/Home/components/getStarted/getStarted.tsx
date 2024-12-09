import React from "react";
import styles from "./getStarted.module.css";
import { OSGuideList } from "./components/OSGuideList";
import SingleOSGuide from "./components/singleOSGuide";
import { Box, Typography, Container, Grid } from "@mui/material";

export default function GetStarted() {
  return (
    <Box
      component="section"
      id="works"
      className={styles.works}
      pt={10}
    >
      <Container maxWidth="lg">
        <Box position="relative" textAlign="center" mb={5}>
          <Typography
            variant="h4" // h2와 비슷하게 조정, 기본 fontSize를 줄임
            color="text.secondary" // 색상을 가까운 기본 색상으로 설정
            mb={3} // mb로 하단 여백 설정 (3은 24px에 해당)
            style={{ letterSpacing: "1.3px", textTransform: "uppercase" }} // 직접 추가해야 하는 스타일
          >
            How to Start?
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={400}>
            Choose Your OS
          </Typography>
        </Box>
        <Box className={styles["works-content"]} sx={{ mt: 5 }}>
          <Grid container spacing={2} justifyContent="center">
            {OSGuideList.map((OSGuide) => (
              <Grid item xs={12} sm={6} key={`${OSGuide.os}-os`}>
                <SingleOSGuide {...OSGuide} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
