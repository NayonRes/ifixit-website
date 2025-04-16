import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const ModelCard = ({ item }) => {
  const params = useParams();
  const searchParams = useSearchParams();
  return (
    <Link
      href={`/device-list-category?device_id=${params.slug}&model_id=${item?._id}`}
    >
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
        <Typography variant="h5">{item?.name}</Typography>

        <img
          src={item?.image?.url?.length > 0 ? item?.image?.url : "/noImage.jpg"}
          alt=""
          style={{ maxWidth: "100%" }}
        />
      </Box>
    </Link>
  );
};

export default ModelCard;
