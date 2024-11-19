import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";

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

const SectionSeven = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="xl">
        <Box>
          <Grid container spacing={0}>
            <Grid size={12}>
              <Box
                sx={{
                  background:
                    "linear-gradient(49deg, #EC2227  0%, #F16A23 100%);",
                  py: 8,
                  px: { sm: 3, md: 6 },
                  borderRadius: 4,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  color: "#eee",
                  textShadow: "2px 2px 6px #FC002C",
                }}
              >
                <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
                  online consultation
                </Typography>
                <Typography variant="h3">
                  Expert doctors are online <br /> NOW!
                </Typography>
                <Typography variant="subtitle1">
                  Personalized support, ensuring immediate access <br /> to
                  expert care for your well-being.
                </Typography>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#fff",
                      color: "#333",
                      borderRadius: "30px",
                      mt: 4,
                    }}
                    endIcon={<CallMadeIcon />}
                  >
                    Live Chat
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionSeven;
