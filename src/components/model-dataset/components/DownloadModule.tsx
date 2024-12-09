"use client";

import DownloadButton from "./DownloadButton";
import Box from "@mui/material/Box";

interface DownloadButtonProps {
  dataPath_onnx_or_smallDataset: string;
  dataPath_pytorch_or_largeDataset: string;
  color: MUIColor;
  email: string;
  isModelType: boolean;
}

export default function DownloadModule({
  dataPath_onnx_or_smallDataset,
  dataPath_pytorch_or_largeDataset,
  color,
  email,
  isModelType,
}: DownloadButtonProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5, gap: 2 }}>
      <DownloadButton
        dataPath={dataPath_onnx_or_smallDataset}
        color={color}
        type={isModelType ? "onnx" : "small dataset"}
        email={email}
      />
      <Box mx={2} />
      <DownloadButton
        dataPath={dataPath_pytorch_or_largeDataset}
        color={color}
        type={isModelType ? "pytorch" : "large dataset"}
        email={email}
      />
    </Box>
  );
}
