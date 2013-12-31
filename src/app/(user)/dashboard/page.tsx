import StockScreener from "@/components/ui/stock-screener";
import StockScreening from "@/components/ui/stock-screener";
import TradingView from "@/components/ui/trading-view";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      {/* <StockScreening /> */}
      <TradingView />
      {/* <StockScreener /> */}
    </div>
  );
};

export default Dashboard;
