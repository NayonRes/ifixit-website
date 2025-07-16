import { Box, Container, Grid2, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const style = {
  inner: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    gap: { sm: 2, md: 4 },
    p: 4,
  },
};

const SectionTwo = () => {
  return (
    <Box sx={{ py: 10, background: "#F7F7F7" }}>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 6 }}>
          <Typography variant="body1" color="primary" sx={{ fontWeight: 600 }}>
            Our process
          </Typography>
          <Typography variant="h3">Creating memorable spaces</Typography>
          <Typography variant="body1" color="text.light">
            We design physical experiences that create more happy in the world.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Grid container spacing={3}>
                <Grid size={6} sx={style.inner}>
                  <Typography variant="h3" color="primary">
                    5400+
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color=""
                    sx={{ fontWeight: 600 }}
                  >
                    SUCCESSFULLY REPAIRED DEVICES
                  </Typography>
                </Grid>
                <Grid size={6} sx={style.inner}>
                  <Typography variant="h3" color="primary">
                    5400+
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color=""
                    sx={{ fontWeight: 600 }}
                  >
                    SUCCESSFULLY REPAIRED DEVICES
                  </Typography>
                </Grid>
                <Grid size={6} sx={style.inner}>
                  <Typography variant="h3" color="primary">
                    5400+
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color=""
                    sx={{ fontWeight: 600 }}
                  >
                    SUCCESSFULLY REPAIRED DEVICES
                  </Typography>
                </Grid>
                <Grid size={6} sx={style.inner}>
                  <Typography variant="h3" color="primary">
                    5400+
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color=""
                    sx={{ fontWeight: 600 }}
                  >
                    SUCCESSFULLY REPAIRED DEVICES
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img src="/section-2.jpg" loading="lazy" alt="" style={{ maxWidth: "100%" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionTwo;
