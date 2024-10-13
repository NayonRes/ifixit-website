import { Box, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "#666",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ color: "#ffff" }} variant="h2">
        Loading .................
      </Typography>
    </Box>
  );
};

export default Loading;
