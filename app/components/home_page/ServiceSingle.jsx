"use client";
import React from "react";
import Grid from "@mui/material/Grid2";

import RepairServiceCard from "../RepairServiceCard";
import { useRouter } from "next/navigation";

const ServiceSingle = ({ list }) => {
  const router = useRouter();
  console.log("list", list);
  const navigate = (item) => {
    // href={
    //   item?.parent_id === null
    //     ? `/device-list/${item._id}`
    //     : `/service/${item._id}`
    // }
    console.log("item", item);

    if (list?.some((el) => el.parent_id === item._id)) {
      router.push(`/services/${item._id}`);
    } else {
      router.push(`/device-list/${item._id}`);
    }
  };
  return (
    <>
      {/* {JSON.stringify(list)} */}
      {list?.length > 0 &&
        list
          ?.filter((el) => el.parent_id === null || el.parent_id === undefined)
          ?.map((item, i) => (
            <Grid size={{ xs: 12, sm: 4, md: 4 }} key={i}>
              <RepairServiceCard item={item} navigate={navigate} />
              {item.title}
            </Grid>
          ))}
    </>
  );
};

export default ServiceSingle;
