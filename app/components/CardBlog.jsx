import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const CardBlog = () => {
  return (
    <Link href="/blog-details/fdfdf">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          gap: 3,

          height: "100%",
        }}
      >
        <img
          src="/products/mac.jpg"
          alt=""
          style={{ maxWidth: "100%", borderRadius: "10px" }}
        />
        <Typography variant="body2" sx={{ fontWeight: 600, color: "#6941C6" }}>
          Product
        </Typography>
        <Typography variant="h5" sx={{ lineHeight: 0 }}>
          Migrating to Linear 101
        </Typography>
        <Typography variant="body1" color="text.light">
          Linear helps streamline software projects, sprints, tasks, and bug
          tracking. Here’s how to get started.
        </Typography>
        <Box sx={{ display: "flex", gap: 1.5, alignItems: "center", mb: 2 }}>
          <img src="/avatar.png" alt="" />
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Phoenix Baker
            </Typography>
            <Typography variant="body2" color="text.light">
              19 Jan 2024
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default CardBlog;
