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
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 12, md: 2 }}>
              <img loading="lazy" src="/logo.svg" alt="" />
            </Grid>
            {/* desktop only  */}
            <Grid
              size={{ xs: 12, sm: 12, md: 8 }}
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: { xs: "center", sm: "center" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  gap: 2,
                  mt: 1,
                }}
              >
                <Link href="#" style={{ color: "#94969C" }}>
                  Blog
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
              </Box>
            </Grid>
            {/* mobile only  */}

            <Grid
              size={{ xs: 6, sm: 6, md: 6 }}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: { xs: "center", sm: "center" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  gap: 2,
                  mt: 1,
                }}
              >
                <Link href="#" style={{ color: "#94969C" }}>
                  Blog
                </Link>

                <Link href="#" style={{ color: "#94969C" }}>
                  Warranty policy
                </Link>

                <Link href="#" style={{ color: "#94969C" }}>
                  Privacy
                </Link>
              </Box>
            </Grid>

            {/* mobile only  */}
            <Grid
              size={{ xs: 6, sm: 6, md: 6 }}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: { xs: "center", sm: "center" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  gap: 2,
                  mt: 1,
                }}
              >
                <Link href="#" style={{ color: "#94969C" }}>
                  Careers
                </Link>

                <Link href="#" style={{ color: "#94969C" }}>
                  Help
                </Link>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 2 }}
              sx={{
                mt: { xs: 4, sm: 0 },
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "flex-start", sm: "flex-end" },
                }}
              >
                <Typography
                  sx={{
                    // textAlign: { xs: "center", sm: "right" },
                    color: "#94969C",
                  }}
                >
                  © 2024 iFixit Limited
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionSix;
