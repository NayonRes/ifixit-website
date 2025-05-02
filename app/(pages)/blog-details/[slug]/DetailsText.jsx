import React from "react";
import { Box, Typography } from "@mui/material";
import parse from "html-react-parser";
import "./blog.css";

const DetailsText = ({ item }) => {
  return (
    <Box sx={{ maxWidth: "800px", mx: "auto" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* <Typography variant="h5">Description</Typography> */}
        <Typography variant="headline2" color="text.light">
          {item.description && parse(item.description)}
        </Typography>
        <Box sx={{ height: "1px", background: "#eeev" }}></Box>
        {/* <Typography variant="h5">Introduction</Typography>
        <Typography variant="body1" color="text.light">
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
          suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
          montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
          vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
          varius id.
        </Typography>
        <Typography variant="body1" color="text.light">
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
          mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis
          fusce augue enim. Quis at habitant diam at. Suscipit tristique risus,
          at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
          sodales id est ac volutpat.
        </Typography> */}
        {item?.body_info?.length > 0 &&
          item?.body_info?.map((body_item, index) => (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ margin: "30px 0" }}>
                <img
                  loading="lazy"
                  src={body_item?.image?.url || "/blog_2.jpg"}
                  alt=""
                  style={{ maxWidth: "100%", mx: "auto" }}
                />
                {/* <Typography variant="body2" color="text.light" sx={{ mt: 1 }}>
           Image courtesy of Jasmin Chew via Pexels
         </Typography> */}
              </Box>
              <Box sx={{ borderLeft: "2px solid #7F56D8", p: 2 }}>
                <Typography
                  sx={{ fontSize: "24px", fontStyle: "italic" }}
                  variant="body1"
                >
                  {body_item?.title}
                </Typography>
                {/* <Typography variant="body1" color="text.light" sx={{ mt: 2 }}>
                  — Olivia Rhye, Product Designer
                </Typography> */}
              </Box>
              <Box color="text.light" sx={{ mt: 2 }}>
                {body_item?.details && parse(body_item?.details)}
              </Box>
            </Box>
          ))}
      </Box>
      {item?.conclusion && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            background: "#eee",
            padding: 3,
            borderRadius: 3,
            mt: 6,
          }}
        >
          <Typography variant="h5">Conclusion</Typography>
          <Typography variant="body1" color="text.light">
            {item.conclusion && parse(item.conclusion)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default DetailsText;
