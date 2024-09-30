"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const MyLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }, []);
  // useEffect(() => {
  //   let windowHeight = window.innerHeight;
  //   if (windowHeight > 900) {
  //     windowHeight = 900;
  //   }

  //   const handleScroll = () => {
  //     const divPosition = document.getElementById("header");
  //     if (!divPosition) return;

  //     let y = divPosition.offsetTop;

  //     if (y < 80) {
  //       divPosition.style.background = "rgba(255,255,255,1)";
  //       divPosition.style.backdropFilter = "blur(0px)";
  //     } else if (y > 80) {
  //       divPosition.style.background = "rgba(207,227,255,.5)";
  //       divPosition.style.backdropFilter = "blur(80px)";
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  useEffect(() => {
    const handleLoad = () => setLoading(false);

    // Wait until the page is fully loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <div>
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <header className="appbar_holder" id="header">
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        {" "}
        <Footer />
      </footer>
    </div>
  );
};

export default MyLayout;
