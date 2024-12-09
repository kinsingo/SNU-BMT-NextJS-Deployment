"use client";

import styles from "./listTopics.module.css";
import { useRouter } from "next/navigation";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function ListTopics() {
  const router = useRouter();
  return (
    <section className={styles["global-vars"]} id="list-topics">
      <Container sx={{ mt: -10 }}>
        <Box
          display="flex"
          justifyContent="center"
          className={styles["list-topics-content"]}
        >
          <Box
            className={styles["single-list-topics-content"]}
            onClick={() => router.push("/model")}
            sx={{
              width: 150,
              height: 150,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 2,
              backgroundColor: "background.paper",
              borderRadius: 2,
              boxShadow: 3,
              cursor: "pointer",
              "&:hover": {
                boxShadow: 6,
              },
            }}
          >
            <Image
              src="/icons/model.png"
              alt="Model Icon"
              width={50}
              height={50}
              style={{ marginBottom: 8 }}
           />

            <Typography variant="h2" sx={{ color: "#333" }}>
              Model
            </Typography>
            <Typography variant="body2" fontWeight={400} sx={{ color: "text.secondary" }}>
              10 models
            </Typography>
          </Box>
          <Box
            className={styles["single-list-topics-content"]}
            onClick={() => router.push("/dataset")}
            sx={{
              width: 150,
              height: 150,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 2,
              backgroundColor: "background.paper",
              borderRadius: 2,
              boxShadow: 3,
              cursor: "pointer",
              "&:hover": {
                boxShadow: 6,
              },
            }}
          >
            <Image
              src="/icons/dataset.png"
              alt="Dataset Icon"
              width={50}
              height={50}
              style={{ marginBottom: 8 }}
            />

            <Typography variant="h2" sx={{ color: "#333" }}>
              Dataset
            </Typography>
            <Typography variant="body2" fontWeight={400} sx={{ color: "text.secondary" }}>
              5 Dataset
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
