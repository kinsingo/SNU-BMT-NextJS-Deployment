import MKBox from "@/MKcomponents/MKBox";
import MKTypography from "@/MKcomponents/MKTypography";

export default function ActionErrorDisplay({ message, error }) {
  return (
    <>
      {message && (
        <MKTypography variant="body1" fontWeight="medium" color="errorBright">
          {message}
        </MKTypography>
      )}
      {error && (
        <MKTypography variant="body2" color="errorBrightSecond">
          {error}
        </MKTypography>
      )}
    </>
  );
}
