import React from "react";
import ColorPalette from "@/app/theme/ColorPalette";
import { Box, Button, Typography } from "@mui/material";
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

const Branches = async () => {
  // const data = await fetch('https://api.vercel.app/blog')
  const data = await fetch(
    "https://inventory.nayon.dev/api/v1/branch?limit=100&page=1"
  );
  const branches = await data.json();

  return (
    <div>
      {branches?.data
        ?.filter((branch) => branch?.is_main_branch === false) // Filter main branches
        .map((branch) => (
          <Box sx={style.card2}>
            <Box>
              <img src="/icons/pin.svg" alt="" />
            </Box>
            <Box sx={style.card_text}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {/* {branch?.name} */}
                <Link href="/contact-details">{branch?.name}</Link>
              </Typography>
              <Typography variant="body1" color="text.light">
                Off day: {branch?.off_day}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.light"
                sx={{ fontWeight: 600 }}
              >
                {branch?.address}
              </Typography>
              <Typography
                variant="subtitle1"
                color={ColorPalette.light.primary.main}
                sx={{ textDecoration: "underline" }}
              >
                Call : {branch?.phone_no_1}
              </Typography>
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: "30px",
                    fontWeight: 500,
                    background: ColorPalette.light.primary.main,

                    // mt: 4,
                  }}
                  endIcon={<CallMadeIcon />}
                >
                  Visit on Map
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
    </div>
  );
};

export default Branches;
