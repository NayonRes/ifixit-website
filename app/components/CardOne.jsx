import { Box, Typography } from "@mui/material";
import React from "react";

const CardOne = () => {
  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        gap: 3,
        borderRadius: 6,
        border: "1px solid #ddd",
        height: '100%'
      }}
    >
      <Typography variant="h5">Apple</Typography>
      <img src="/products/apple.png" alt="" />
    </Box>
  );
};

export default CardOne;
