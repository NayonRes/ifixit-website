import { Box, Container, Grid2, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CardOne from "../components/CardOne";

const Service = () => {
  return (
    <Container maxWidth="xl" sx={{ my:4 }} >
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, mb:6 }} >
      <Typography variant="body1" color="primary">
        SERVICES
      </Typography>
      <Typography variant="h3">Available Services</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid size={4}>
          <CardOne />
        </Grid>
        <Grid size={4}>
          <CardOne />
        </Grid>
        <Grid size={4}>
          <CardOne />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Service;
