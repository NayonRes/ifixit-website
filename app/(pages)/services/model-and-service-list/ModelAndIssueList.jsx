"use client";
import { Box, Container } from "@mui/material";
import React, { useEffect, useState, useMemo } from "react";
import PageHeader from "@/app/components/PageHeader";
import List from "./List";

import { useParams, usePathname, useSearchParams } from "next/navigation";
import { getDataWithToken } from "@/app/services/GetDataService";
import SectionSix from "@/app/components/home_page/SectionSix";
import SectionSeven from "@/app/components/home_page/SectionSeven";
import { useUrl } from "@/app/context/UrlContext";

const ModelAndIssueList = () => {
  const params = useParams();
  // const pathname = usePathname();
  const { url, pathname, hash } = useUrl();
  const searchParams = useSearchParams();
  const device_id = searchParams.get("device_id");
  const model_id = searchParams.get("model_id");
  const deviceName = searchParams.get("device_name");

  const [modelList, setModelList] = useState([]);
  const [modelLoading, setModelLoading] = useState(false);
  const [serviceList, setServiceList] = useState([]);
  const [serviceLoading, setServiceLoading] = useState(false);

  const fetchModelList = async () => {
    setModelLoading(true);
    try {
      // let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/model/public/get-by-device?device_id=${device_id}`;
      let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/public/model-get-by-device?endpoint=${pathname}&status=true`;
      let response = await getDataWithToken(url);
      console.log("model response", response?.data?.data);

      if (response.status >= 200 && response.status < 300) {
        setModelList(response?.data?.data || []);
      }
    } catch (error) {
      console.error("Error fetching models:", error);
    } finally {
      setModelLoading(false);
    }
  };

  const fetchServiceList = async () => {
    if (!hash || modelList?.length === 0) return;

    setServiceLoading(true);

    try {
      let url = `${
        process.env.NEXT_PUBLIC_BASE_URL
      }/api/v1/public/service-get-by-model?model_id=${
        modelList?.find((item) => `#!${item?.endpoint}` === hash)?._id
      }`;
      let response = await getDataWithToken(url);

      if (response.status >= 200 && response.status < 300) {
        setServiceList(response?.data?.data || []);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setServiceLoading(false);
    }
  };

  useEffect(() => {
    fetchModelList();
  }, []);

  useEffect(() => {
    fetchServiceList();
  }, [hash, modelList]);

  const memoizedModelList = useMemo(() => modelList, [modelList]);

  return (
    <Box>
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <PageHeader
          title={`${deviceName} Repair Service`}
          subtitle={`Choose the ${deviceName} model you need to repair`}
        />
        <List
          modelList={memoizedModelList}
          modelLoading={modelLoading}
          serviceList={serviceList}
          serviceLoading={serviceLoading}
          device_id={device_id}
          model_id={model_id}
        />
      </Container>
      <SectionSix />
      <SectionSeven />
    </Box>
  );
};

export default ModelAndIssueList;
