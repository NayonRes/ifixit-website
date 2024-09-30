"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";
const HomeSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const projectNameStyle = {
    color: "#fff",
    fontFamily: '"Playfair Display", serif',
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    zIndex: 2,
  };
  return (
    <div className="slider-container" style={{ position: "relative" }}>
      <Typography
        sx={{
          ...projectNameStyle,
          fontSize: {
            xs: "28px",
            sm: "52px",
            md: "72px",
            lg: "100px",
            xl: "126px",
          },
          fontWeight: "bold",
          // color: "#2E2E2E",
          color: "black", // Text color
          mixBlendMode: "overlay", // Apply blend mode

          backgroundColor: "transparent",
        }}
      >
        INTERIOR DESIGN
      </Typography>
      <Slider {...settings}>
        <div className="image_contrainer">
          <img loading="lazy" src="/slider-images/1.webp" />
        </div>
        <div className="image_contrainer">
          <img loading="lazy" src="/slider-images/2.webp" />
        </div>
        <div className="image_contrainer">
          <img loading="lazy" src="/slider-images/3.webp" />
        </div>
        <div className="image_contrainer">
          <img loading="lazy" src="/slider-images/4.webp" />
        </div>
        <div className="image_contrainer">
          <img loading="lazy" src="/slider-images/5.webp" />
        </div>
        <div className="image_contrainer">
          <img loading="lazy" src="/slider-images/6.webp" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
