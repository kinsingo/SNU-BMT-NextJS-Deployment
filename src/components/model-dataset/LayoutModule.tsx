import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { auth } from "@/app/api/auth/next-auth";
import { signInServerAction } from "@/app/api/auth/components/auth-server-action";

import { ReactNode } from "react";

interface ModelLayoutProps {
  children: ReactNode;
  muiColor:MUIColor;
  header: string;
}

export default async function LayoutModule({
  children,
  muiColor,
  header,
}: ModelLayoutProps) {
  const session = await auth();
  if (!session) await signInServerAction();
  return (
    <Container maxWidth="md">
      <Box
        mt={3}
        sx={{
          textAlign: "center",
          padding: "10px 0",
          bgcolor: `${muiColor}.main`,
          borderRadius: "8px 8px 0 0",
        }}
      >
        <Typography color="white" variant="h1" sx={{ fontSize: "2rem" }}>
          {header}
        </Typography>
      </Box>
      <Box>{children}</Box>
    </Container>
  );
}
