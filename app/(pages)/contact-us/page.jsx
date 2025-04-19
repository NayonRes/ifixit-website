import SectionSeven from "@/app/components/home_page/SectionSeven";
import PageHeader from "@/app/components/PageHeader";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ColorPalette from "@/app/theme/ColorPalette";
import Branches from "./Branches";

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
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <PageHeader
          menu_title="Contact Us"
          title="Our Locations"
          subtitle="Come visit our friendly team at one of our offices."
        />
        <Grid container spacing={4}>
          <Grid size={{ sm: 12, md: 6 }} sx={style.card_wrapper}>
            <Branches />
            {/* <Box sx={style.card}>
              <Box>
                <img src="/icons/pin.svg" alt="" />
              </Box>
              <Box sx={style.card_text}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Jamuna Future Park
                </Typography>
                <Typography variant="body1" color="text.light">
                  Off day: Wednesday
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.light"
                  sx={{ fontWeight: 600 }}
                >
                  Shop # 4C-13D, 4th floor, Jamuna future park
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={ColorPalette.light.primary.main}
                  sx={{ textDecoration: "underline" }}
                >
                  Call : 01820 00 99 00
                </Typography>
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      borderRadius: "30px",
                      fontWeight: 500,
                      background: ColorPalette.light.primary.main,

                      // mt: 4,
                    }}
                    endIcon={<CallMadeIcon />}
                  >
                    Visit on Map
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box sx={style.card2}>
              <Box>
                <img src="/icons/pin.svg" alt="" />
              </Box>
              <Box sx={style.card_text}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Jamuna Future Park
                </Typography>
                <Typography variant="body1" color="text.light">
                  Off day: Wednesday
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.light"
                  sx={{ fontWeight: 600 }}
                >
                  Shop # 4C-13D, 4th floor, Jamuna future park
                </Typography>
                <Typography
                  variant="subtitle1"
                  // color={ColorPalette.light.primary.main}
                  sx={{ textDecoration: "underline" }}
                >
                  Call : 01820 00 99 00
                </Typography>
                <Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      borderRadius: "30px",
                      fontWeight: 500,
                      // mt: 4,
                    }}
                    endIcon={<CallMadeIcon />}
                  >
                    Visit on Map
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box sx={style.card2}>
              <Box>
                <img src="/icons/pin.svg" alt="" />
              </Box>
              <Box sx={style.card_text}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Jamuna Future Park
                </Typography>
                <Typography variant="body1" color="text.light">
                  Off day: Wednesday
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.light"
                  sx={{ fontWeight: 600 }}
                >
                  Shop # 4C-13D, 4th floor, Jamuna future park
                </Typography>
                <Typography
                  variant="subtitle1"
                  // color={ColorPalette.light.primary.main}
                  sx={{ textDecoration: "underline" }}
                >
                  Call : 01820 00 99 00
                </Typography>
                <Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      borderRadius: "30px",
                      fontWeight: 500,
                      // mt: 4,
                    }}
                    endIcon={<CallMadeIcon />}
                  >
                    Visit on Map
                  </Button>
                </Box>
              </Box>
            </Box> */}
          </Grid>
          <Grid size={{ sm: 12, md: 6 }}>
            <Box
              sx={{
                p: 2,
                border: "1px solid #ddd",
                borderRadius: "12px",
                mb: 6,
              }}
            >
              <img
                loading="lazy"
                src="/shop.jpg"
                alt=""
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Box>
            <Box>
              <img
                loading="lazy"
                src="/gmap.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <SectionSeven />
    </Box>
  );
};

export default page;
