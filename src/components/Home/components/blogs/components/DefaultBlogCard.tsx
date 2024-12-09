// react-router components
import Link from "next/link";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Kit 2 PRO React components
import MKBox from "@/MKcomponents/MKBox";
import MKTypography from "@/MKcomponents/MKTypography";
import MKAvatar from "@/MKcomponents/MKAvatar";

export interface DefaultBlogCardProps {
  image: string; // 이미지 URL 또는 경로
  category?: {
    color:
      | "primary"
      | "secondary"
      | "info"
      | "success"
      | "warning"
      | "error"
      | "dark";
    label: string;
  };
  title: string; // 블로그 카드 제목
  description: string; // 블로그 카드 설명
  author?: {
    image: string; // 작성자 이미지 URL 또는 경로
    name: string; // 작성자 이름
    date: string; // 작성 날짜 또는 날짜를 반환하는 함수
  };
  raised?: boolean; // 카드가 '들려있는' 스타일 여부
  action: {
    type: "external" | "internal"; // 링크 유형
    route: string; // 링크 경로
  };
}

function DefaultBlogCard({
  image,
  category,
  title,
  description,
  author,
  raised = true,
  action,
}: DefaultBlogCardProps) {
  const imageTemplate = (
    <>
      <MKBox
        component="img"
        src={image}
        alt={title}
        borderRadius="lg"
        shadow={raised ? "md" : "none"}
        width="100%"
        position="relative"
        zIndex={1}
        sx={{
          transition: "0.3s linear",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />
      <MKBox
        borderRadius="lg"
        shadow={raised ? "md" : "none"}
        width="100%"
        height="100%"
        position="absolute"
        left={0}
        top={0}
        sx={
          raised
            ? {
                backgroundImage: `url(${image})`,
                transform: "scale(0.94)",
                filter: "blur(12px)",
                backgroundSize: "cover",
              }
            : {}
        }
      />
    </>
  );

  return (
    <Card>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={raised ? -3 : 2}>
        {action.type === "internal" ? (
          <Link href={action.route}>{imageTemplate}</Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            {imageTemplate}
          </MuiLink>
        )}
      </MKBox>
      <MKBox p={3}>
        {category && (
          <MKTypography
            variant="caption"
            color={category.color}
            textTransform="uppercase"
            fontWeight="medium"
            textGradient
            sx={{ display: "block" }}
          >
            {category.label}
          </MKTypography>
        )}
        {action.type === "internal" ? (
          <Link href={action.route}>
            <MKTypography
              variant="h5"
              textTransform="capitalize"
              my={1}
              sx={{ display: "inline-block" }}
            >
              {title}
            </MKTypography>
          </Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            <MKTypography
              variant="h5"
              textTransform="capitalize"
              mt={2}
              mb={1}
              sx={{ display: "inline-block" }}
            >
              {title}
            </MKTypography>
          </MuiLink>
        )}
        <MKTypography variant="body2" component="p" color="text">
          {description}
        </MKTypography>
        {author && (
          <MKBox display="flex" alignItems="center" mt={3}>
            <MKAvatar
              src={author.image}
              alt={author.name}
              shadow="md"
              variant={raised ? "circular" : "rounded"}
            />
            <MKBox pl={2} lineHeight={0}>
              <MKTypography
                component="h6"
                variant="button"
                fontWeight="medium"
                gutterBottom
              >
                {author.name}
              </MKTypography>
              <MKTypography variant="caption" color="text">
                {author.date}
              </MKTypography>
            </MKBox>
          </MKBox>
        )}
      </MKBox>
    </Card>
  );
}

export default DefaultBlogCard;
