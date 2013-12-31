
import React from "react";

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
//   isYearly: boolean;
}

function Subscription({
  title,
  description,
  stockReports,
  tools,
  price,
}: any) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-500 mb-4">{description}</p>
      <h3 className="text-lg font-semibold mb-2">Stock Reports</h3>
      <ul className="list-disc space-y-2">
        <li>Number of reports: {stockReports.count}</li>
        <li>Types: {stockReports.types.join(", ")}</li>
        <li>Coverage: {stockReports.coverage}</li>
      </ul>
      <h3 className="text-lg font-semibold mb-2">Tools</h3>
      <ul className="list-disc space-y-2">
        {tools.map((tool:any) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold mb-2">Price:</p>
        <p className="text-lg font-semibold">{price.monthly}</p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Join
      </button>
      <p className="text-gray-500 mt-2">Start your {"14"}-day trial</p>
    </div>
  );
}

export default Subscription;
