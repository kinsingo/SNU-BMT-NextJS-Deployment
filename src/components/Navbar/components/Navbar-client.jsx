"use client";
import {
  signInServerAction,
  signOutServerAction,
} from "@/app/api/auth/components/auth-server-action";
import MKBox from "@/MKcomponents/MKBox";
import DefaultNavbar from "./DefaultNavbar";
import routes from "@/routes/NavBarRoutes";

export default function NavbarClient({ session }) {
  
  const action = (session && session.user) ? {
    label: `Logout : ${session.user.email} `,
    color: "secondary",
    onClick: async () => await signOutServerAction(),
  } : {
    label: "Login",
    color: "info",
    onClick: async () => await signInServerAction(),
  };

  return (
    <>
      <MKBox bgColor="white" shadow="sm" py={0.25}>
        <DefaultNavbar
          brand="AI BMT"
          action={action} 
          routes={routes}
          transparent={true}
          relative={true}
          center={false}
        />
      </MKBox>
    </>
  );
}
