import React from "react";
import SingleBlog from "./components/singleBlog";
import { blogList } from "./components/bloglist";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "@/MKcomponents/MKBox";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Blogs() {
  return (
    <MKBox component="section" py={7}>
      <Container>
        <Box position="relative" textAlign="center">
          <Typography
            variant="h4"
            color="text.secondary"
            mb={3}
            style={{ letterSpacing: "1.3px", textTransform: "uppercase" }}
          >
            news and articles
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={400}>
            Always upto date with our latest News and Articles
          </Typography>
        </Box>
        <Grid container spacing={3} pt={7}>
          {blogList.map((blog) => (
            <SingleBlog key={blog.name + "-blog"} {...blog} />
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}
