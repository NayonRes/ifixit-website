import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import MobileDrawer from "./MobileDrawer";

import styles from "../theme/styles";
import Shop from "./dropdown/Shop";

const style = {
  li: {
    color: "#101828",
    fontWeight: 600,
  },
};

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
            <Link href="/">
              <Typography variant="h4">
                <img src="/logo.svg" alt="" />
              </Typography>
            </Link>
            <Box
              // sx={styles.desktopOnly}
              sx={{
                display: styles.desktopOnlyFlex,
                gap: 4,
                alignItems: "center",
              }}
            >
              <Link href="/">
                <Typography sx={style.li}>Home</Typography>
              </Link>
              <Link href="/services">
                <Typography sx={style.li}>Services</Typography>
              </Link>
              <Link href="/device-list">
                <Typography sx={style.li}>Device List</Typography>
              </Link>
              <Link href="/blog">
                <Typography sx={style.li}>Blog</Typography>
              </Link>

              {/* <Link href="#">
                <Shop />
              </Link> */}
              <Link href="/contact-us">
                <Typography sx={style.li}>Contact Us</Typography>
              </Link>
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
              <Link href="#">
                <img src="/icons/profile.png" alt="" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
