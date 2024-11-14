// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import Link from "next/link";

// @mui material components
import Collapse from "@mui/material/Collapse";

//import Icon from "@mui/material/Icon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Material Kit 2 PRO React components
import MKBox from "@/MKcomponents/MKBox";
import MKTypography from "@/MKcomponents/MKTypography";

function DefaultNavbarDropdown({
  name,
  icon,
  children = false,
  collapseStatus = false,
  light = false,
  href = "",
  route = "",
  collapse,
  ...rest
}) {
  const linkComponent = {
    component: "a",
    href,
    target: "_blank",
    rel: "noreferrer",
  };

  const routeComponent = {
    component: Link,
    href: route,
  };

  return (
    <>
      <MKBox
        {...rest}
        mx={1}
        p={1}
        display="flex"
        alignItems="baseline"
        color={light ? "white" : "dark"}
        opacity={light ? 1 : 0.6}
        sx={{ cursor: "pointer", userSelect: "none" }}
        {...(route && routeComponent)}
        {...(href && linkComponent)}
      >
        <MKTypography
          variant="body2"
          lineHeight={1}
          color="inherit"
          sx={{ alignSelf: "center", "& *": { verticalAlign: "middle" } }}
        >
          {icon}
        </MKTypography>
        <MKTypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          color={light ? "white" : "dark"}
          sx={{
            fontWeight: "100%",
            ml: 1,
            mr: 0.25,
            "& *": { verticalAlign: "middle" },
          }}
        >
          {name}
        </MKTypography>
        <MKTypography
          variant="body2"
          color={light ? "white" : "dark"}
          ml="auto"
        >
          <KeyboardArrowDownIcon sx={{ verticalAlign: "middle" }} />
        </MKTypography>
      </MKBox>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Typechecking props for the DefaultNavbarDropdown
DefaultNavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
  collapse: PropTypes.bool.isRequired,
};

export default DefaultNavbarDropdown;
