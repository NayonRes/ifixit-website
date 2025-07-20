import { Box, Container } from "@mui/material";
import React from "react";
import PageHeader from "@/app/components/PageHeader";
import List from "./List";
import SectionSeven from "../../components/home_page/SectionSeven";

export const metadata = {
  title: "iFixit - Blog",
  description: "iFixit Blog",
  keywords: "mobile blog, iphone blog",
};

const page = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <PageHeader
              title="APPLE REPAIR AND SERVICING BLOG IN BANGLADESH"
              // subtitle="Choose the iPhone model you need to repair"
            />
          </Box>
        </Box>
        {/* <Box sx={{ mb: 6 }}>
          <img
            loading="lazy"
            src="/lg.jpg"
            alt=""
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </Box> */}
        <List />
      </Container>
      <SectionSeven />
    </Box>
  );
};

export default page;
