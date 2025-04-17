"use client";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import ServiceCard from "@/app/components/ServiceCard";
import SectionLoading3 from "@/app/components/SectionLoading3";
import { memo } from "react";
import TextLoading from "@/app/components/TextLoading";

const ModelList = memo(({ modelList, modelLoading, device_id, model_id }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 3 }}>
      {!modelLoading &&
        modelList?.length > 0 &&
        modelList.map((item) => (
          <Link
            href={`/device-list-category?device_id=${device_id}&model_id=${item?._id}`}
            key={item?._id}
          >
            <Typography
              color={model_id === item?._id ? "text.primary" : "text.light"}
              sx={{
                px: 2,
                py: "2px",
                borderLeft: model_id === item?._id && "3px solid #F57042",
                fontWeight: 600,
              }}
            >
              {item?.name}
            </Typography>
          </Link>
        ))}
      {modelLoading && <TextLoading />}
    </Box>
  );
});

const ServiceList = memo(({ serviceList, serviceLoading }) => {
  return (
    <Box>
      <Grid container spacing={3}>
        {!serviceLoading &&
          serviceList?.length > 0 &&
          serviceList.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item._id}>
              <ServiceCard item={item} />
            </Grid>
          ))}
      </Grid>
      {serviceLoading && <SectionLoading3 />}
      { !serviceLoading && serviceList < 1 && <Typography variant="h5" sx={{marginLeft: '25%'}} >Service not found</Typography> }
    </Box>
  );
});

function List({
  modelList,
  modelLoading,
  serviceList,
  serviceLoading,
  device_id,
  model_id,
}) {
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Grid container spacing={4}>
        <Grid size={3}>
          <ModelList
            modelList={modelList}
            modelLoading={modelLoading}
            device_id={device_id}
            model_id={model_id}
          />
        </Grid>
        <Grid size={9}>
          <ServiceList
            serviceList={serviceList}
            serviceLoading={serviceLoading}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default memo(List);
