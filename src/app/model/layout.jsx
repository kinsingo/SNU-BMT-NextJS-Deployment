import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { auth } from "@/app/api/auth/next-auth";
import { signInServerAction } from "@/app/api/auth/components/auth-server-action";

export default async function ModelLayout({ children }) {
  const session = await auth();
  if (!session) 
    await signInServerAction();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          textAlign: "center",
          padding: "10px 0",
          backgroundColor: "#ADA",
          color: "white",
          borderRadius: "8px 8px 0 0",
          mb: 3,
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "2rem" }}>
          AI Model Information
        </Typography>
      </Box>

      {/* 하위 컴포넌트 표시 */}
      <main>{children}</main>
    </Container>
  );
}
