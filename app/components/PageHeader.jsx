import { Box, Typography } from "@mui/material";
import React from "react";

const PageHeader = ({ title, subtitle, menu_title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: { sm: 2, md: 8 },
        mb: 8,
        gap: {xs: 2, md: 4},
      }}
    >
      <Typography variant="body1" color="text.main" sx={{ fontWeight: 600 }}>
        {menu_title}
      </Typography>
      <Typography variant="h3" color="text.main" sx={{ fontWeight: 600, textAlign: "center" }}>
        {title}
      </Typography>
      <Typography variant="h6" color="text.main" sx={{ textAlign: "center" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default PageHeader;
