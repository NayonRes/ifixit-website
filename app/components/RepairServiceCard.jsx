"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const RepairServiceCard = ({ item, navigate }) => {
  return (
    // <Link
    //   href={
    //     item?.parent_id === null
    //       ? `/device-list/${item._id}`
    //       : `/service/${item._id}`
    //   }
    // >
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
        cursor: "pointer",
        transition: "background-color 0.3s", // smooth transition
        "&:hover": {
          backgroundColor: "#f5f5f5", // your hover color here
        },
      }}
      onClick={() => {
        navigate(item);
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {item?.name?.replace(/series\.?/i, "").trim()} Repair
      </Typography>
      <img
        loading="lazy"
        src={item?.image?.url?.length > 0 ? item?.image?.url : "/noImage.jpg"}
        alt={`${item?.name?.replace(/series\.?/i, "").trim()} Repair`}
        style={{ maxWidth: "100%" }}
        className="image"
      />
    </Box>
    // </Link>
  );
};

export default RepairServiceCard;
