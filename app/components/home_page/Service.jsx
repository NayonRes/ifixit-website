import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ServiceSingle from "./ServiceSingle";

const Service = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/device/public/list?status=true`,
    { next: { revalidate: 0 } } // Cache for 15 minutes instead of 0
  );
  const li = await data.json();
  const list = li?.data;
 

  return (
    <Box sx={{ pt: { sm: 0, md: 10 }, pb: 10 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 6 }}>
          <Typography variant="body1" color="primary">
            SERVICES
          </Typography>
          <Typography variant="h3">Available Services</Typography>
        </Box>
        <Grid container spacing={3}>
          <ServiceSingle list={list} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Service;
