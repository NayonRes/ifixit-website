import React from "react";
import Grid from "@mui/material/Grid2";
import { Skeleton } from "@mui/material";

const loading = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Skeleton variant="text" width="100%" height={80} />
        <Skeleton variant="text" width="100%" height={80} />
        <Skeleton variant="text" width="100%" height={80} />
        <Skeleton variant="text" width="100%" height={80} />
        <Skeleton variant="text" width="100%" height={80} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={400}
          sx={{ borderRadius: "12px" }}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={400}
          sx={{ borderRadius: "12px" }}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={400}
          sx={{ borderRadius: "12px" }}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={400}
          sx={{ borderRadius: "12px" }}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={400}
          sx={{ borderRadius: "12px" }}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={400}
          sx={{ borderRadius: "12px" }}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={400}
          sx={{ borderRadius: "12px" }}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={400}
          sx={{ borderRadius: "12px" }}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={400}
          sx={{ borderRadius: "12px" }}
        />
      </Grid>
    </Grid>
  );
};

export default loading;
