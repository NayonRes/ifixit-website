"use client";
import React, { useEffect, useState } from "react";
import CardOne from "@/app/components/CardOne";
import Line from "@/app/components/Line";
import PageHeader from "@/app/components/PageHeader";
import SectionSix from "@/app/components/home_page/SectionSix";
import SectionSeven from "@/app/components/home_page/SectionSeven";
import { Box, Container, Skeleton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import RepairServiceCard from "@/app/components/RepairServiceCard";
import { useParams, useSearchParams } from "next/navigation";
import { getDataWithToken } from "@/app/services/GetDataService";
import { useRouter } from "next/navigation";

const page = () => {
  // const data = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/device/public/list?parent_id=null&status=true`
  // );

  // const devices = await data.json();
  // console.log(
  //   "process.env.NEXT_PUBLIC_BASE_URL",
  //   process.env.NEXT_PUBLIC_BASE_URL
  // );
  // console.log("devices", devices);
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = (item) => {
    // href={
    //   item?.parent_id === null
    //     ? `/device-list/${item._id}`
    //     : `/service/${item._id}`
    // }
    console.log("item", item);

    if (list?.some((el) => el.parent_id === item._id)) {
      router.push(`/service/${item._id}`);
    } else {
      router.push(`/device-list/${item._id}?device_name=${item.name}`);
    }
  };

  const getData = async () => {
    setLoading(true);

    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/device/public/list?parent_id=${params.slug}&status=true`;
    let allData = await getDataWithToken(url);

    console.log("after childDevice list", allData?.data?.data);

    if (allData.status >= 200 && allData.status < 300) {
      setList(allData?.data?.data);
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
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <PageHeader
          title="CHOOSE YOUR APPLE DEVICE!!"
          subtitle="Choose From iPhone, iPad, Macbook, iMac, Apple Watch, Drone Device List"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            mb: 6,
          }}
        >
          <Typography variant="body1" color="primary">
            SERVICES
          </Typography>
          <Typography variant="h3">Available Services</Typography>
        </Box>
        <Grid container spacing={3}>
          {!loading &&
            list?.length > 0 &&
            list?.map((item, i) => (
              <Grid size={{ xs: 12, sm: 4, md: 4 }} key={i}>
                <RepairServiceCard item={item} navigate={navigate} />
              </Grid>
            ))}
          {loading && (
            <>
              {[...Array(6).keys()]?.map((item, i) => (
                <Grid size={{ xs: 12, sm: 4, md: 4 }} key={i}>
                  <Skeleton variant="rectangular" height={300} />
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Container>
      <Line />
      <SectionSix />
      <Line />
      <SectionSeven />
    </Box>
  );
};

export default page;
