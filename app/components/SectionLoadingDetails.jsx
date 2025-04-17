import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Skeleton } from "@mui/material";

const SectionLoadingDetails = () => {
  return (
    <Grid container spacing={3} sx={{ p: 4 }}>
      <Grid size={{ xs: 12, sm: 4, md: 4 }}>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Skeleton
            variant="rectangular"
            width={200}
            height={200}
            sx={{ borderRadius: "12px" }}
          />
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="text" sx={{ fontSize: "3rem", mb: 2 }} />
            <Skeleton variant="text" sx={{ fontSize: "3rem", mb: 2 }} />
            <Skeleton variant="text" sx={{ fontSize: "3rem", mb: 2 }} />
            <Skeleton variant="text" sx={{ fontSize: "3rem", mb: 2 }} />
          </Box>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 4, md: 4 }}></Grid>
      <Grid size={{ xs: 12, sm: 4, md: 4 }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={150}
          sx={{ borderRadius: "12px" }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={150}
          sx={{ borderRadius: "12px", mt: 4 }}
        />
      </Grid>
      <Grid size={12}>
        <Skeleton variant="text" sx={{ fontSize: "4rem", mb: 4 }} />
        <Skeleton variant="text" sx={{ fontSize: "4rem", mb: 4 }} />
        <Skeleton variant="text" sx={{ fontSize: "4rem", mb: 4 }} />
        <Skeleton variant="text" sx={{ fontSize: "4rem", mb: 4 }} />
        <Skeleton variant="text" sx={{ fontSize: "4rem", mb: 4 }} />
        <Skeleton variant="text" sx={{ fontSize: "4rem", mb: 4 }} />
        <Skeleton variant="text" sx={{ fontSize: "4rem", mb: 4 }} />
        <Skeleton variant="text" sx={{ fontSize: "4rem", mb: 4 }} />
      </Grid>
    </Grid>
  );
};

export default SectionLoadingDetails;
