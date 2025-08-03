import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const DetailsMultiple = ({ item }) => {
  return (
    <Grid size={{ xs: 12, sm: 12, md: 4 }}>
      <Box
        sx={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          px: 4,
          pt: 4,
          pb: 0,
          mt: 6,
          height: "100%",
        }}
      >
        <Grid container spacing={3}>
          <Grid size={12}>
            <Box
              sx={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                gap: 6,
                flexDirection: "column",
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
                  width: "100%",
                  minHeight: "200px",
                }}
              >
                <img
                  loading="lazy"
                  src={
                    item?.repair_image?.url?.length > 0
                      ? item?.repair_image?.url
                      : "/noImage.jpg"
                  }
                  alt=""
                  style={{ width: "100%" }}
                />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h5" sx={{ mb: 1, fontSize: "1.2rem" }}>
                  {item?.product_data?.name}{" "}
                  {item?.product_variation_data?.name}
                </Typography>

                <Typography variant="body1" sx={{ mb: 1 }}>
                  <b>Quality:</b> {item?.product_variation_data?.quality}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <b>Charge:</b> Assemble Charge: {item?.repair_cost}/-TK
                </Typography>
                <Typography
                  variant="h6"
                  color="text.light"
                  sx={{ fontWeight: 600, mb: 1, fontSize: "1.2rem" }}
                >
                  <span style={{ color: "#E96A3F" }}>
                    ৳{item?.product_variation_data?.price} TK
                  </span>
                </Typography>
                {/* start  */}
                {item?.guaranty?.length > 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      my: 2,
                    }}
                  >
                    <img
                      loading="lazy"
                      src="/icons/cash-back-sm.svg"
                      alt=""
                      // style={{ height: "15px" }}
                    />

                    <Typography variant="body1" color="text.primary">
                      {item?.guaranty}
                    </Typography>
                  </Box>
                )}

                {item?.warranty?.length > 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      my: 2,
                    }}
                  >
                    <img
                      loading="lazy"
                      src="/icons/cash-back-sm.svg"
                      alt=""
                      // style={{ height: "15px" }}
                    />

                    <Typography variant="body1" color="text.primary">
                      {item?.warranty}
                    </Typography>
                  </Box>
                )}
                {/* end  */}
                {/* <Box
                  sx={{ border: "1px solid #FF8455", p: 2, borderRadius: 4 }}
                >
                  <Typography
                    variant="body1"
                    dangerouslySetInnerHTML={{
                      __html: item?.details,
                    }}
                  />
                </Box> */}
              </Box>
            </Box>
          </Grid>
          {/* <Grid size={12} sx={style.card_wrapper}>
            {item?.guaranty?.length > 0 && (
              <Box sx={style.card}>
                <Box>
                  <img loading="lazy" src="/icons/cash_back.svg" alt="" />
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
                  <img loading="lazy" src="/icons/cash_back.svg" alt="" />
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
          </Grid> */}
        </Grid>
      </Box>
    </Grid>
  );
};

export default DetailsMultiple;

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
