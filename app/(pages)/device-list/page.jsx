import { Box, Container } from "@mui/material";
import React from "react";
import PageHeader from "@/app/components/PageHeader";
import List from "./List";
import SectionSix from "../../components/home_page/SectionSix"
import SectionSeven from "../../components/home_page/SectionSeven"

const page = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <PageHeader
          title="iPhone Repair Service"
          subtitle="Choose the iPhone model you need to repair"
        />
        <List />
      </Container>
      <SectionSix />
      <SectionSeven />

    </Box>
  );
};

export default page;
