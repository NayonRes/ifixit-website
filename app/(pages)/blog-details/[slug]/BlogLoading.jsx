import React from "react";
import { Box, Container, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2";

const BlogLoading = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={6}>
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 0,
            }}
          >
            <Skeleton variant="text" height={60} width="60%" />
            <Skeleton variant="text" height={60} width="50%" />
            <Skeleton width="70%" sx={{my: 2}} />
        
            <Skeleton variant="rectangular" width="100%" height={500} />
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Skeleton variant="rectangular" width="100%" height={118} />
          <Skeleton variant="text" height={40} />
          <Skeleton />
          <Skeleton width="70%" />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Skeleton variant="rectangular" width="100%" height={118} />
          <Skeleton variant="text" height={40} />
          <Skeleton />
          <Skeleton width="70%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogLoading;
