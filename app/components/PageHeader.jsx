import { Box, Typography } from "@mui/material";
import React from "react";

const PageHeader = ({ title, subtitle }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 8,
        gap: 4,
      }}
    >
      <Typography variant="h2" color="text.main">
        {title}
      </Typography>
      <Typography variant="h6" color="text.main">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default PageHeader;
