import SectionSeven from "@/app/components/home_page/SectionSeven";
import PageHeader from "@/app/components/PageHeader";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ColorPalette from "@/app/theme/ColorPalette";
import Gallery from "./[slug]/Gallery";

const style = {
  card_wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  card: {
    p: 2,
    borderRadius: "16px",
    display: "flex",
    alignItems: "flex-start",
    gap: 2,
    background: ColorPalette.light.primary.light,
    border: `1px solid ${ColorPalette.light.primary.main}`,
    width: { xs: "100%", sm: "100%", md: "auto" },
    mb: 2,
  },
  card2: {
    p: 2,
    borderRadius: "16px",
    display: "flex",
    alignItems: "flex-start",
    gap: 2,
    border: `1px solid #ddd`,
    width: { xs: "100%", sm: "100%", md: "auto" },
    mb: 2,
  },
  card_text: {
    display: "flex",
    gap: 1,
    flexDirection: "column",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
};

const page = () => {
  return (
    <Box>
      <Box>
        <img
          loading="lazy"
          src="/contact_top.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </Box>
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <Grid container spacing={4}>
          <Grid size={{ sm: 12, md: 12 }} sx={{ my: 8 }}>
            <img src="/details_map.jpg" alt="" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ background: ColorPalette.light.primary.light, py: 16 }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid size={{ sm: 12, md: 6 }} sx={style.card_wrapper}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, fontSize: "1.3rem", color: "#6840C5" }}
              >
                Our Locations
              </Typography>
              <Typography variant="h3" color="text.main">
                Shop Address
              </Typography>
              <Typography
                variant="body1"
                color="text.light"
                sx={{ fontSize: "1.5rem" }}
              >
                Find us at these locations.
              </Typography>
            </Grid>
            <Grid size={{ sm: 12, md: 6 }}>
              <Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    Jamuna Future Park
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.light"
                    sx={{ fontWeight: 400, fontSize: "1.5rem" }}
                  >
                    Off day: Wednesday
                  </Typography>
                  <Typography
                    color="text.light"
                    variant="body1"
                    sx={{ fontWeight: 400, fontSize: "1.5rem" }}
                  >
                    Shop # 4C-13D, 4th floor, Jamuna future park
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, fontSize: "1.5rem" }}
                  >
                    Call : 01820 00 99 00
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Gallery />
      <SectionSeven />
    </Box>
  );
};

export default page;
