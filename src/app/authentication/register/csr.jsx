"use client";
// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "@/MKcomponents/MKBox";
import Box from "@mui/material/Box";
import MKTypography from "@/MKcomponents/MKTypography";


//Input Managers
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import FormSubmit from "../components/formSubmit";
import { useActionState } from "react";
import ActionErrorDisplay from "../components/ActionErrorDisplay";
import signUpServerAction from "./formAction";

export default function SignUpPostForm() {
  const [actionData, formAction] = useActionState(signUpServerAction, {});

  return (
      <Card>
        <MKBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MKTypography>
          <MKTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MKTypography>
          <MKTypography display="block" variant="button" color="warning" my={1}>
            {actionData && (
              <ActionErrorDisplay
                message={actionData.message}
                error={actionData.error}
              />
            )}
          </MKTypography>
        </MKBox>
        <Box p={3}>
          <form action={formAction}>
            <Box mb={2}>
              <EmailInput />
            </Box>
            <Box mb={2}>
              <PasswordInput name="password" />
            </Box>
            <Box mb={2}>
              <PasswordInput name="confirmPassword" />
            </Box>
            <Box mt={3} mb={1}>
              <FormSubmit
                pendingText="creating account..."
                buttonText="sign up"
              />
            </Box>
          </form>
        </Box>
      </Card>
  );
}
