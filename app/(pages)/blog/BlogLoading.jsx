import React from "react";
import { Container, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2";

const BlogLoading = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Skeleton variant="rectangular" width="100%" height={118} />
          <Skeleton variant="text" height={40} />
          <Skeleton />
          <Skeleton width="70%" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Skeleton variant="rectangular" width="100%" height={118} />
          <Skeleton variant="text" height={40} />
          <Skeleton />
          <Skeleton width="70%" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
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
