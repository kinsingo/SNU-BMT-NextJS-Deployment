"use client"; //for onClick event

import styles from "../getStarted.module.css";
export default function SingleOSGuideButton({ link }: { link: string }) {
  return (
    <button
      className={styles["how-work-btn"]}
      onClick={() => window.open(link, "_blank")}
    >
      Get Started
    </button>
  );
}
