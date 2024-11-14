// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Box from "@mui/material/Box";

function AuthLayout({ children }) {
  return (
    <Box height="calc(100vh - 1rem)">
      <Box
        width="calc(100% - 2rem)"
        minHeight="35vh"
        borderRadius="xl"
        mx={2}
        my={2}
        pt={6}
        pb={28}
      />
      <Image
        src="/images/AMT-Auth.webp"
        alt="Background Image"
        fill
        style={{ zIndex: -1, objectFit: "cover" }}
        priority // Preload the image
      />
      <Box
        mt={{ xs: -20, lg: -18 }}
        px={1}
        width="calc(100% - 2rem)"
        mx="auto"
      >
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

// Typechecking props for the CoverLayout
AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
