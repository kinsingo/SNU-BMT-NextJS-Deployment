"use client";
import styles from "./statistics.module.css";
import { motion } from "framer-motion";//"framer-motion": "^12.0.0-alpha.1" 버전 사용해야 에러없이 build 가능 (12.0 미만은 X)
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SingleStatisticProps {
  number: number;
  description: string;
  url: string;
}

export default function SingleStatistic({
  number,
  description,
  url,
}: SingleStatisticProps) {
  const router = useRouter();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000; // ms
    const increment = number / (duration / 16); // ~60 FPS

    const counter = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [number]);

  return (
    <div className="col">
      <motion.div
        className={styles["single-statistics-box"]}
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring" }}
        onClick={() => router.push(url)}
        style={{ cursor: "pointer" }}
      >
        <motion.div className={`counter ${styles["statistics-content"]}`}>
          {count}
        </motion.div>
        <motion.h3>{description}</motion.h3>
      </motion.div>
    </div>
  );
}
