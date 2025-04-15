"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import MobileDrawer from "./MobileDrawer";

import styles from "../theme/styles";
import Shop from "./dropdown/Shop";
import { usePathname, useRouter } from "next/navigation";

const style = {
  li: {
    color: "#101828",
    fontWeight: 600,
  },
  active: {
    color: "#E96A3F",
    fontWeight: 600,
  },
};

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
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
                <Typography sx={pathname === "/" ? style.active : style.li}>
                  Home
                </Typography>
              </Link>
              <Link href="/services">
                <Typography
                  sx={pathname === "/services" ? style.active : style.li}
                >
                  Services
                </Typography>
              </Link>
              {/* <Link href="/device-list">
                <Typography
                  sx={pathname === "/device-list" ? style.active : style.li}
                >
                  Device List
                </Typography>
              </Link> */}
              <Link href="/blog">
                <Typography sx={pathname === "/blog" ? style.active : style.li}>
                  Blog
                </Typography>
              </Link>

              {/* <Link href="#">
                <Shop />
              </Link> */}
              <Link href="/contact-us">
                <Typography
                  sx={pathname === "/contact-us" ? style.active : style.li}
                >
                  Contact Us
                </Typography>
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
              <Link href="/login">
                <img src="/icons/profile.png" alt="" />
              </Link>
              {/* <Button
                variant="outlined"
                sx={{ height: 40, fontWeight: 500 }}
                onClick={() => router.push("/login")}
              >
                Login
              </Button> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
