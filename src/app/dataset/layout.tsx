import { ReactNode } from "react";
import LayoutModule from "@/components/model-dataset/LayoutModule"

export default async function DatasetLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <LayoutModule muiColor="success" header="AI Dataset Information">
      {children}
    </LayoutModule>
  );
}
