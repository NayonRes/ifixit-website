"use client";
import SectionSeven from "@/app/components/home_page/SectionSeven";
import PageHeader from "@/app/components/PageHeader";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ColorPalette from "@/app/theme/ColorPalette";
import Gallery from "./Gallery";
import axios from "axios";
import { getDataWithToken } from "@/app/services/GetDataService";

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

const Details = ({ param }) => {
  const [branch, setBranch] = useState("");
  const [loading, setLoading] = useState(false);
  // const data = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/branch/public/${param}`
  // );
  // const branches = await data.json();
  // console.log("branches", branches);

  // const getData = async () => {
  //   try {
  //     let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/branch/public/${param}`;
  //     axios.get(url).then((response) => {
  //       console.log("response", response);
  //       setBranch(response?.data?.data);
  //     });
  //   } catch (error) {
  //     console.log("err", error);
  //   }
  // };

  const getData = async () => {
    setLoading(true);

    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/branch/public/${param}`;
    let allData = await getDataWithToken(url);

    console.log("after childDevice list", allData?.data?.data);

    if (allData.status >= 200 && allData.status < 300) {
      setBranch(allData?.data?.data);
    } else {
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Box>
      <Box>
        <img src="/contact_top.jpg" alt="" style={{ width: "100%" }} />
      </Box>
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <Grid container spacing={4}>
          <Grid size={{ sm: 12, md: 12 }} sx={{ my: 8 }}>
            <img loading="lazy" src="/details_map.jpg" alt="" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ background: ColorPalette.light.primary.light, py: 16 }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid size={{ sm: 12, md: 6 }} sx={style.card_wrapper}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, fontSize: "1.3rem", color: "#6840C5" }}
              >
                Our Locations
              </Typography>
              <Typography variant="h3" color="text.main">
                Shop Address
              </Typography>
              <Typography
                variant="body1"
                color="text.light"
                sx={{ fontSize: "1.5rem" }}
              >
                Find us at these locations.
              </Typography>
            </Grid>
            <Grid size={{ sm: 12, md: 6 }}>
              <Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {branch?.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.light"
                    sx={{ fontWeight: 400, fontSize: "1.5rem" }}
                  >
                    Off day: {branch?.off_day}
                  </Typography>
                  <Typography
                    color="text.light"
                    variant="body1"
                    sx={{ fontWeight: 400, fontSize: "1.5rem" }}
                  >
                    {branch?.address}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, fontSize: "1.5rem" }}
                  >
                    <a href="tel:9876765678">Call : {branch?.phone_no_1}</a>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Gallery name={branch?.name} />
      <SectionSeven />
    </Box>
  );
};

export default Details;
