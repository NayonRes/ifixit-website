"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const MyLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);

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
