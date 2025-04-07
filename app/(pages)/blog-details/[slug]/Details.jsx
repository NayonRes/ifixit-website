import { Box, Container, Typography } from "@mui/material";
import React from "react";
import PageHeader from "@/app/components/PageHeader";
import List from "./List";
import SectionSeven from "@/app/components/home_page/SectionSeven";
import DetailsText from "./DetailsText";

const Details = () => {
  return (
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
              What is Wireframing?
            </Typography>
          </Box>
          <Box>
            <Typography variant="headline2" sx={{ pt: 5 }}>
              Introduction to Wireframing and its Principles. Learn from the
              best in the industry with tips, tools, and best practices from
              those in the know.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mb: 6 }}>
          <img
            src="/lg.jpg"
            alt=""
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </Box>
        <DetailsText />
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
