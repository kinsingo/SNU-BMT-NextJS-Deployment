
import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MKSocialButton
import MKSocialButtonRoot from "@/MKcomponents/MKSocialButton/MKSocialButtonRoot";

const MKSocialButton = forwardRef(
  (
    { color = "facebook", size = "medium", iconOnly = false, circular = false, children, ...rest },
    ref
  ) => (
    <MKSocialButtonRoot
      {...rest}
      ref={ref}
      variant="contained"
      color="primary"
      size={size}
      ownerState={{ color, size, iconOnly, circular }}
    >
      {children}
    </MKSocialButtonRoot>
  )
);

// Set display name for debugging purposes
MKSocialButton.displayName = "MKSocialButton";

// Typechecking props for the MKSocialButton
MKSocialButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "facebook",
    "twitter",
    "instagram",
    "linkedin",
    "pinterest",
    "youtube",
    "github",
    "vimeo",
    "slack",
    "dribbble",
    "reddit",
    "tumblr",
  ]),
  iconOnly: PropTypes.bool,
  circular: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MKSocialButton;
