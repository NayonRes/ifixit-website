import CardOne from "@/app/components/CardOne";
import Line from "@/app/components/Line";
import PageHeader from "@/app/components/PageHeader";
import SectionSix from "@/app/components/home_page/SectionSix";
import SectionSeven from "@/app/components/home_page/SectionSeven";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import RepairServiceCard from "@/app/components/RepairServiceCard";

const page = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/device/public/list`
  );

  const devices = await data.json();
  console.log(
    "process.env.NEXT_PUBLIC_BASE_URL",
    process.env.NEXT_PUBLIC_BASE_URL
  );
  console.log("devices", devices);

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
        <Grid container spacing={3}>
          {devices?.data?.length > 0 &&
            devices?.data
              ?.filter((item) => item.parent_id === null)
              ?.map((item, i) => (
                <Grid size={{ xs: 12, sm: 4, md: 4 }} key={i}>
                  <RepairServiceCard item={item} />
                </Grid>
              ))}
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
