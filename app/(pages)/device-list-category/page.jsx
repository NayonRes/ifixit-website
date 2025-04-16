"use client";
import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "@/app/components/PageHeader";
import List from "./List";
import SectionSix from "../../components/home_page/SectionSix";
import SectionSeven from "../../components/home_page/SectionSeven";
import { useParams, useSearchParams } from "next/navigation";
import { getDataWithToken } from "@/app/services/GetDataService";

const page = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const device_id = searchParams.get("device_id");
  const model_id = searchParams.get("model_id");

  const [modelList, setModelList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [serviceList, setServiceList] = useState([]);
  const [loading2, setLoading2] = useState(false);
  const getData = async () => {
    setLoading(true);

    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/model/public/get-by-device?device_id=${device_id}`;
    let allData = await getDataWithToken(url);

    console.log("after childDevice list", allData?.data?.data);

    if (allData.status >= 200 && allData.status < 300) {
      setModelList(allData?.data?.data);
    } else {
      setLoading(false);
    }
    setLoading(false);
  };
  const getServiceList = async () => {
    setLoading2(true);
    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/service/public/list?model_id=${model_id}&limit=1000`;
    let allData = await getDataWithToken(url);

    console.log("after childDevice list", allData?.data?.data);

    if (allData.status >= 200 && allData.status < 300) {
      setServiceList(allData?.data?.data);
    } else {
      setLoading2(false);
    }
    setLoading2(false);
  };
  useEffect(() => {
    getData();
    getServiceList();
  }, [device_id, model_id]);
  return (
    <Box>
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <PageHeader
          title="iPhone Repair Service"
          subtitle="Choose the iPhone model you need to repair"
        />
        <List
          modelList={modelList}
          loading={loading}
          serviceList={serviceList}
          loading2={loading2}
        />
      </Container>
      <SectionSix />
      <SectionSeven />
    </Box>
  );
};

export default page;
