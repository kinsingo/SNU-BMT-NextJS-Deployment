import MainPageModule, {ModelProps} from "@/components/model-dataset/MainPageModule";

export const metadata = {
  title: "AI BMT - Resnet50",
  description: "Resnet50 is a deep learning model for image classification.",
};


export default function Model() {
  const data:ModelProps = {
    modelName: "ResNet50 (resnet50_v1)",
    version: "1.0",
    description: `ResNet50 is a deep residual network developed by Microsoft, designed to overcome the vanishing gradient problem in very deep networks. It has 50 layers and uses residual connections to enable efficient training of deep architectures.`,
    ReleaseDate: "July 2015", // ResNet50이 발표된 실제 시점
    keyFeatures: [
      "Deep residual connections for better gradient flow",
      "50-layer architecture optimized for image recognition",
      "Supports transfer learning for diverse tasks",
      "Highly scalable and efficient for large datasets",
    ],
    useCases: [
      "Image Classification (e.g., ImageNet dataset)",
    ],
    muiColor: "info",
    dataPath_onnx_or_smallDataset: "ai-model/classification/resnet50_v1.onnx",
    dataPath_pytorch_or_largeDataset: "ai-model/classification/resnet50_v1.pth",
    isModelType: true,
  };
  return <MainPageModule {...data} />;
}
