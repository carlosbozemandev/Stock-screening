import Image from "next/image";
import React from "react";

import banner from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500  to-blue-600 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left py-16 px-4 sm:px-6 md:px-8">
        {/* Text Content */}
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Comprehensive stock market insights
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-md mx-auto md:mx-0">
            Stop using guesswork - Make data-backed decisions - Gain confidence
            & results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
              Get Started
            </button>
            <button className="bg-transparent border border-white font-semibold py-2 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <Image
            src={banner}
            alt="Hero Image"
            className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
