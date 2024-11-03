import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const CardOne = () => {
  return (
    <Link href="/details">
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
          height: "100%",
        }}
      >
        <Typography variant="h5">Apple</Typography>
        <img src="/products/apple.png" alt="" style={{ maxWidth: "100%" }} />
      </Box>
    </Link>
  );
};

export default CardOne;
