import { Box, Typography } from "@mui/material";
import React from "react";

const CardTwo = () => {
  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "flex-start",
        gap: 3,
        borderRadius: 2,
        boxShadow: "0px 0px 10px 2px #eee",
        height: "100%",
      }}
      
    >
      <Typography variant="h5" sx={{ lineHeight: "2rem" }}>
        Liquid <br /> Damage
      </Typography>
      <Typography variant="body1">
        Worst thing that can happen to your device is get damaged by liquid.
        Sooner you bring it to us is better for your device.
      </Typography>
      <img src="/products/iphone_back.png" alt="" style={{ maxWidth: '100%' }} />
    </Box>
  );
};

export default CardTwo;
