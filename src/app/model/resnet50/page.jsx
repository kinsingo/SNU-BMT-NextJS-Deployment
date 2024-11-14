import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";


export const metadata = {
  title: "AI BMT - Resnet50",
  description: "Resnet50 is a deep learning model for image classification.",
}

export default function Model() {
  return (
    <>
      <Box sx={{ padding: "20px" }}>
        <Typography
          variant="h2"
          sx={{ color: "#333", mt: 0, fontSize: "1.75rem" }}
        >
          Model Name: Resnet50
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.1em", lineHeight: "1.6em", color: "#555" }}
        >
          <strong>Version:</strong> 4.0
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.1em", lineHeight: "1.6em", color: "#555" }}
        >
          <strong>Description:</strong> GPT-4 is a state-of-the-art language
          model developed by OpenAI, capable of generating human-like text based
          on given input. It is designed for various tasks such as text
          generation, translation, summarization, and more.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.1em", lineHeight: "1.6em", color: "#555" }}
        >
          <strong>Release Date:</strong> March 2023
        </Typography>

        <Typography variant="h3" sx={{ color: "#4CAF50", mt: 3 }}>
          Key Features:
        </Typography>
        <List sx={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <ListItem
            sx={{
              display: "list-item",
              fontSize: "1.1em",
              marginBottom: "10px",
            }}
          >
            Advanced natural language understanding
          </ListItem>
          <ListItem
            sx={{
              display: "list-item",
              fontSize: "1.1em",
              marginBottom: "10px",
            }}
          >
            Context-aware text generation
          </ListItem>
          <ListItem
            sx={{
              display: "list-item",
              fontSize: "1.1em",
              marginBottom: "10px",
            }}
          >
            Support for multiple languages
          </ListItem>
          <ListItem
            sx={{
              display: "list-item",
              fontSize: "1.1em",
              marginBottom: "10px",
            }}
          >
            Enhanced reasoning and problem-solving capabilities
          </ListItem>
        </List>

        <Typography variant="h3" sx={{ color: "#4CAF50", mt: 3 }}>
          Use Cases:
        </Typography>
        <List sx={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <ListItem
            sx={{
              display: "list-item",
              fontSize: "1.1em",
              marginBottom: "10px",
            }}
          >
            Content creation
          </ListItem>
          <ListItem
            sx={{
              display: "list-item",
              fontSize: "1.1em",
              marginBottom: "10px",
            }}
          >
            Customer support automation
          </ListItem>
          <ListItem
            sx={{
              display: "list-item",
              fontSize: "1.1em",
              marginBottom: "10px",
            }}
          >
            Language translation
          </ListItem>
          <ListItem
            sx={{
              display: "list-item",
              fontSize: "1.1em",
              marginBottom: "10px",
            }}
          >
            Personalized recommendations
          </ListItem>
        </List>
      </Box>
    </>
  );
}
