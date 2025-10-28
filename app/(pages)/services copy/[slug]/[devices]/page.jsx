"use client";
import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "@/app/components/PageHeader";
import List from "./List";
import { useParams, useSearchParams } from "next/navigation";
import { getDataWithToken } from "@/app/services/GetDataService";
import SectionSix from "@/app/components/home_page/SectionSix";
import SectionSeven from "@/app/components/home_page/SectionSeven";

const page = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const deviceName = searchParams.get("device_name");
  const deviceId = searchParams.get("device_id");
  const [modelList, setModelList] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);

    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/model/public/get-by-device?device_id=${deviceId}&status=true`;
    let allData = await getDataWithToken(url);

    console.log("after childDevice list", allData?.data?.data);

    if (allData.status >= 200 && allData.status < 300) {
      setModelList(allData?.data?.data);
    } else {
      setLoading(false);
    }
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <PageHeader
          title={`${deviceName} Repair Service`}
          subtitle={`Choose the ${deviceName} model you need to repair`}
        />
        <List modelList={modelList} loading={loading} />
      </Container>
      <SectionSix modelList={modelList} />
      <SectionSeven modelList={modelList} />
    </Box>
  );
};

export default page;
