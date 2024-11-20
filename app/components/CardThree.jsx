import { Box, Typography } from "@mui/material";
import React from "react";

const CardThree = () => {
  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        gap: 2,
        height: "100%",
      }}
    >
      <Box sx={{ borderRadius: 2, boxShadow: "0px 0px 10px 2px #eee", p: 1.7 }}>
        <img src="/icons/message.svg" alt="" />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 600 }} >INSTANT REPAIR</Typography>
      <Typography variant="body1" color="text.light" sx={{ textAlign: "center" }}>
        In case you need emergency repair service we are here to assist you with
        an instant repair. You will get your broken devices fixed in no time.
      </Typography>
    </Box>
  );
};

export default CardThree;
