import styles from "../getStarted.module.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import SingleOSGuideButton from "./singleOSGuideButton";

interface SingleOSGuideProps {
  icon: string;
  os: string;
  explanation: string;
  link: string;
  className: string;
}

export default function SingleOSGuide({
  icon,
  os,
  explanation,
  link,
  className,
}: SingleOSGuideProps) {
  const _className = `col ${styles["single-how-works"]} ${styles[className]}`;

  return (
    <Box className={_className}>
      <Box className={styles["single-how-works-icon"]}>
        <Image
          src={icon}
          alt={`${os} Icon`}
          width={80}
          height={80}
          className="icon"
          style={{  display: "inline-block" }}
        />
      </Box>
      <Typography variant="h6" mt={3} mb={2}>
        {os}
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Submitter User Guide Steps <br />({explanation})
      </Typography>
      <SingleOSGuideButton link={link} />
    </Box>
  );
}
