class Blog
{
  img: string;
  link: string;
  title: string;
  name: string;
  date: string;
  content: string;
  authorImg: string;
  constructor(img:string, link:string, title:string, name:string, date:string, content:string,authorImg:string)
  {
    this.img = img;
    this.link = link;
    this.title = title;
    this.name = name;
    this.date = date;
    this.content = content;
    this.authorImg = authorImg;
  }
}

const blog_1 = new Blog(
  "/images/blog/b1.jpg",
  "/resultComparison",
  "How to find your Desired Place more quickly",
  "Jonghyun Shin",
  "Posted On September 2018",
  "Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.",
  "/images/clients/DeepX.png",
);

const blog_2 = new Blog(
  "/images/blog/b2.jpg",
  "/resultComparison",
  "How to find your Desired Place more quickly",
  "Mr.ABC",
  "Posted On September 2018",
  "Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.",
  "/images/clients/SNU.png",
);

const blog_3 = new Blog(
  "/images/blog/b3.jpg",
  "/resultComparison",
  "How to find your Desired Place more quickly",
  "Mrs.DEF",
  "Posted On September 2024",
  "Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.",
  "/images/clients/TBD.png",
);

export const blogList = [blog_1, blog_2, blog_3];