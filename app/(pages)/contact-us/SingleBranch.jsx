"use client";
import React from "react";
import ColorPalette from "@/app/theme/ColorPalette";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Link from "next/link";

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
    cursor: "pointer",
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

const SingleBranch = ({ branch }) => {
  const router = useRouter();

  const handleCardClick = (branch_id) => {
    router.push(`/contact-details/${branch_id}`);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    console.log("Button clicked!");
  };
  const handleLinkClick = (e) => {
    e.stopPropagation();
  };
  return (
    <Box
      onClick={() => handleCardClick(branch?._id)}
      href={`/contact-details/${branch?._id}`}
    >
      <Box sx={style.card2}>
        <Box sx={{ mt: "4px" }}>
          <img src="/icons/pin.svg" alt="" />
        </Box>
        <Box sx={style.card_text}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {/* {branch?.name} */}

            {branch?.name}
          </Typography>
          <Typography variant="body1" color="text.light">
            Off day: {branch?.off_day}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.light"
            sx={{ fontWeight: 600, maxWidth: "500px" }}
          >
            {branch?.address}
          </Typography>
          <Typography
            variant="subtitle1"
            // color={ColorPalette.light.primary.main}
            sx={{ textDecoration: "underline", fontWeight: 600 }}
          >
            <a href="tel:9876765678" onClick={handleLinkClick}>
              Call : {branch?.phone_no_1}
            </a>
          </Typography>
          <Box>
            <Link href={branch?.map_url} target="_blank" >  
              <Button
                onClick={handleButtonClick}
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: "30px",
                  fontWeight: 500,
                  background: ColorPalette.light.primary.main,

                  mt: 1,
                }}
                endIcon={<CallMadeIcon />}
              >
                Visit on Map
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleBranch;
