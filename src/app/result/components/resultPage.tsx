'use client';

import { useState } from "react";
import ResultTable from "./resultTable";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { motion, AnimatePresence } from "framer-motion";
import {TableProps} from "./Table";

export default function ResultPage({ columns, rows }: TableProps) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(""); // State to track input value

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update state with the input value
  };

  function handleOpen() {
    if (!inputValue) setOpen(false);
    else setOpen(true);
  }

  return (
    <Box py={2}>
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
            <TextField
              value={inputValue}
              onChange={handleInputChange} // Handle input change
              label="Ex: Company Name, APU Name"
              placeholder=""
              fullWidth
              required
              name="searchName"
              sx={{ backgroundColor: "#fff" }} // Input 배경을 흰색으로
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpen}
              sx={{ color:"#fff"}} 
            >
              Search <i data-feather="search"></i>
            </Button>
          </Box>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                <ResultTable columns={columns} rows={rows}/>
              </motion.div>
            )}
          </AnimatePresence>
        </Stack>
      </Container>
    </Box>
  );
}
