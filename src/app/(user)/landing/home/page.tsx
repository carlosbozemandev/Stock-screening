import React from "react";
import Hero from "./hero";
import FinancialMessage from "./financial-message";
import PortfolioSteps from "./steps";
import Testimonials from "./testimonials";
import FAQSection from "./faqs";
import Features from "./feature";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="bg-gradient-to-r  from-black via-gray-800 to-black">
      <Hero />
      <PortfolioSteps />
      <Features />
      <Testimonials />
      <FinancialMessage />
      <FAQSection />
    </div>
  );
};

export default page;
