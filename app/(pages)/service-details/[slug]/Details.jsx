import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Details = ({ item }) => {
  return (
    <Box>
      <Box
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
                  style={{ width: "100%" }}
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
    </Box>
  );
};

export default Details;

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
