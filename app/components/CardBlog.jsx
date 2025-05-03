"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const CardBlog = ({ blog = {} }) => {
  const {
    _id = "",
    title = "Blog Title",
    subtitle = "",
    description = "",
    image = { url: "/products/mac.jpg" },
    created_at = new Date().toISOString(),
    created_by = "Author",
  } = blog;

  // Format the date
  const formattedDate = formatDate(created_at);

  return (
    <Link
      href={`/blog-details/${_id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          height: "100%",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <img
          src={image.url || "/products/mac.jpg"}
          alt={title}
          style={{
            maxWidth: "100%",
            borderRadius: "10px",
            aspectRatio: "16/9",
            objectFit: "cover",
          }}
        />
        {/* <Typography variant="body2" sx={{ fontWeight: 600, color: "#6941C6" }}>
          Blog
        </Typography> */}
        <Typography
          variant="h5"
          sx={{
            lineHeight: 1.2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="text.light"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {subtitle}
        </Typography>
        {/* <Box
          sx={{
            display: "flex",
            gap: 1.5,
            alignItems: "center",
            mb: 2,
            mt: "auto",
          }}
        >
          <img
            loading="lazy"
            src="/avatar.png"
            alt="Author avatar"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          />
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {created_by.replace(/@.*$/, "")}
            </Typography>
            <Typography variant="body2" color="text.light">
              {formattedDate}
            </Typography>
          </Box>
        </Box> */}
      </Box>
    </Link>
  );
};

export default CardBlog;
