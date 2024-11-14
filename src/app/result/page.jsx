'use client';

import { useState } from "react";
import ResultTable from "./components/resultTable";
import MKButton from "@/MKcomponents/MKButton";
import Box from "@mui/material/Box";
import MKInput from "@/MKcomponents/MKInput";
import MKBox from "@/MKcomponents/MKBox";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { motion, AnimatePresence } from "framer-motion";

//You are attempting to export "metadata" 
//from a component marked with "use client", which is disallowed. 
//export const metadata = {
//  title: "AI BMT - result comparison",
//  description: "result comparison for AI BMT from various products",
//}

export default function ResultPage() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(""); // State to track input value

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update state with the input value
  };

  function handleOpen() {
    if (!inputValue) setOpen(false);
    else setOpen(true);
  }

  return (
    <MKBox py={2}>
      <Container>
        <Stack spacing={2} pt={2}>
          <Box
            component="form"
            autoComplete="off"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              width: "100%",
            }}
          >
            <MKInput
              value={inputValue}
              onChange={handleInputChange} // Handle input change
              label="Ex: Company Name, APU Name"
              placeholder=""
              fullWidth
              required
              name="searchName"
              sx={{ backgroundColor: "#fff" }} // Input 배경을 흰색으로
            />
            <MKButton
              variant="contained"
              color="primary"
              onClick={handleOpen}
              sx={{ whiteSpace: "nowrap" }}
            >
              Search <i data-feather="search"></i>
            </MKButton>
          </Box>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                <ResultTable />
              </motion.div>
            )}
          </AnimatePresence>
        </Stack>
      </Container>
    </MKBox>
  );
}
