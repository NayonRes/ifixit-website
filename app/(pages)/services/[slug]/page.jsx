"use client";
import React, { useEffect, useState } from "react";
import { useUrl } from "@/app/context/UrlContext";
import { Box, Container } from "@mui/material";
import PageHeader from "@/app/components/PageHeader";
import List from "./List";
import { useParams, useSearchParams, usePathname } from "next/navigation";
import { getDataWithToken } from "@/app/services/GetDataService";
import SectionSix from "@/app/components/home_page/SectionSix";
import SectionSeven from "@/app/components/home_page/SectionSeven";
import ChildDevices from "./ChildDevices";
import ModelAndIssueList from "../model-and-service-list/ModelAndIssueList";
import { ArticleJsonLd } from "next-seo";

const page = () => {
  const params = useParams();
  // const pathname = usePathname();
  const searchParams = useSearchParams();
  // Get the context from the context provider
  // This allows access to the current URL, pathname, and hash if needed
  // Example usage: const { url, pathname: ctxPathname, hash } = useUrl();

  const { url, pathname, hash } = useUrl();
  // console.log("url", url);
  // console.log("pathname", pathname);
  // console.log("hash", hash);
  const deviceName = searchParams.get("device_name");
  const deviceId = searchParams.get("device_id");
  const [modelList, setModelList] = useState([]);
  const [isChildDevice, setIsChildDevice] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modelCode, setModelCode] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState({});
  const getData = async () => {
    setLoading(true);

    // let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/model/public/get-by-device?device_id=${deviceId}&status=true`;
    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/public/model-get-by-device?endpoint=${pathname}&status=true`;
    let allData = await getDataWithToken(url);

    console.log("after childDevice list", allData?.data?.data);

    if (allData.status >= 200 && allData.status < 300) {
      setIsChildDevice(allData?.data?.childDevice);
      setModelList(allData?.data?.data);
      setDeviceInfo(allData?.data?.device);
    } else {
      setLoading(false);
    }
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  // Update HTML metadata (title and meta tags) when deviceInfo changes
  useEffect(() => {
    if (deviceInfo?.name) {
      // Update document title
      const deviceName = deviceInfo.name;
      document.title = `Best ${deviceName} repair services, Dhaka, Bangladesh`;

      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          `Most authentic ${deviceName} repair service in Bangladesh. We are expert in repairing ${deviceName.toLowerCase()} devices along with all apple devices such as iPad,MacBook etc `
        );
      } else {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        metaDescription.setAttribute(
          "content",
          `Most authentic ${deviceName} repair service in Bangladesh. We are expert in repairing ${deviceName.toLowerCase()} devices along with all apple devices such as iPad,MacBook etc `
        );
        document.head.appendChild(metaDescription);
      }

      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute(
          "content",
          `${deviceName.toLowerCase()} repair service, best quality ${deviceName.toLowerCase()} repair service in bangladesh,best ${deviceName.toLowerCase()} repair service in dhaka`
        );
      } else {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        metaKeywords.setAttribute(
          "content",
          `${deviceName.toLowerCase()} repair service, best quality ${deviceName.toLowerCase()} repair service in bangladesh,best ${deviceName.toLowerCase()} repair service in dhaka`
        );
        document.head.appendChild(metaKeywords);
      }

      // Update Open Graph tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute(
          "content",
          `Best ${deviceName} repair services, Dhaka, Bangladesh`
        );
      } else {
        ogTitle = document.createElement("meta");
        ogTitle.setAttribute("property", "og:title");
        ogTitle.setAttribute(
          "content",
          `Best ${deviceName} repair services, Dhaka, Bangladesh`
        );
        document.head.appendChild(ogTitle);
      }

      let ogDescription = document.querySelector(
        'meta[property="og:description"]'
      );
      if (ogDescription) {
        ogDescription.setAttribute(
          "content",
          `Most authentic ${deviceName} repair service in Bangladesh. We are expert in repairing ${deviceName.toLowerCase()} devices along with all apple devices such as iPad,MacBook etc `
        );
      } else {
        ogDescription = document.createElement("meta");
        ogDescription.setAttribute("property", "og:description");
        ogDescription.setAttribute(
          "content",
          `Most authentic ${deviceName} repair service in Bangladesh. We are expert in repairing ${deviceName.toLowerCase()} devices along with all apple devices such as iPad,MacBook etc `
        );
        document.head.appendChild(ogDescription);
      }
    }
  }, [deviceInfo]);
  // Client-side hash detection
  // useEffect(() => {
  //   // Run only on client side

  //   console.log("window.location", window.location);

  //   if (typeof window !== "undefined") {
  //     const hash = window.location.hash; // "#!iPhone-15"
  //     if (hash) {
  //       // Remove "#!" or "#" and get "iPhone-15"
  //       const value = hash.startsWith("#!") ? hash.slice(2) : hash.slice(1);
  //       console.log("value====================", value);
  //       setModelCode(value);
  //     }
  //   }
  // }, []);
  // // Wait for client hydration before rendering hash-dependent components

  if (hash) {
    return <ModelAndIssueList />;
  } else if (isChildDevice) {
    return <ChildDevices list={modelList} />;
  } else {
    return (
      <>
        <Box>
          <Container maxWidth="xl" sx={{ pb: 10 }}>
            <PageHeader
              title={`${
                deviceInfo?.name ? deviceInfo?.name : ""
              } Repair Service`}
              subtitle={`Choose the ${
                deviceInfo?.name ? deviceInfo?.name : ""
              } model you need to repair`}
            />
            <List modelList={modelList} loading={loading} />
          </Container>
          <SectionSix modelList={modelList} />
          <SectionSeven modelList={modelList} />
        </Box>
      </>
    );
  }
};

export default page;
