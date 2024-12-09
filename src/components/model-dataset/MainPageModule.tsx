import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import DownloadModule from "@/components/model-dataset/components/DownloadModule";
import { auth } from "@/app/api/auth/next-auth";
import { signInServerAction } from "@/app/api/auth/components/auth-server-action";

export const metadata = {
  title: "AI BMT - Resnet50",
  description: "Resnet50 is a deep learning model for image classification.",
};

function CustomListItem({ children }: { children: React.ReactNode }) {
  return (
    <ListItem
      sx={{
        display: "list-item",
        marginBottom: "10px",
      }}
    >
      {children}
    </ListItem>
  );
}

export interface ModelProps {
  modelName: string;
  version: string;
  description: string;
  ReleaseDate: string;
  keyFeatures: string[];
  useCases: string[];
  muiColor:MUIColor;
  dataPath_onnx_or_smallDataset: string;
  dataPath_pytorch_or_largeDataset: string;
  isModelType: boolean;
}

export default async function MainPageModule({
  modelName,
  version,
  description,
  ReleaseDate,
  keyFeatures,
  useCases,
  muiColor,
  dataPath_onnx_or_smallDataset,
  dataPath_pytorch_or_largeDataset,
  isModelType,
}: ModelProps) {
  const session = await auth();
  if (!session || !session.user || !session.user.email) {
    await signInServerAction();
    return;
  }

  const email = session.user.email;

  return (
    <>
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h3" color={muiColor}>
          {modelName}
        </Typography>
        <List sx={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <Box marginBottom="10px"></Box>
          <CustomListItem>
            <strong>Version</strong>: {version}
          </CustomListItem>
          <CustomListItem>
            <strong>Description</strong>: {description}
          </CustomListItem>
          <CustomListItem>
            <strong>Release Date</strong>: {ReleaseDate}
          </CustomListItem>
        </List>
        <Typography variant="h3" color={muiColor} mt="20px">
          Key Features:
        </Typography>
        <List sx={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <Box marginBottom="10px"></Box>
          {keyFeatures.map((feature: string, index: number) => (
            <CustomListItem key={`feature-${index}`}>{feature}</CustomListItem>
          ))}
        </List>
        <Typography variant="h3" color={muiColor} mt="20px">
          Use Cases:
        </Typography>
        <List sx={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <Box marginBottom="10px"></Box>
          {useCases.map((useCase: string, index: number) => (
            <CustomListItem key={`useCase-${index}`}>{useCase}</CustomListItem>
          ))}
        </List>
        <DownloadModule
          dataPath_onnx_or_smallDataset={dataPath_onnx_or_smallDataset}
          dataPath_pytorch_or_largeDataset={dataPath_pytorch_or_largeDataset}
          color={muiColor}
          email={email}
          isModelType={isModelType}
        />
      </Box>
    </>
  );
}
