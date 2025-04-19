import React, { Suspense } from "react";
import Home from "./components/home_page/Home";
import Loading from "./components/Loading";

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  );
}

