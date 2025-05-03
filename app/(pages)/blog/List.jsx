"use client";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import CardBlog from "../../components/CardBlog";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { CircularProgress, Typography, Container } from "@mui/material";
import "./paginate.css";
import BlogLoading from "./BlogLoading";

export default function List() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const limit = 6;
  useEffect(() => {
    fetchBlogs(currentPage + 1);
  }, [currentPage]);

  const fetchBlogs = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blog/public/list?status=true&limit=${limit}&page=${page}`
      );

      const { data } = response;

      if (data.success) {
        setBlogs(data.data || []);
        setTotalPosts(data.totalData || 0);

        const totalPages = Math.ceil(data.totalData / limit);
        setPageCount(totalPages);
      } else {
        setError(data.message || "Failed to load blog posts");
        setBlogs([]);
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError("Failed to load blog posts. Please try again later.");
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (selectedItem) => {
    setCurrentPage(selectedItem.selected);

    window.scrollTo(0, 0);
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

  return (
    <Container maxWidth="lg">
      <Box sx={{ width: "100%", py: 0 }}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {/* <CircularProgress /> */}
            <BlogLoading />
          </Box>
        ) : (
          <>
            {/* <Box sx={{ mb: 4 }}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
                Blog Posts
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Showing {blogs.length} of {totalPosts} blog posts
              </Typography>
            </Box> */}

            <Grid container spacing={6}>
              {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={blog._id || index}>
                    <CardBlog blog={blog} />
                  </Grid>
                ))
              ) : (
                <Grid xs={12}>
                  <Box sx={{ textAlign: "center", py: 8 }}>
                    <Typography variant="h6">No blog posts found.</Typography>
                  </Box>
                </Grid>
              )}
            </Grid>

            {blogs.length > 0 && pageCount > 1 && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
                <ReactPaginate
                  previousLabel={"← Previous"}
                  nextLabel={"Next →"}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageChange}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                  forcePage={currentPage}
                  renderOnZeroPageCount={null}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item-prev"}
                  previousLinkClassName={"page-link-prev"}
                  nextClassName={"page-item-next"}
                  nextLinkClassName={"page-link-next"}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  disabledClassName={"disabled"}
                />
              </Box>
            )}
          </>
        )}
      </Box>
    </Container>
  );
}
