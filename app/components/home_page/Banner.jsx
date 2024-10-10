import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import styles from "../../theme/styles";

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
            sx={{ textAlign: "center", mb: 1, px: { xs: 4, sm: 0 } }}
          >
            Start Your Repair Journey <br /> with iFixit
          </Typography>
          <Typography
            variant="h6"
            color="text.main"
            sx={{
              textAlign: "center",
              fontWeight: 400,
              
              px: { xs: 4, sm: 0 },
            }}
          >
            Powerful, self-serve team engagement tools and analytics.
            Supercharge your <br /> managers & keep employees engaged from
            anywhere.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 10, }} >
          <Button variant="contained" color="primary"  >Repair Now</Button>
          <Button variant="outlined" >Buy Now</Button>
        </Box>
        <Box
          sx={{
            gap: 4,
            display: styles.desktopOnlyFlex,
          }}
        >
          <Box>
            <img
              src="/home_banner/banner1.jpg"
              alt=""
              sx={{ maxWidth: "100%" }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <img
              src="/home_banner/banner2.jpg"
              alt=""
              sx={{ maxWidth: "100%" }}
            />
            <img
              src="/home_banner/banner3.jpg"
              alt=""
              sx={{ maxWidth: "100%" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
