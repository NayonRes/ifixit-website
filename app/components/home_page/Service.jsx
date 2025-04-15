import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CardOne from "../CardOne";

const Service = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/service/public/list?limit=100`
  );
  const services = await data.json();
  console.log(
    "process.env.NEXT_PUBLIC_BASE_URL",
    process.env.NEXT_PUBLIC_BASE_URL
  );
  console.log("services", services);
  return (
    <Box sx={{ pt: { sm: 0, md: 10 }, pb: 10 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 6 }}>
          <Typography variant="body1" color="primary">
            SERVICES
          </Typography>
          <Typography variant="h3">Available Services</Typography>
        </Box>
        <Grid container spacing={3}>
          {services?.data?.length > 0 &&
            services?.data?.map((item, i) => (
              <Grid size={{ xs: 12, sm: 4, md: 4 }} key={i}>
                <CardOne item={item} />
              </Grid>
            ))}
          {/* <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <CardOne />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <CardOne />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Service;
