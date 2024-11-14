import Grid from "@mui/material/Grid";
import DefaultBlogCard from "./DefaultBlogCard";

export default function SingleBlog({ img, link, title, name, date, content,authorImg }) {
  return (
    <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
      <DefaultBlogCard
        image={img}
        category={{ color: "primary", label: "house" }}
        title={title}
        description={content}
        author={{
          image: authorImg,
          name: name,
          date: date,
        }}
        action={{ type: "internal", route: link }}
      />
    </Grid>
  );
}