import { Box } from "@mui/material";
import React from "react";

const Line = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "block",
          width: "50px",
          height: "3px",
          background: "#F57042",
        }}
      ></Box>
    </Box>
  );
};

export default Line;
