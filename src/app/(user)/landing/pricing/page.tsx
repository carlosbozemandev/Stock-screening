"use client";
import React from "react";
import Subscription from "./subscriptions";

type Props = {};

interface SubscriptionCardProps {
  title: string;
  description: string;
  stockReports: {
    count: number;
    types: string[];
    coverage: string;
  };
  tools: string[];
  price: {
    monthly: string;
    yearly: string;
  };
  trialDays: number;
  isYearly: boolean;
}

const page = (props: Props) => {
  const [subscriptionData, setSubscriptionData] = React.useState([
    {
      title: "Developed Asia",
      description: "Focused on major Asian markets.",
      stockReports: {
        count: 7500,
        types: ["Fundamental", "Technical"],
        coverage: "Wide range of industries",
      },
      tools: ["StockRanks", "Advanced Charting", "Screener"],
      price: {
        monthly: "$395",
        yearly: "$3500 (20% discount)",
      },
    },
    // ... other subscription plans
  ]);

  return (
    <div className="bg-gradient-to-r  from-black via-gray-800 to-black">
      {subscriptionData.map((data, index) => (
        <Subscription key={data.title} {...data} />
      ))}
    </div>
  );
};

export default page;
