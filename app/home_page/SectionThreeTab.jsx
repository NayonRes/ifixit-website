"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import CardTwo from "../components/CardTwo";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SectionThreeTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid size={4}>
            <CardTwo />
          </Grid>
          <Grid size={4}>
            <CardTwo />
          </Grid>
          <Grid size={4}>
            <CardTwo />
          </Grid>
          <Grid size={4}>
            <CardTwo />
          </Grid>
          <Grid size={4}>
            <CardTwo />
          </Grid>
          <Grid size={4}>
            <CardTwo />
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Grid container spacing={3}>
          <Grid size={4}>
            <CardTwo />
          </Grid>
          <Grid size={4}>
            <CardTwo />
          </Grid>
          <Grid size={4}>
            <CardTwo />
          </Grid>
          <Grid size={4}>
            <CardTwo />
          </Grid>
          <Grid size={4}>
            <CardTwo />
          </Grid>
          <Grid size={4}>
            <CardTwo />
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Grid container spacing={3}>
          <Grid size={4}>
            <CardTwo />
          </Grid>
          <Grid size={4}>
            <CardTwo />
          </Grid>
          <Grid size={4}>
            <CardTwo />
          </Grid>
          <Grid size={4}>
            <CardTwo />
          </Grid>
          <Grid size={4}>
            <CardTwo />
          </Grid>
          <Grid size={4}>
            <CardTwo />
          </Grid>
        </Grid>
      </CustomTabPanel>
    </Box>
  );
}
