"use client";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import ServiceCard from "@/app/components/ServiceCard";
import SectionLoading3 from "@/app/components/SectionLoading3";
import { memo } from "react";
import TextLoading from "@/app/components/TextLoading";
import ModeSidebarlList from "./ModeSidebarlList";
import { useParams, useSearchParams } from "next/navigation";

const ModelList = memo(({ modelList, modelLoading, device_id, model_id }) => {
  const params = useParams();
  const searchParams = useSearchParams();

  const deviceName = searchParams.get("device_name");
  return (
    <Box>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <ModeSidebarlList
          device_id={device_id}
          modelList={modelList}
          modelLoading={modelLoading}
          model_id={model_id}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // gap: 3,
          //  mt: 3
        }}
      >
        <Box
          sx={{
            flexDirection: "column",
            gap: 3,
            // mt: 3,
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          {!modelLoading &&
            modelList?.length > 0 &&
            modelList.map((item) => (
              <Link
                href={`/device-list-category?device_id=${device_id}&model_id=${item?._id}&device_name=${deviceName}`}
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
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        >
          {modelLoading && <TextLoading />}
        </Box>
      </Box>
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
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }} key={item._id}>
              <ServiceCard item={item} />
            </Grid>
          ))}
      </Grid>
      <Box>
        {serviceLoading && <SectionLoading3 />}
        {!serviceLoading && serviceList < 1 && (
          <Typography
            variant="h5"
            sx={{
              marginLeft: { xs: "30px", sm: "30px", md: "25%", lg: "25%" },
            }}
          >
            Service not available
          </Typography>
        )}
      </Box>
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
        <Grid size={{ xs: 12, sm: 12, md: 2.5 }}>
          <ModelList
            modelList={modelList}
            modelLoading={modelLoading}
            device_id={device_id}
            model_id={model_id}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 9.5 }}>
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
