import { Box, Container, Grid2, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CardOne from "../components/CardOne";
import SectionThreeTab from "./SectionThreeTab";

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

const SectionThree = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 6 }}>
          <Typography variant="h3">Available Services</Typography>
          <Typography variant="body1" color="text.light">
            Case studies from some of our amazing customers who are hiring
            faster.
          </Typography>
        </Box>
        <Box>
          <SectionThreeTab />
        </Box>
      </Container>
    </Box>
  );
};

export default SectionThree;
