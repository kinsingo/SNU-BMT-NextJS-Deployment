import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ReviewSlider from "./reviewSlider";

export default function Reviews() {
  return (
    <Box component="section" pt={10}>
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
        <ReviewSlider />
      </Container>
    </Box>
  );
}
