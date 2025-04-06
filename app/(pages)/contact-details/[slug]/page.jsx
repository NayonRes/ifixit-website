"use client";
import React from "react";
import { useParams } from "next/navigation";
import Details from "./Details";

const page = () => {
  const params = useParams();

  return (
    <div>
      <Details param={params.slug} />
    </div>
  );
};

export default page;
