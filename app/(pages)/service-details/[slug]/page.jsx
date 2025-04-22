"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import SectionSeven from "@/app/components/home_page/SectionSeven";
import { useParams, useSearchParams } from "next/navigation";
import { getDataWithToken } from "@/app/services/GetDataService";
import Link from "next/link";
import "./page.css";
import SectionLoadingDetails from "@/app/components/SectionLoadingDetails";
import Details from "./Details";
import DetailsMultiple from "./DetailsMultiple";

const style = {
  ul: {
    listStylePosition: "inside",
    display: "block",
    marginTop: 4,
  },
  li: {
    display: "inline-block",
    marginTop: 1,
  },
  card_wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 2,
  },
  card: {
    p: 2,
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    gap: 2,
    background: "#F2F3F7",
    width: { xs: "100%", sm: "100%", md: "100%" },
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
  icon_list: {
    display: "flex",
    alignItems: "flex-start",
    gap: 2,
  },
  submit: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 2,
    mt: 2,
  },
};

const page = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const device_id = searchParams.get("device_id");
  const model_id = searchParams.get("model_id");
  const [serviceDetails, setServiceDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const getServiceList = async () => {
    setLoading(true);
    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/service/public/${params.slug}`;
    let allData = await getDataWithToken(url);

    console.log("after childDevice list", allData?.data?.data);

    if (allData.status >= 200 && allData.status < 300) {
      if (allData?.data?.data?.length > 0) {
        setServiceDetails(allData?.data?.data[0]);
      }
    } else {
      setLoading(false);
    }
    setLoading(false);
  };
  useEffect(() => {
    getServiceList();
  }, [device_id, model_id]);
  return (
    <Box>
      <Container maxWidth="xl">
        {serviceDetails?.repair_info?.length > 0 &&
          serviceDetails?.repair_info?.length === 1 &&
          serviceDetails?.repair_info?.map((item) => (
            <Details key={item._id} item={item} />
          ))}
        <Grid container spacing={3} sx={{ mb: 10 }}>
          {serviceDetails?.repair_info?.length > 0 &&
            serviceDetails?.repair_info?.length > 1 &&
            serviceDetails?.repair_info?.map((item) => (
              <DetailsMultiple key={item._id} item={item} />
            ))}
        </Grid>

        <Typography
          variant="body1"
          color="text.light"
          sx={{ mt: 1, mb: 8 }}
          dangerouslySetInnerHTML={{ __html: serviceDetails?.description }}
        />

        {serviceDetails?.steps?.length > 0 && (
          <Grid container spacing={8}>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <Box sx={{ mt: 12 }}>
                <Typography variant="h5">
                  {serviceDetails?.steps[0]?.title}
                </Typography>

                <Box className="step">
                  <Typography
                    variant="body1"
                    color="text.light"
                    sx={{ mt: 1, mb: 4 }}
                    dangerouslySetInnerHTML={{
                      __html: serviceDetails?.steps[0]?.details,
                    }}
                  />
                </Box>

                {/* <Box sx={style.text}>
                <Box sx={style.icon_list}>
                  <img src="/icons/check.svg" alt="" />
                  <Typography variant="body1" color="text.light" sx={{}}>
                    Power off your iPhone before beginning disassembly.
                  </Typography>
                </Box>
                <Box sx={style.icon_list}>
                  <img src="/icons/check.svg" alt="" />
                  <Typography variant="body1" color="text.light" sx={{}}>
                    Remove the two 6.7 mm-long pentalobe screws at the bottom
                    edge of the iPhone.
                  </Typography>
                </Box>
                <Box sx={style.icon_list}>
                  <img src="/icons/check.svg" alt="" />
                  <Typography variant="body1" color="text.light" sx={{}}>
                    Opening the iPhone's display will compromise its waterproof
                    seals. Have replacement seals ready before you proceed past
                    this step, or take care to avoid liquid exposure if you
                    reassemble your iPhone without replacing the seals.
                  </Typography>
                </Box>
              </Box> */}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <img
                loading="lazy"
                src={
                  serviceDetails?.steps[0]?.step_image?.url?.length > 0
                    ? serviceDetails?.steps[0]?.step_image?.url
                    : "/noImage.jpg"
                }
                alt=""
                style={{ maxWidth: "100%" }}
              />
              {/* <img src="/details.png" alt="" style={{ maxWidth: "100%" }} /> */}
            </Grid>
          </Grid>
        )}

        <Divider sx={{ background: "#fff" }} />
        {loading && <SectionLoadingDetails />}
      </Container>
      <SectionSeven />
    </Box>
  );
};

export default page;
