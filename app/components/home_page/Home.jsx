import React from "react";
import Banner from "./Banner";
import Service from "./Service";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Service /> */}
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </div>
  );
};

export default Home;
