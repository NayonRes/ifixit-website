import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Container, Typography } from "@mui/material";
import ColorPalette from "@/app/theme/ColorPalette";

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
  img: {
    width: "100%",
    borderRadius: "7px",
  },
};

function Gallery({ name }) {
  return (
    <Container maxWidth="xl" sx={{ pt: 16, pb: 8 }}>
      <Grid container spacing={4}>
        <Grid size={{ sm: 12, md: 12 }}>
          <Typography
            variant="h3"
            color="text.main"
            sx={{ textAlign: "center" }}
          >
            iFixitGallery
          </Typography>
          <Typography
            variant="h6"
            color="text.main"
            sx={{ textAlign: "center", maxWidth: "700px", mx: "auto", my: 3 }}
          >
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </Typography>
        </Grid>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <Grid size={{ sm: 12, md: 4 }} key={index}>
            <img
              loading="lazy"
              src={`/gallery/test/${item}.jpg`}
              alt=""
              style={style.img}
            />
          </Grid>
        ))}
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <Grid size={{ sm: 12, md: 4 }} key={index}>
            <img
              src={`/gallery/${name}/${item}.jpg`}
              alt=""
              style={style.img}
            />
          </Grid>
        ))} */}
      </Grid>
    </Container>
  );
}

export default Gallery;
