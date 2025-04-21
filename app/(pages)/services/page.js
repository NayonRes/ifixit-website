import PageHeader from "@/app/components/PageHeader";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import Service from "./Service";
import Line from "@/app/components/Line";
import SectionSix from "@/app/components/home_page/SectionSix";
import SectionSeven from "@/app/components/home_page/SectionSeven";

const page = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <PageHeader
          title="CHOOSE YOUR APPLE DEVICE!!"
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
      </Container>
      <Service />
      <Line />
      <SectionSix />
      <Line />
      <SectionSeven />
    </Box>
  );
};

export default page;
