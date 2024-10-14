import SectionSeven from "@/app/components/home_page/SectionSeven";
import PageHeader from "@/app/components/PageHeader";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const style = {
  card_wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  card: {
    p: 2,
    borderRadius: "7px",
    display: "flex",
    alignItems: "flex-start",
    gap: 2,
    background: "#F2F3F7",
    width: { xs: "100%", sm: "100%", md: "auto" },
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
                <Typography variant="h6">Jamuna Future Park</Typography>
                <Typography variant="subtitle1">Off day: Wednesday</Typography>
                <Typography variant="subtitle1">
                  Shop # 4C-13D, 4th floor, Jamuna future park
                </Typography>
                <Typography variant="subtitle1">
                  Call : 01820 00 99 00
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                background: "#F9F9F9",
                borderRadius: 4,
              }}
            >
              <Box sx={{ maxWidth: 400, minWidth: 300, p: 4 }}>
                <Box sx={{ fontWeight: 600, mb: 2 }}>Headquarters</Box>
                <Box>123 Main St, Anytown, USA</Box>
                <Box>Phone: +1 123-456-7890</Box>
                <Box>Email: info@example.com</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <SectionSeven />
    </Box>
  );
};

export default page;
