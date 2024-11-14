"use client"; //for onClick event

import styles from "../getStarted.module.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function SingleOSGuide({
  icon,
  os,
  explanation,
  link,
  className,
}) {
  let _className = `col ${styles["single-how-works"]} ${styles[className]}`;

  return (
    <Box className={_className}>
      <Box className={styles["single-how-works-icon"]}>
        <Image
          src={icon}
          alt={`${os} Icon`}
          width={80}
          height={80}
          className="icon"
          style={{ maxWidth: "80%", display: "inline-block" }}
        />
      </Box>
      <Typography variant="h6" mt={3} mb={2}>
        {os}
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Submitter User Guide Steps <br />({explanation})
      </Typography>
      <button
        className={styles["how-work-btn"]}
        onClick={() => window.open(link, "_blank")}
      >
        Get Started
      </button>
    </Box>
  );
}
