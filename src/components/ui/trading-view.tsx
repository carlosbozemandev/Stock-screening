"use client";

import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Clear any previous widget content
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "width": "100%",
          "height": "100%",
          "symbol": "NASDAQ:TSLA",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "locale": "en",
          "withdateranges": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "save_image": false,
          "details": true,
          "calendar": true,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    containerRef.current?.appendChild(script);
  }, []);

  return <div ref={containerRef} className="h-screen"></div>;
}

export default memo(TradingViewWidget);
