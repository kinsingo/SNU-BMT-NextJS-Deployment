import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { auth } from "@/app/api/auth/next-auth";
import { signInServerAction } from "@/app/api/auth/components/auth-server-action";
import { isAdminOrDeveloper } from "@/app/authentication/lib/data/user";
import UnauthorizedAccessPage from "@/components/Unauthorized";

export default async function filePage() {
  const session = await auth();
  if (!session || !session.user || !session.user.email) {
    await signInServerAction();
    return;
  }

  const isValidUser = await isAdminOrDeveloper(session.user.email);
  if (!isValidUser) return <UnauthorizedAccessPage />;

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
          <Typography variant="h1" color="success" gutterBottom>
            Developers will manage their progress here
          </Typography>
          <Typography variant="h2" color="text">
            To be implemented
          </Typography>
        </Box>
      </main>
    </>
  );
}
