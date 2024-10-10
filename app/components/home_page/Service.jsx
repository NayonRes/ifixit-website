import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CardOne from "../CardOne";

const Service = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 6 }}>
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
    </Box>
  );
};

export default Service;
