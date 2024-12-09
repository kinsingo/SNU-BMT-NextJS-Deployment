import MainPageModule from "@/components/model-dataset/MainPageModule";

export const metadata = {
  title: "AI BMT - Coco2017",
  description:
    "Coco2017 is a large-scale visual database designed for use in visual object recognition software research.",
};

export default function Dataset() {
  const data = {
    modelName: "COCO Dataset 2017",
    version: "2017",
    description: `COCO (Common Objects in Context) is a large-scale object detection, segmentation, and captioning dataset. It contains images with object instances segmented, labeled, and contextualized for machine learning tasks. The 2017 version provides updates and refinements over earlier releases.`,
    ReleaseDate: "August 2017", // COCO 2017 데이터셋 발표 시점
    keyFeatures: [
      "118k training images with 80 object categories",
      "Segmentation masks for precise localization",
      "Context-aware captions for supervised learning",
      "Large-scale dataset optimized for object detection and segmentation tasks",
    ],
    useCases: [
      "Object Detection (e.g., Yolo)",
    ],
    muiColor: "success" as MUIColor ,
    dataPath_onnx_or_smallDataset: "ai-dataset/object-detection/Coco2017/COCO2017_img_val_5000.zip",
    dataPath_pytorch_or_largeDataset: "ai-dataset/object-detection/Coco2017/COCO2017_img_val_5000.zip",
    isModelType: false, // COCO는 모델이 아닌 데이터셋이므로 false
  };
  return <MainPageModule {...data} />;
}
