import { Box, Container, Grid2, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CardThree from "../components/CardThree";

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

const SectionFour = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            mb: 6,
          }}
        >
          <Typography variant="h3">iFixit Best Features</Typography>
          <Typography variant="body1" color="text.light">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid size={4}>
              <CardThree />
            </Grid>
            <Grid size={4}>
              <CardThree />
            </Grid>
            <Grid size={4}>
              <CardThree />
            </Grid>
            <Grid size={4}>
              <CardThree />
            </Grid>
            <Grid size={4}>
              <CardThree />
            </Grid>
            <Grid size={4}>
              <CardThree />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionFour;
