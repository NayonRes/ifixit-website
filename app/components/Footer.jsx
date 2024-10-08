import { Box, Container, Grid2, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CardSix from "../components/CardSix";
import Link from "next/link";

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
    <Box sx={{ py: 4, background: "#0C111D", color: "#94969C" }}>
      <Container maxWidth="xl">
        <Box>
          <Grid container spacing={0}>
            <Grid size={{ xs: 12, sm: 12, md: 2 }}>Logo</Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 8 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Link href="#" style={{ color: "#94969C" }}>
                Site Logo
              </Link>
              <Link href="#" style={{ color: "#94969C" }}>
                Careers
              </Link>
              <Link href="#" style={{ color: "#94969C" }}>
                Warranty policy
              </Link>
              <Link href="#" style={{ color: "#94969C" }}>
                Help
              </Link>
              <Link href="#" style={{ color: "#94969C" }}>
                Privacy
              </Link>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 2 }}>
              <Typography sx={{ textAlign: "right", color: "#94969C" }}>
                © 2077 Untitled UI
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionSix;
