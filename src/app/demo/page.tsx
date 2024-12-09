import { Container, Box, Typography } from "@mui/material";
import styles from "./demo.module.css";

export default function Demo() {
  return (
    <Container maxWidth="md">
      <Box
        pt={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
        textAlign="center"
      >
        <Typography variant="h3" gutterBottom>
          AI BMT User Video Tutorial
        </Typography>

        <Box
          width="100%"
          maxWidth="1000px"
          sx={{
            position: "relative",
            paddingTop: "56.25%", // 16:9 비율 유지
            borderRadius: 2,
            boxShadow: 3,
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/ynmNZPapjdg?si=OgQZKvS3tOcV7rRl"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className={styles["youtube-iframe"]}
          ></iframe>
        </Box>
      </Box>
    </Container>
  );
}
