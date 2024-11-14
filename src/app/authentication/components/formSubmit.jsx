"use client";

import { useFormStatus } from "react-dom";
import MKButton from "@/MKcomponents/MKButton";

export default function FormSubmit({pendingText, buttonText}) {
  const status = useFormStatus();

  if (status.pending) {
    return (
      <MKButton color="info" fullWidth disabled>
        {pendingText}
      </MKButton>
    );
  }

  return (
    <>
      <MKButton type="submit" variant="gradient" color="info" fullWidth>
        {buttonText}
      </MKButton>
    </>
  );
}
