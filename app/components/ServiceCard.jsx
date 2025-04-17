import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
const ServiceCard = ({ item }) => {
  return (
    <Link href={`/service-details/${item._id}`}>
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          // gap: 3,
          borderRadius: 6,
          border: "1px solid #ddd",
          height: "100%",
          
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <img
            src={
              item?.image?.url?.length > 0 ? item?.image?.url : "/noImage.jpg"
            }
            alt=""
            style={{ maxWidth: "100%" }}
            className="image"
          />

          <Typography variant="base" sx={{ mt: 3, fontWeight: 600 }}>
            {item?.title}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="text"
            color="primary"
            size="small"
            endIcon={<ArrowForwardOutlinedIcon />}
            sx={{ fontSize: "14px" }}
          >
            More Info
          </Button>
        </Box>
      </Box>
    </Link>
  );
};

export default ServiceCard;
