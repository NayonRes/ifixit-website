"use client";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import Details from "./Details";

const page = () => {
  const params = useParams();
  const name = useSearchParams().get("name");
  const off_day = useSearchParams().get("off_day");
  const address = useSearchParams().get("address");

  return (
    <div>
      <Details
        param={params.slug}
        name={name}
        off_day={off_day}
        address={address}
      />
    </div>
  );
};

export default page;
