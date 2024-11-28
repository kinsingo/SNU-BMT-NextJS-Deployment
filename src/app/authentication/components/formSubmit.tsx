"use client";

import { useFormStatus } from "react-dom";
import MKButton from "@/MKcomponents/MKButton";
import {MKButtonColorType} from "@/MKcomponents/MKButton";

interface FormSubmitProps {
  pendingText: string;
  buttonText: string;
  color:MKButtonColorType;
}

export default function FormSubmit({
  pendingText,
  buttonText,
  color,
}: FormSubmitProps) {
  const status = useFormStatus();

  if (status.pending) {
    return (
      <MKButton color={color} fullWidth disabled>
        {pendingText}
      </MKButton>
    );
  }

  return (
    <>
      <MKButton type="submit" variant="gradient" color={color} fullWidth>
        {buttonText}
      </MKButton>
    </>
  );
}
