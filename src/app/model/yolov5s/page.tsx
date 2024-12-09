import MainPageModule from "@/components/model-dataset/MainPageModule";

export const metadata = {
  title: "AI BMT - YOLOv5",
  description: "YOLOv5 is a deep learning model for object detection.",
};

export default function Model() {
  const data = {
    modelName: "YOLOv5s 640x640 (yolov5s)",
    version: "1.0",
    description: `YOLOv5s is a lightweight and efficient one-stage object detection model developed by Ultralytics. It is part of the YOLO (You Only Look Once) family and is designed for real-time inference on resource-constrained devices while maintaining competitive accuracy. YOLOv5s is the smallest variant in the YOLOv5 family, optimized for speed and efficiency.`,
    ReleaseDate: "June 2020", // YOLOv5 발표 시점
    keyFeatures: [
      "Lightweight architecture for real-time detection",
      "Efficient inference on edge devices",
      "Support for a wide range of input resolutions",
      "High accuracy with optimized performance for speed",
    ],
    useCases: [
      "Object Detection in Images and Videos (e.g., OpenImages validation set resized to 800x800)",
    ],
    muiColor: "info" as MUIColor,
    dataPath_onnx_or_smallDataset: "ai-model/object-detection/yolov5s.onnx",
    dataPath_pytorch_or_largeDataset: "ai-model/object-detection/yolov5s.pt",
    isModelType: true,
  };
  return <MainPageModule {...data} />;
}
