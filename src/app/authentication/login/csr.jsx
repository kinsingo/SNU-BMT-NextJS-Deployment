"use client";
//import { useState } from "react";
import Link from "next/link";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 PRO React components
import Box from "@mui/material/Box";
import MKBox from "@/MKcomponents/MKBox";
import Typography from "@mui/material/Typography";
import MKTypography from "@/MKcomponents/MKTypography";

//Input Managers
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import FormSubmit from "../components/formSubmit";
import { useActionState } from "react";
import ActionErrorDisplay from "../components/ActionErrorDisplay";
import signInServerAction from "./formAction";


export default function SignInPostForm() {
  const [actionData, formAction] = useActionState(signInServerAction, {});
  return (
      <Card>
        <MKBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <Typography variant="h4" fontWeight="medium" color="white" mt={1}>
            Login
          </Typography>

          <MKTypography display="block" variant="button" color="warning" mt={3}>
            {actionData && (
              <ActionErrorDisplay
                message={actionData.message}
                error={actionData.error}
              />
            )}
          </MKTypography>

          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: 0, mb: 1 }}
          >
            <Grid item xs={2}>
              <Typography
                component={MuiLink}
                href="#"
                variant="body1"
                color="white"
              >
                <FacebookIcon color="inherit" />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                component={MuiLink}
                href="#"
                variant="body1"
                color="white"
              >
                <GitHubIcon color="inherit" />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                component={MuiLink}
                href="#"
                variant="body1"
                color="white"
              >
                <GoogleIcon color="inherit" />
              </Typography>
            </Grid>
          </Grid>
        </MKBox>
        <Box pt={4} pb={3} px={3}>
          <form action={formAction}>
            <Box mb={2}>
              <EmailInput />
            </Box>
            <Box mb={2}>
              <PasswordInput name="password" />
            </Box>
            <Box mt={4} mb={1}>
              <FormSubmit pendingText="logging in..." buttonText="sign in" />
            </Box>
            <Box mt={3} mb={1} textAlign="center">
              <MKTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MKTypography
                  component={Link}
                  href="/authentication/register"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MKTypography>
              </MKTypography>
            </Box>
          </form>
        </Box>
      </Card>

  );
}
