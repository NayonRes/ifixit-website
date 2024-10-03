import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import MobileDrawer from "./MobileDrawer";

import styles from "../theme/styles";

const Navbar = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Link href="#">
              <Typography variant="h4">Site Logo</Typography>
            </Link>
            <Box
              // sx={styles.desktopOnly}
              sx={{
                display: styles.desktopOnlyFlex,
                gap: 4,
                alignItems: "center",
              }}
            >
              <Link href="#">Home</Link>
              <Link href="#">Services</Link>
              <Link href="#">Shop</Link>
              <Link href="#">Contact Us</Link>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                display: styles.mobileOnly,
                gap: 4,
              }}
            >
              <MobileDrawer />
            </Box>
            <Box
              sx={{
                display: styles.desktopOnly,
                gap: 4,
              }}
            >
              <Link href="#">Login</Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
