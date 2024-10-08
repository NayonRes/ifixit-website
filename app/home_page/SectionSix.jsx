import { Box, Container, Grid2, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CardSix from "../components/CardSix";

const style = {
  inner: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    gap: 4,
    p: 4,
  },
};

const SectionSix = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="xl">
        <Box>
          <Grid container spacing={0}>
            <Grid size={12}>
              <CardSix />
            </Grid>
            <Grid size={12}>
              <CardSix />
            </Grid>
            <Grid size={12}>
              <CardSix />
            </Grid>
            <Grid size={12}>
              <CardSix />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionSix;
