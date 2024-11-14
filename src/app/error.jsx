"use client"; //error.js는 클라이언트에서만 동작하기 때문에 이 지시어가 필요합니다

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ErrorPage({error}) {
  let title = "An error occurred";
  let message = (error && error.message)? error.message : "Something went wrong";
  return (
    <>
      <main>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="20vh"
          textAlign="center"
        >
          <Typography variant="h1" color="error" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" color="text">
            {message}
          </Typography>
        </Box>
      </main>
    </>
  );
}
