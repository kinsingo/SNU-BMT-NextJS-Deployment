import MainPageModule, {ModelProps}  from "@/components/model-dataset/MainPageModule";


export const metadata = {
  title: "AI BMT - ImageNet2012",
  description: "ImageNet2012 is a large-scale visual database designed for use in visual object recognition software research.",
}

export default function Dataset() {
  const data:ModelProps = {
    modelName: "ImageNet Dataset 2012",
    version: "2012",
    description: `ImageNet is a large-scale image dataset widely used for visual recognition tasks. The 2012 version of the dataset is best known for its use in the ImageNet Large Scale Visual Recognition Challenge (ILSVRC). It contains millions of labeled images organized according to the WordNet hierarchy, supporting tasks such as image classification and object localization.`,
    ReleaseDate: "October 2012", // ImageNet 2012 데이터셋 발표 시점
    keyFeatures: [
      "Over 1.2 million training images for 1,000 categories",
      "Highly diverse and high-quality labeled images",
      "Supports image classification and object localization tasks",
      "Benchmark dataset for deep learning research and competitions",
    ],
    useCases: [
      "Image classification (e.g., ResNet, VGG)",
    ],
    muiColor: "success",
    dataPath_onnx_or_smallDataset: "ai-dataset/classification/imageNet2012/ILSVRC2012_img_val_10000.zip",
    dataPath_pytorch_or_largeDataset: "ai-dataset/classification/imageNet2012/ILSVRC2012_img_val_50000.zip",
    isModelType: false, // ImageNet은 데이터셋이므로 false
  };
  return <MainPageModule {...data} />;
}
