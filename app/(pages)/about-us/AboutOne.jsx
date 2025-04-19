import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./page.css";

const AboutOne = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid size={{ sm: 12, md: 7 }}>
            <Typography
              variant="h6"
              color="text.primary"
              sx={{ fontWeight: 600, mb: 2 }}
            >
              About Us
            </Typography>
            <Typography variant="h2">We do things differently... </Typography>
          </Grid>
          <Grid size={{ sm: 12, md: 5 }}>
            <Typography
              variant="h6"
              color="text.light"
              sx={{
                fontSize: "1.4rem",
                  height: "130px",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              Learn more about the company and the world-class  team
              behind Untitled.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ background: "#F9FAFB", py: 8 }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid size={{ sm: 12, md: 6 }}>
              <Typography
                variant="h4"
                sx={{ fontSize: "2rem", lineHeight: "2.5rem" }}
              >
                Welcome To iFixit <br /> Apple Service Center in <br />{" "}
                Bangladesh.
              </Typography>
              <Typography variant="h6" color="text.light" sx={{ my: 3 }}>
                iFixit BD is the leading Apple service centre in Bangladesh. We
                gained our reputation in this service by providing the best
                solution. Our expert team are always there to serve you.
              </Typography>
              <Box className="step">
                <ul>
                  <li>
                    <Typography variant="h6" color="text.light">
                      We repair all Apple devices like iPhone, iMac,
                      MacBook,iPad, Apple Watch.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="h6" color="text.light">
                      Servicing Apple products has never been so easy
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="h6" color="text.light">
                      You can always expect a hassle-free service from all of
                      our branches.
                    </Typography>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid size={{ sm: 12, md: 6 }}>
              <img src="/about.jpg" alt="" style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutOne;
