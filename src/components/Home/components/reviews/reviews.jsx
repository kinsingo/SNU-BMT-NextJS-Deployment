"use client"; //for react-slick slider

import Container from "@mui/material/Container";
import Slider from "react-slick";
import SingleReview from "./components/singleReview";
import { reviewers } from "./components/reviewers";
import { sliderSettings } from "./components/silderSettings";
import styles from "./reviews.module.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Reviews() {
  return (
    <section id="reviews" className={styles.reviews}>
      <Container>
        <Box position="relative" textAlign="center">
          <Typography
            variant="h4" // h2와 비슷하게 조정, 기본 fontSize를 줄임
            color="text.secondary" // 색상을 가까운 기본 색상으로 설정
            mb={3} // mb로 하단 여백 설정 (3은 24px에 해당)
            style={{ letterSpacing: "1.3px", textTransform: "uppercase" }} // 직접 추가해야 하는 스타일
          >
            clients reviews
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={400}>
            What our client say about us
          </Typography>
        </Box>
        <Slider {...sliderSettings}>
          {reviewers.map((reviewer) => (
            <SingleReview key={reviewer.name + "-review"} {...reviewer} />
          ))}
        </Slider>
      </Container>
    </section>
  );
}
