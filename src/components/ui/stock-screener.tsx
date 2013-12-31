"use client";

import React, { useEffect, useRef } from "react";

function StockScreenerWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Clear any previous widget content
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `{
      "width": "100%",
      "height": "100%",
      "defaultColumn": "overview",
      "defaultScreen": "most_capitalized",
      "market": "america",
      "showToolbar": true,
      "colorTheme": "dark",
      "locale": "en",
      "isTransparent": false
    }`;

    containerRef.current?.appendChild(script);
  }, []);

  return (
    <div
      className="w-full"
      style={{ height: "100%", width: "100%" }}
      ref={containerRef}
    />
  );
}

export default StockScreenerWidget;
