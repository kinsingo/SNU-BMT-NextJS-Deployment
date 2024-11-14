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
import resetPasswordServerAction from "./formAction";

export default function ResetPasswordPostForm() {
  const [actionData, formAction] = useActionState(resetPasswordServerAction, {});

  return (
      <Card>
        <MKBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MKTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
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
        <Box pt={4} pb={3} px={3}>
          <form action={formAction}>
            <Box mb={2}>
              <EmailInput />
            </Box>
            <Box mb={2}>
              <PasswordInput name="password" />
            </Box>
            <Box mb={2}>
              <PasswordInput name="newPassword" />
            </Box>
            <Box mt={6} mb={1}>
              <FormSubmit
                pendingText="resetting password..."
                buttonText="reset"
              />
            </Box>
          </form>
        </Box>
      </Card>
  );
}
