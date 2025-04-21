import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import styles from "../../theme/styles";
import Link from "next/link";

const Banner = () => {
  return (
    <Box
      sx={{
        background: "url('/bg.png')",
        py: 6,
      }}
    >
      <Container maxWidth="xl">
        {/* <Box id="hero_section">
          <HomeSlider />
        </Box> */}
        <Box
          id="work_online"
          sx={{
            py: {
              xs: 2,
              sm: 4,
              md: 4,
              lg: 8,
              xl: 12,
            },
          }}
        >
          <Typography
            variant="h2"
            color="text.main"
            sx={{
              textAlign: "center",
              mb: 1,

              display: { xs: "none", md: "block" },
            }}
          >
            Start Your Repair Journey <br /> with iFixit
          </Typography>
          <Typography
            variant="h2"
            color="text.main"
            sx={{
              textAlign: "center",
              mb: 1,
              px: 1,
              display: { xs: "block", md: "none" },
            }}
          >
            Start Your Repair Journey with iFixit
          </Typography>
          <Typography
            variant="h6"
            color="text.main"
            sx={{
              textAlign: "center",
              fontWeight: 400,

              px: { xs: 1, sm: 0 },
            }}
          >
            Powerful, self-serve team engagement tools and analytics.
            Supercharge your <br /> managers & keep employees engaged from
            anywhere.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 10 }}>
          <Link href="/services">
            <Button variant="contained" color="primary">
              Repair Now
            </Button>
          </Link>
          <Button variant="outlined">Buy Now</Button>
        </Box>
        <Box
          sx={{
            gap: 4,
            display: styles.desktopOnlyFlex,
          }}
        >
          <Box>
            <img
              loading="lazy"
              src="/home_banner/banner1.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <img
              loading="lazy"
              src="/home_banner/banner2.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            />
            <img
              loading="lazy"
              src="/home_banner/banner3.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
