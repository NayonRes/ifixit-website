import { Box, Typography } from "@mui/material";
import React from "react";

const PageHeader = ({ title, subtitle, menu_title }) => {
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
      <Typography variant="body1" color="text.main" sx={{ fontWeight: 600 }}>
        {menu_title}
      </Typography>
      <Typography variant="h3" color="text.main" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography variant="h6" color="text.main">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default PageHeader;
