class OSGuide {
  icon: string;
  os: string;
  explanation: string;
  link: string;
  className: string;
  constructor(icon : string, os:string, explanation:string, link:string, className:string) {
    this.icon = icon;
    this.os = os;
    this.explanation = explanation;
    this.link = link;
    this.className = className;
  }
}

const OSGuide_1 = new OSGuide(
  "/icons/window.png",
  "Window",
  "Windows 10",
  "https://github.com/kinsingo/SNU_BMT_GUI_Submitter_Windows",
  "single-how-works-window"
);

const OSGuide_2 = new OSGuide(
  "/icons/linux.png",
  "Linux",
  "Ubuntu 20.04, 22.04, 24.04",
  "https://github.com/kinsingo/SNU_BMT_GUI_Submitter_Linux",
  "single-how-works-linux"
);

export const OSGuideList = [OSGuide_1, OSGuide_2];
