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
import CardDeviceWithSidebar from "../../components/CardDeviceWithSidebar";
import Link from "next/link";
import { Typography } from "@mui/material";
import { useParams, useSearchParams } from "next/navigation";
import ServiceCard from "@/app/components/ServiceCard";

export default function List({ modelList, loading, serviceList, loading2 }) {
  const params = useParams();
  const searchParams = useSearchParams();
  const device_id = searchParams.get("device_id");
  const model_id = searchParams.get("model_id");
  const [value, setValue] = React.useState("1");
  const [age, setAge] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelect = (event) => {
    setAge(event.target.value);
  };
  const handleClick = () => {
    const params = new URLSearchParams(router.query);
    params.set('model_id', item?._id); // update model_id
    params.set('device_id', device_id); // optional
    router.push(`/device-list-category?${params.toString()}`, undefined, { shallow: true });
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Grid container spacing={4}>
        <Grid size={3}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 3 }}>
            {!loading &&
              modelList?.length > 0 &&
              modelList?.map((item) => (
                <>
                <Link
                  href={`/device-list-category?device_id=${device_id}&model_id=${item?._id}`}
                  key={item?._id}
                >
                  <Typography
                    color={
                      model_id === item?._id ? "text.primary" : "text.light"
                    }
                    sx={{
                      px: 2,
                      py: "2px",
                      borderLeft: model_id === item?._id && "3px solid #F57042",
                      fontWeight: 600,
                    }}
                  >
                    {item?.name}
                  </Typography>{" "}
                </Link>
                </>
              ))}
          </Box>
        </Grid>
        <Grid size={9}>
          <TabContext value={value}>
            {/* <Box
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
          </Box> */}
            {/* <TabPanel value="1"> */}
            <Grid container spacing={3}>
              {!loading2 &&
                serviceList?.length > 0 &&
                serviceList?.map((item) => (
                  <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item._id}>
                    <ServiceCard item={item}/>
                  </Grid>
                ))}
            </Grid>
            {/* </TabPanel> */}
            {/* <TabPanel value="2">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <CardDeviceWithSidebar />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <CardDeviceWithSidebar />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <CardDeviceWithSidebar />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <CardDeviceWithSidebar />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <CardDeviceWithSidebar />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <CardDeviceWithSidebar />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <CardDeviceWithSidebar />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <CardDeviceWithSidebar />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="3">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <CardDeviceWithSidebar />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <CardDeviceWithSidebar />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <CardDeviceWithSidebar />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <CardDeviceWithSidebar />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <CardDeviceWithSidebar />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <CardDeviceWithSidebar />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <CardDeviceWithSidebar />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <CardDeviceWithSidebar />
                </Grid>
              </Grid>
            </TabPanel> */}
          </TabContext>
        </Grid>
      </Grid>
    </Box>
  );
}
