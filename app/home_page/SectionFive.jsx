import { Box, Container, Grid2, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CardThree from "../components/CardThree";
import CardFour from "../components/cardFour";

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

const SectionFive = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            mb: 8,
          }}
        >
          <Typography variant="h3">Why choose iFixit</Typography>
          <Box>
            <img src="/why.png" alt="" style={{ maxWidth: "100%" }} />
          </Box>
        </Box>
        <Box>
          <Box sx={{ height: 4, display: "flex", width: "100%" }}>
            <Box sx={{ background: "#7F56D9", height: "100%", flex: 1 }}></Box>
            <Box sx={{ background: "#eee", height: "100%", flex: 2 }}></Box>
          </Box>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <CardFour />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <CardFour />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <CardFour />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <CardFour />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <CardFour />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <CardFour />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionFive;
