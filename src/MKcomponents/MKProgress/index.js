import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Kit 2 PRO React components
import MKTypography from "@/MKcomponents/MKTypography";

// Custom styles for MKProgress
import MKProgressRoot from "@/MKcomponents/MKProgress/MKProgressRoot";

const MKProgress = forwardRef(
  ({ variant = "contained", color = "info", value = 0, label = false, ...rest }, ref) => (
    <>
      {label && (
        <MKTypography variant="button" fontWeight="medium" color="text">
          {value}%
        </MKTypography>
      )}
      <MKProgressRoot
        {...rest}
        ref={ref}
        variant="determinate"
        value={value}
        ownerState={{ color, value, variant }}
      />
    </>
  )
);

// Set display name for debugging purposes
MKProgress.displayName = "MKProgress";

// Typechecking props for the MKProgress
MKProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default MKProgress;
