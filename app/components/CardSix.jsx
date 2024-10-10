import { Box, Typography } from "@mui/material";
import React from "react";

const CardSix = () => {
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
      <Typography variant="h5">Software and tools</Typography>
      <Typography variant="body1">
        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
        suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
        montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
        vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
        varius id.
      </Typography>
      <Typography variant="body1">
        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
        suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
        montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
        vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
        varius id.
      </Typography>
    </Box>
  );
};

export default CardSix;
