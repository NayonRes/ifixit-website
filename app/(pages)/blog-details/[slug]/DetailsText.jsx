import { Box, Typography } from "@mui/material";
import React from "react";

const DetailsText = () => {
  return (
    <Box sx={{ maxWidth: "800px", mx: "auto" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="headline2" color="text.light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
          massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.
          Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
        </Typography>
        <Box sx={{ height: "1px", background: "#eeev" }}></Box>
        <Typography variant="h5">Introduction</Typography>
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
        </Typography>
        <Box sx={{ margin: "30px 0" }}>
          <img
            src="/blog_2.jpg"
            alt=""
            style={{ maxWidth: "100%", mx: "auto" }}
          />
          <Typography variant="body2" color="text.light" sx={{ mt: 1 }}>
            Image courtesy of Jasmin Chew via Pexels
          </Typography>
        </Box>
        <Box sx={{ borderLeft: "2px solid #7F56D8", p: 2 }}>
          <Typography
            sx={{ fontSize: "24px", fontStyle: "italic" }}
            variant="body1"
          >
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.
          </Typography>
          <Typography variant="body1" color="text.light" sx={{ mt: 2 }}>
            — Olivia Rhye, Product Designer
          </Typography>
        </Box>
        <Typography variant="body1" color="text.light" sx={{ mt: 2 }}>
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
        </Typography>
        <Typography variant="body1" color="text.light">
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
          commodo consectetur convallis risus. Sed condimentum enim dignissim
          adipiscing faucibus consequat, urna. Viverra purus et erat auctor
          aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
          aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque
          ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget
          nunc lectus in tellus, pharetra, porttitor.
        </Typography>
        <Typography variant="body1" color="text.light">
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris
          id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
          molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis
          velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
          orci.
        </Typography>
      </Box>
    </Box>
  );
};

export default DetailsText;
