
import { ReactNode } from "react";
import LayoutModule from "@/components/model-dataset/LayoutModule"

export default async function ModelLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <LayoutModule muiColor="info" header="AI Model Information">
      {children}
    </LayoutModule>
  );
}
