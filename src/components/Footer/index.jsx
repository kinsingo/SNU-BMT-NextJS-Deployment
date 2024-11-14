// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";

// Material Kit 2 PRO React examples
import CenteredFooter from "./components/CenteredFooter";

export default function BMTFooter() {
  const company = {
    href: "https://www.snu.ac.kr",
    name: "Seoul National University",
  };
  const links = [
    { href: "/", name: "Company" },
    { href: "/", name: "About Us" },
    { href: "/", name: "Team" },
    { href: "/", name: "Products" },
    { href: "/", name: "Blog" },
    { href: "/", name: "License" },
  ];
  const socials = [
    {
      icon: <FacebookIcon fontSize="small" />,
      link: "/",
      name: "Facebook",
    },
    {
      icon: <TwitterIcon fontSize="small" />,
      link: "/",
      name: "Twitter",
    },
    {
      icon: <InstagramIcon fontSize="small" />,
      link: "/",
      name: "Instagram",
    },
    {
      icon: <PinterestIcon fontSize="small" />,
      link: "/",
      name: "Pinterest",
    },
    {
      icon: <GitHubIcon fontSize="small" />,
      link: "/",
      name: "GitHub",
    },
  ];

  return <CenteredFooter company={company} links={links} socials={socials} />;
}
