// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-flatpickr components
import Flatpickr from "react-flatpickr";

// react-flatpickr styles
import "flatpickr/dist/flatpickr.css";

// Material Kit 2 PRO React components
import MKInput from "@/MKcomponents/MKInput";

function MKDatePicker({ input = {}, ...rest }) {
  return (
    <Flatpickr
      {...rest}
      render={({ defaultValue }, ref) => (
        <MKInput {...input} defaultValue={defaultValue} inputRef={ref} />
      )}
    />
  );
}

// Set display name for debugging purposes
MKDatePicker.displayName = "MKDatePicker";

// Typechecking props for the MKDatePicker
MKDatePicker.propTypes = {
  input: PropTypes.objectOf(PropTypes.any),
};

export default MKDatePicker;
