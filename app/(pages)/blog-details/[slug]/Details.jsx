"use client";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import SectionSeven from "@/app/components/home_page/SectionSeven";
import DetailsText from "./DetailsText";
import axios from "axios";
import List from "../../blog/List";
import BlogLoading from "./BlogLoading";

const Details = ({ param }) => {
  const [blogs, setBlogs] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blog/public/${param}`
      );

      setBlogs(response.data?.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError("Failed to load blog posts. Please try again later.");
      setBlogs({});
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ width: "100%", py: 4, textAlign: "center" }}>
          <Typography color="error">{error}</Typography>
        </Box>
      </Container>
    );
  }
  return loading ? (
    <Box>
      {/* <CircularProgress /> */}
      <BlogLoading />
    </Box>
  ) : (
    <Box>
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
            mt: 12,
            mb: 8,
            width: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{}}>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              {blogs?.title}
            </Typography>
          </Box>
          <Box>
            <Typography variant="headline2" sx={{ pt: 5 }}>
              {blogs?.subtitle}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mb: 6 }}>
          <img
            loading="lazy"
            src={blogs?.image?.url || "/lg.jpg"}
            alt=""
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </Box>
        <DetailsText item={blogs} />
        <Box sx={{ mt: 12 }}>
          <List />
        </Box>
      </Container>
      {/* <SectionSix /> */}
      <SectionSeven />
    </Box>
  );
};

export default Details;
