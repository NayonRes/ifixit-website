"use client";

import { Avatar, Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useParams, useSearchParams } from "next/navigation";
import { useUrl } from "../context/UrlContext";
const ServiceCard = ({ item, modelList }) => {
  const params = useParams();
  const searchParams = useSearchParams();
  const { url, pathname, hash } = useUrl();
  const device_id = searchParams.get("device_id");
  const model_id = searchParams.get("model_id");
  const devices = params.devices;
  const slug = params.slug;

  const deviceName = searchParams.get("device_name");

  return (
    <Link
      href={`${
        item?.endpoints?.find(
          (endpoint) =>
            endpoint?.model_id ===
            modelList?.find((model) => `#!${model?.endpoint}` === hash)?._id
        )?.endpoint ?? "#"
      }`}
      // href={`${
      //   item?.endpoints?.find(
      //     (endpoint) =>
      //       endpoint?.model_id ===
      //       modelList?.find((model) => `#!${model?.endpoint}` === hash)?._id
      //   )?.endpoint ?? "#"
      // }#${item?._id}`}
    >
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          // gap: 3,
          borderRadius: 6,
          border: "1px solid #ddd",
          height: "100%",

          transition: "0.3s",
          "& .image": {
            transition: "transform 0.3s ease-in-out",
          },
          "&:hover": {
            // background: "red",
            // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
            "& .image": {
              // animation: "shake 0.4s ease-in-out",
              transform: "scale(1.1)",
            },
          },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Avatar sx={{ width: 120, height: 120, bgcolor: "#f5f5f5", p: 3 }}>
            <img
              src={
                item?.image?.url?.length > 0 ? item?.image?.url : "/noImage.jpg"
              }
              alt=""
              style={{ maxWidth: "100%" }}
              className="image"
            />
          </Avatar>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="base"
              sx={{
                mt: 1,
                fontWeight: 600,
                textAlign: "center",
                lineHeight: "24px",
              }}
            >
              {item?.title}
            </Typography>
            {
              // item?.repair_info?.length === 1 &&

              item?.repair_info?.length > 0 &&
                item.repair_info.length === 1 &&
                !item.repair_info[0]?.product_id && (
                  <Typography
                    variant="medium"
                    color="text.light"
                    sx={{ fontWeight: 600, textAlign: "center" }}
                  >
                    Tk {item?.repair_info[0]?.repair_cost}
                  </Typography>
                )
            }
          </Box>
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
