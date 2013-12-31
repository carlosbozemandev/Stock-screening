import React from 'react';

const PortfolioSteps = () => {
  return (
    <div className="flex flex-col items-center container mt-4 space-y-6 p-8 ">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-white">
          Take control of your portfolio in a few simple steps
        </h2>
        <p className="text-white">
          You can align your holdings with the power of factor investing <span className="font-semibold text-green-600">within minutes</span>
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        {/* Step 1 */}
        <div className="bg-gradient-to-r border border-blue-500 from-black via-gray-800 to-black p-6 shadow rounded-md text-center">
          <div className="mb-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full">1</span>
          </div>
          <div className="flex justify-center mb-4">
            {/* Placeholder for the stock information */}
            <div className="text-left">
              <div className="flex items-center space-x-2">
                <div className="bg-red-500 w-8 h-8 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-sm text-white">Tesla Inc</h4>
                  <p className="text-xs text-gray-500">$416.77 <span className="text-red-500">↓ 0.74%</span></p>
                  <p className="text-xs font-semibold text-red-600">Sucker Stock</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <div className="bg-green-500 w-8 h-8 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-sm text-white">Microsoft</h4>
                  <p className="text-xs text-gray-500">$210.32 <span className="text-green-500">↑ 2.73%</span></p>
                  <p className="text-xs font-semibold text-green-600">High Flyer</p>
                </div>
              </div>
            </div>
          </div>
          <h4 className="font-semibold text-white">Search your stocks</h4>
          <p className="text-gray-500 text-sm">Search by name or ticker for an immediate assessment of any of your holdings or ideas.</p>
        </div>

        {/* Step 2 */}
        <div className="bg-gradient-to-r border border-blue-500 from-black via-gray-800 to-black p-6 shadow rounded-md text-center">
          <div className="mb-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full">2</span>
          </div>
          <div className="flex justify-center mb-4">
            {/* Placeholder for the rank information */}
            <div>
              <div className="text-4xl font-bold text-green-600">96</div>
              <div className="text-xs text-gray-500">+24%</div>
              <div className="text-4xl font-bold text-red-600 mt-4">8</div>
              <div className="text-xs text-gray-500">-18%</div>
            </div>
          </div>
          <h4 className="font-semibold text-white">Check their ranks</h4>
          <p className="text-gray-500 text-sm">Gain insight into each stock’s Quality, Value & Momentum using our multi-factor rankings.</p>
        </div>

        {/* Step 3 */}
        <div className="bg-gradient-to-r border p-6 border-blue-500 from-black via-gray-800 to-blackp-6 shadow rounded-md text-center">
          <div className="mb-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full">3</span>
          </div>
          <div className="flex justify-center mb-4">
            {/* Placeholder for the chart */}
            <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
          </div>
          <h4 className="font-semibold text-white">Optimise your folio</h4>
          <p className="text-gray-500 text-sm">Expose your portfolio to factors that work and bring clarity to your buy, hold & sell decisions.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-6 text-center">
        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
          CHANGE YOUR RESEARCH PROCESS TODAY
        </button>
        <p className="mt-2 text-gray-600 text-sm">
          After your free trial, plans start at just £295 per year. With a one-month money-back guarantee, you’re in control.
        </p>
      </div>
    </div>
  );
};

export default PortfolioSteps;
