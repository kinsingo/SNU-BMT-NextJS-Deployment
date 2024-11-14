

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MKAvatar
import MKAvatarRoot from "@/MKcomponents/MKAvatar/MKAvatarRoot";

const MKAvatar = forwardRef(
  ({ bgColor = "transparent", size = "md", shadow = "none", ...rest }, ref) => (
    <MKAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
  )
);

// Set display name for debugging purposes
MKAvatar.displayName = "MKAvatar";

// Typechecking props for the MKAvatar
MKAvatar.propTypes = {
  bgColor: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  shadow: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl", "xxl", "inset"]),
};

export default MKAvatar;
