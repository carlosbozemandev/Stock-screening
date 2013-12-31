import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { AreaChartIcon, ChartColumnIcon, Cloud, MicroscopeIcon, RecycleIcon } from "lucide-react";
import React from "react";

const FinancialMessage = () => {
  return (
    <div className="p-8 rounded-lg w-fit  container justify-center text-center">
      <h2 className="text-2xl font-bold mb-6">
        No more gambling with your financial future
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center justify-start bg-white p-4 rounded-lg shadow">
          <span className="text-pink-500 mr-3"><MagnifyingGlassIcon className="w-6 h-6"/></span>
          <p>Picking shares on gut instinct?</p>
        </div>
        <div className="flex items-center justify-start bg-white p-4 rounded-lg shadow">
          <span className="text-pink-500 mr-3"><Cloud className="w-6 h-6"/></span>
          <p>Buying on press tips or rumors?</p>
        </div>
        <div className="flex items-center justify-start bg-white p-4 rounded-lg shadow">
          <span className="text-pink-500 mr-3"><ChartColumnIcon className="w-6 h-6"/></span>
          <p>Portfolio keeping you up at night?</p>
        </div>
        <div className="flex items-center justify-start bg-white p-4 rounded-lg shadow">
          <span className="text-pink-500 mr-3"><AreaChartIcon className="w-6 h-6"/></span>
          <p>Lost money in story stocks?</p>
        </div>
        <div className="flex items-center justify-start bg-white p-4 rounded-lg shadow">
          <span className="text-pink-500 mr-3"><MicroscopeIcon className="w-6 h-6"/></span>
          <p>Have a woolly research process?</p>
        </div>
        <div className="flex items-center justify-start bg-white p-4 rounded-lg shadow">
          <span className="text-pink-500 mr-3"><RecycleIcon className="w-6 h-6"/></span>
          <p>Struggling to understand what works?</p>
        </div>
      </div>
      <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-green-600 transition duration-200">
        CHANGE YOUR RESEARCH PROCESS TODAY
      </button>
      <p className="mt-4 text-gray-600">
        After your free trial, plans start at just £295 per year. With a one
        month money back guarantee, you are in control.
      </p>
    </div>
  );
};

export default FinancialMessage;