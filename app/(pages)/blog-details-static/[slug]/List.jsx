"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid2";
import CardBlog from "@/app/components/CardBlog";

export default function List() {
  const [value, setValue] = React.useState("1");
  const [age, setAge] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelect = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
            mb: 4,
          }}
        >
          <TabList
            onChange={handleChange}
            sx={{ borderBottom: 1, borderColor: "divider", flex: 1 }}
          >
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
          <Box>
            <FormControl sx={{ width: "200px" }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleSelect}
                displayEmpty
                size="small"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirtyttt </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <TabPanel value="1">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="3">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CardBlog />
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
