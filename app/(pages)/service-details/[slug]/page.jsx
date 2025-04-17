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
          serviceDetails?.repair_info?.map((item) => (
            <Box
              key={item._id}
              sx={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                p: 4,
                mt: 6,
              }}
            >
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 12, md: 8 }}>
                  <Box
                    sx={{
                      display: "flex",
                      // justifyContent: "center",
                      alignItems: "center",
                      gap: 6,
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                        md: "row",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        background: "#F2F3F7",
                        p: 4,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "12px",
                        width: "200px",
                        height: "200px",
                      }}
                    >
                      <img
                        src={
                          item?.repair_image?.url?.length > 0
                            ? item?.repair_image?.url
                            : "/noImage.jpg"
                        }
                        alt=""
                      />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ mb: 1 }}>
                        {item?.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ color: "primary.main", fontWeight: 600, mb: 1 }}
                      >
                        Repair Cost - ৳{item?.repair_cost} TK
                      </Typography>
                      <Typography
                        variant="body1"
                        dangerouslySetInnerHTML={{
                          __html: item?.details,
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 4 }} sx={style.card_wrapper}>
                  {item?.guaranty?.length > 0 && (
                    <Box sx={style.card}>
                      <Box>
                        <img src="/icons/cash_back.svg" alt="" />
                      </Box>
                      <Box sx={style.card_text}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          Guaranty
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          {item?.guaranty}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                  {item?.warranty?.length > 0 && (
                    <Box sx={style.card}>
                      <Box>
                        <img src="/icons/cash_back.svg" alt="" />
                      </Box>
                      <Box sx={style.card_text}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          Warranty
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          {item?.warranty}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Box>
          ))}
        <Box
          sx={{ mt: 12 }}
          dangerouslySetInnerHTML={{ __html: serviceDetails?.description }}
        />
        <Box sx={{ mt: 12 }}>
          <Typography variant="h5">Details</Typography>
          <Typography variant="body1" color="text.light" sx={{ mt: 1, mb: 8 }}>
            The new iPhone 15 Pro Max has a back glass finish like most of the
            previous iPhones released by Apple in the market. It has a frosted
            matte finish which looks sleek and stylish. Not only that, but it is
            also scratch and oil-resistant. However, even after having a Gorilla
            glass in the back and IP certified, it is still vulnerable to
            damages by insecure actions by its users such as dropping it from
            hand or any other form of accident. The most common back glass
            damage on the iPhone 15 Pro Max is the back glass getting cracked.
          </Typography>
          <Typography variant="body1" color="text.light" sx={{}}>
            The new iPhone 15 Pro Max has a back glass finish like most of the
            previous iPhones released by Apple in the market. It has a frosted
            matte finish which looks sleek and stylish. Not only that, but it is
            also scratch and oil-resistant. However, even after having a Gorilla
            glass in the back and IP certified, it is still vulnerable to
            damages by insecure actions by its users such as dropping it from
            hand or any other form of accident. The most common back glass
            damage on the iPhone 15 Pro Max is the back glass getting cracked.
          </Typography>
          <Typography variant="h5">
            Signs that indicate you need to repair your iPhone 15 Pro Max back
            glass are:
          </Typography>
          <Box sx={style.text}>
            <Box>
              <Typography variant="body1" color="text.light" sx={{}}>
                1. Scratched up / Multiple visible scratches
              </Typography>
              <Typography variant="body1" color="text.light" sx={{}}>
                2. Shattered glass / small glass parts coming out of the back
              </Typography>
            </Box>
            <Typography variant="body1" color="text.light" sx={{}}>
              One of the three is a reason that you should repair the back glass
              of your iPhone 15 Pro Max as soon as possible. Broken back glass
              on an iPhone not only hampers full-flowing wireless charging but
              also hampers the overall iPhone experience.
            </Typography>
            <Typography variant="body1" color="text.light" sx={{}}>
              On iFixit bd, we have experienced professionals who specialize in
              iPhone repair services in service points located in Dhaka,
              Bangladesh. We offer the fastest reliable service for your ease
              and on top of that a 30-day warranty on all of our services on
              iPhone 15 Pro Max. We also offer genuine Apple parts for replacing
              or repairing your iPhone woes.
            </Typography>
            <Typography variant="body1" color="text.light" sx={{}}>
              Also, always use a protective cover/phone case with safety
              certification from the vendors. A phone case or protector reduces
              the chances of your front or back glass getting cracked in an
              accidental fall significantly.
            </Typography>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" sx={{   mb: 1,}}>Service Available At</Typography>
            {serviceDetails?.branch_data?.length > 0 &&
              serviceDetails?.branch_data?.map((item) => (
                <Button
                  variant="outlined"
                  sx={{
                    // color: "#333",
                    borderRadius: "30px",

                    mr: 1,
                    mb: 1,
                  }}
                  component={Link}
                  href={`/contact-details/${item?._id}`}
                  endIcon={<CallMadeIcon />}
                >
                  {item.name}
                </Button>
              ))}
            {/* <Button
            variant="contained"
            sx={{
              // color: "#333",
              borderRadius: "30px",
              mt: 4,
            }}
            endIcon={<CallMadeIcon />}
          >
            Our Location
          </Button> */}
          </Box>
        </Box>
        {serviceDetails?.steps?.length > 0 && (
          <Grid container spacing={8}>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <Box sx={{ mt: 12 }}>
                <Typography variant="h5">Step 1</Typography>

                <Typography
                  variant="body1"
                  color="text.light"
                  sx={{ mt: 1, mb: 4 }}
                  dangerouslySetInnerHTML={{
                    __html: serviceDetails?.steps[0]?.details,
                  }}
                />

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
        {/* <Box sx={{ my: 8 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Questions
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, mt: 1 }}>
              Have question about this service? Get specific details about this
              service from expert.
            </Typography>
            <TextField
              fullWidth
              placeholder="Type your question"
              multiline
              rows={4}
              // sx={{ borderRadius: "60px" }}
              InputProps={{ sx: { borderRadius: 3 } }}
            />
          </Box>
          <Box sx={style.submit}>
            <Button variant="outlined" sx={{ borderRadius: "30px" }}>
              Cancel
            </Button>
            <Button variant="contained" sx={{ borderRadius: "30px" }}>
              Next
            </Button>
          </Box>
        </Box> */}
        <Divider sx={{ background: "#fff" }} />
      </Container>
      <SectionSeven />
    </Box>
  );
};

export default page;
