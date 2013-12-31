import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 pt-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo Section */}
          <div className="mb-8 md:mb-0">
            <a href="/" className="flex items-center text-white text-lg font-bold">
              Stockopedia
            </a>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">About us</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Careers</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Product Guide</a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-white font-semibold mb-4">Our Coverage</h4>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Countries</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Sectors</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Ratios</a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-white font-semibold mb-4">Top Stocks</h4>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">UK Stocks</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Australian Stocks</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">US Stocks</a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legals</h4>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Disclaimer & PSG</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Cookies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
