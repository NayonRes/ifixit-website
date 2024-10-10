import { Box, Typography } from "@mui/material";
import React from "react";

const CardFour = () => {
  return (
    <Box
      sx={{
        py: 3,
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        gap: 1,
        height: "100%",
      }}
    >
      <Typography variant="h6">Free Diagnostic Checkup</Typography>
      <Typography variant="body1" >
        Only we are providing you with a free diagnostic check-up on your Apple
        devices where all of the software and hardware issues will be checked by
        our expert technicians.
      </Typography>
    </Box>
  );
};

export default CardFour;
