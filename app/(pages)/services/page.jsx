import CardOne from "@/app/components/CardOne";
import Line from "@/app/components/Line";
import PageHeader from "@/app/components/PageHeader";
import SectionSix from "@/app/components/home_page/SectionSix";
import SectionSeven from "@/app/components/home_page/SectionSeven";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const page = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <PageHeader
          title="CHOOSE YOUR APPLE DEVICE !!"
          subtitle="Choose From iPhone, iPad, Macbook, iMac, Apple Watch, Drone Device List"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            mb: 6,
          }}
        >
          <Typography variant="body1" color="primary">
            SERVICES
          </Typography>
          <Typography variant="h3">Available Services</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <CardOne />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <CardOne />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <CardOne />
          </Grid>
        </Grid>
      </Container>
      <Line />
      <SectionSix />
      <Line />
      <SectionSeven />
    </Box>
  );
};

export default page;
