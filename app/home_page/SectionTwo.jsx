import { Box, Container, Grid2, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CardOne from "../components/CardOne";

const style={
  inner:{display: "flex", flexDirection: 'column', textAlign: 'center', alignItems:'center', gap: 4, p:4 }
}

const SectionTwo = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 10, background: "#F7F7F7" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 6 }}>
        <Typography variant="body1" color="primary">
          Our process
        </Typography>
        <Typography variant="h3">Creating memorable spaces</Typography>
        <Typography variant="body1" color="text.light">
          We design physical experiences that create more happy in the world.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid size={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }} >
          <Grid container spacing={3}>
            <Grid size={6} sx={style.inner} >
             <Typography variant="h2" color="primary" >5400+</Typography>
             <Typography variant="subtitle1" color="" >SUCCESSFULLY REPAIRED DEVICES</Typography>
            </Grid>
            <Grid size={6}  sx={style.inner}>
             <Typography variant="h2" color="primary" >5400+</Typography>
             <Typography variant="subtitle1" color="" >SUCCESSFULLY REPAIRED DEVICES</Typography>
            </Grid>
            <Grid size={6}  sx={style.inner} >
             <Typography variant="h2" color="primary" >5400+</Typography>
             <Typography variant="subtitle1" color="" >SUCCESSFULLY REPAIRED DEVICES</Typography>
            </Grid>
            <Grid size={6}  sx={style.inner} >
             <Typography variant="h2" color="primary" >5400+</Typography>
             <Typography variant="subtitle1" color="" >SUCCESSFULLY REPAIRED DEVICES</Typography>
            </Grid>
            
          </Grid>
          </Box>
        </Grid>
        <Grid size={6}>
          <img src="/section-2.jpg" alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionTwo;
