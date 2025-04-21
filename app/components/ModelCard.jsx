import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const ModelCard = ({ item }) => {
  const params = useParams();
  const searchParams = useSearchParams();

  const deviceName = searchParams.get("device_name");
  return (
    <Link
      href={`/device-list-category?device_id=${params.slug}&model_id=${item?._id}&device_name=${deviceName}`}
    >
      <Box
        sx={{
          py: 5,
          px: 3,
          mx: { xs: "auto", sm: 0 },
          width: { xs: "250px", sm: "100%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
          borderRadius: 5,
          border: "1px solid #ddd",
          height: "100%",
          transition: "background-color 0.3s", // smooth transition
          "&:hover": {
            backgroundColor: "#f5f5f5", // your hover color here
          },
        }}
      >
        <Typography
          variant="base"
          sx={{ textAlign: "center", lineHeight: "35px", fontWeight: 600 }}
        >
          {item?.name}
        </Typography>

        <img
          loading="lazy"
          src={item?.image?.url?.length > 0 ? item?.image?.url : "/noImage.jpg"}
          alt=""
          style={{ maxWidth: "100%" }}
          className="image"
        />
      </Box>
    </Link>
  );
};

export default ModelCard;
