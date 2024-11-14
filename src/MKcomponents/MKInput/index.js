import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MKInput
import MKInputRoot from "@/MKcomponents/MKInput/MKInputRoot";

const MKInput = forwardRef(({ error = false, success = false, disabled = false, ...rest }, ref) => (
  <MKInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />
));

// Set display name for debugging purposes
MKInput.displayName = "MKInput";

// Typechecking props for the MKInput
MKInput.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MKInput;
