import React from "react";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner">
        {/* Add your spinner or loading animation here */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}