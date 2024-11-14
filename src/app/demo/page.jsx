import { Container, Box, Typography } from "@mui/material";

export default function Demo() {
  return (
    <Container maxWidth="md">
      <Box
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
            src="https://www.youtube.com/embed/gN2T_-SWghc?si=edkK9BFuM-OZwree"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </Box>
      </Box>
    </Container>
  );
}

