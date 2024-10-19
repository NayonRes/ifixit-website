import SectionSeven from "@/app/components/home_page/SectionSeven";
import PageHeader from "@/app/components/PageHeader";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import theme from "@/app/theme/ColorPalette";
import CallMadeIcon from "@mui/icons-material/CallMade";

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
    background: "#FEFAF5",
    width: { xs: "100%", sm: "100%", md: "auto" },
    border: `1px solid ${theme.light.primary.main}`,
  },
  card2: {
    p: 2,
    borderRadius: "16px",
    display: "flex",
    alignItems: "flex-start",
    gap: 2,
    width: { xs: "100%", sm: "100%", md: "auto" },
    border: `1px solid ${theme.light.primary.light}`,
  },
  card_image: {
    p: 2,
    borderRadius: "16px",
    border: `1px solid ${theme.light.primary.light}`,
    "& img": {
      width: "100%",
    },
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
          <Grid size={6} sx={style.card_wrapper}>
            <Box sx={style.card}>
              <Box>
                <img src="/icons/pin.svg" alt="" />
              </Box>
              <Box sx={style.card_text}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Jamuna Future Park
                </Typography>
                <Typography variant="subtitle1" color="text.light">
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
                  color="text.primary"
                  sx={{ fontWeight: 600, textDecoration: "underline" }}
                >
                  Call : 01820 00 99 00
                </Typography>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      // color: "#333",
                      borderRadius: "30px",
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
                <Typography variant="subtitle1" color="text.light">
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
                  sx={{ fontWeight: 600, textDecoration: "underline" }}
                >
                  Call : 01820 00 99 00
                </Typography>
                <Box>
                  <Button
                    variant="outlined"
                    sx={{
                      // color: "#333",
                      borderRadius: "30px",
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
                <Typography variant="subtitle1" color="text.light">
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
                  sx={{ fontWeight: 600, textDecoration: "underline" }}
                >
                  Call : 01820 00 99 00
                </Typography>
                <Box>
                  <Button
                    variant="outlined"
                    sx={{
                      // color: "#333",
                      borderRadius: "30px",
                      // mt: 4,
                    }}
                    endIcon={<CallMadeIcon />}
                  >
                    Visit on Map
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid size={6}>
            <Box sx={style.card_image}>
              <img src="/shop.jpg" alt="" />
            </Box>
            <Box sx={{mt: 6}} >
              <img src="/map.jpg" alt="" style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <SectionSeven />
    </Box>
  );
};

export default page;
