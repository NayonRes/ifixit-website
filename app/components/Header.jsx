"use client";
import React, { useEffect } from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import Link from "next/link";
import MobileDrawer from "./MobileDrawer";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname, pathname);

  const buttonStyle = {
    textTransform: "none",
    fontSize: "18px",
    fontFamily: '"Arimo", sans-serif',
    px: 2,
    mx: 0.5,
    color: "#2E2E2E",
    overflow: "hidden",
    fontWeight: 400,
    transition: "color 0.3s",
    position: "relative",
    borderRadius: "0px",
    "&:hover": {
      background: "none",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      width: "0",
      height: "2px",
      bottom: "0",
      left: "50%",
      backgroundColor: "#2E2E2E",
      transition: "all 0.3s ease-in-out",
      transform: "translateX(-50%)",
    },
    "&:hover::before": {
      width: "100%",
    },
  };
  const active = {
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: "0",
      left: "50%",
      backgroundColor: "#000",
      transition: "all 0.3s ease-in-out",
      transform: "translateX(-50%)",
    },
  };

  const activeProjects = () => {
    return pathname.includes("/projects")
    // /projects/
  };

  return (
    <Container maxWidth="xl" sx={{ py: 1 }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid
          item
          xs="auto"
          sx={{
            "& img": {
              width: {
                xs: "36px",
                sm: "36px",
                md: "60px",
                lg: "60px",
                xl: "60px",
              },
            },
          }}
        >
          <img src="/Logo.svg" alt="chitron logo" width="60px" />
        </Grid>
        <Grid item xs="auto">
          <Box
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
          >
            <MobileDrawer />
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(pathname === "/" ? active : {}),
              }}
              component={Link}
              href="/"
            >
              Home
            </Button>
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(activeProjects() ? active : {}),
              }}
              component={Link}
              href="/projects"
            >
              Projects
            </Button>
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(pathname === "/categories" ? active : {}),
              }}
              component={Link}
              href="/categories"
            >
              Categories
            </Button>
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(pathname === "/about-us" ? active : {}),
              }}
              component={Link}
              href="/about-us"
            >
              About us
            </Button>
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(pathname === "/contacts" ? active : {}),
              }}
              component={Link}
              href="/contacts"
            >
              Contacts
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
