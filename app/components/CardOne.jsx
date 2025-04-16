import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const CardOne = ({ item }) => {
  return (
    <Link href={`/device-list/${item._id}`}>
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
        <Typography variant="h5">{item?.name} Repair</Typography>
        <img
          src={item?.image?.url?.length > 0 ? item?.image?.url : "/noImage.jpg"}
          alt=""
          style={{ maxWidth: "100%" }}
          className="image"
        />
      </Box>
    </Link>
  );
};

export default CardOne;
