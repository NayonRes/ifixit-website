import SectionSeven from "@/app/components/home_page/SectionSeven";
import { Box } from "@mui/material";

import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ColorPalette from "@/app/theme/ColorPalette";
import SectionFive from "@/app/components/home_page/SectionFive";
import SectionTwo from "@/app/components/home_page/SectionTwo";
import SectionFour from "@/app/components/home_page/SectionFour";
import Gallery from "./Gallery";
import AboutOne from "./AboutOne";

const style = {
  card_wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  card: {
    p: 2,
    borderRadius: "16px",
    display: "flex",
    alignItems: "flex-start",
    gap: 2,
    background: ColorPalette.light.primary.light,
    border: `1px solid ${ColorPalette.light.primary.main}`,
    width: { xs: "100%", sm: "100%", md: "auto" },
    mb: 2,
  },
  card2: {
    p: 2,
    borderRadius: "16px",
    display: "flex",
    alignItems: "flex-start",
    gap: 2,
    border: `1px solid #ddd`,
    width: { xs: "100%", sm: "100%", md: "auto" },
    mb: 2,
  },
  card_text: {
    display: "flex",
    gap: 1,
    flexDirection: "column",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
};

const page = () => {
  return (
    <Box>
      <AboutOne />
      <SectionFive />
      <SectionTwo />
      <SectionFour />
      <Gallery />
      <SectionSeven />
    </Box>
  );
};

export default page;
