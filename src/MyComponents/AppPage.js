import React from "react";

import TopBar from "./TopBar";

export default function AppPage() {
  return (
    <div className="container min-h-screen p-4">
      <TopBar />

      <div className="recent-section relative z-10">
        <h3 className="font-bold text-xl text-white">Recently Bookmarked</h3>
      </div>
      {/* The gradient at start */}
      <div className="yellow-gradient-section h-48 w-full absolute top-0 left-0"></div>
    </div>
  );
}
