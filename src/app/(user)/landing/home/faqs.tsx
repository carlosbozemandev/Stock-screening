"use client"
import React, { useState } from "react";


const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<any>(null);

  const toggleFAQ = (index: any) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question:
        "What is Malaysia Stock, and how can it help me with my investments?",
      answer:
        "Malaysia Stock is a comprehensive stock research and portfolio management platform designed to help investors of all levels make informed decisions. Our tools include stock screeners, financial data, and analysis features that allow you to discover potential investment opportunities, evaluate company performance, and manage your portfolio effectively. Whether you're a seasoned investor or just starting out, Stockopedia provides the insights and tools you need to improve your investment results.",
    },
    {
      question: "How do I get started with Malaysia Stock?",
      answer:
        "Getting started with Malaysia Stock is easy! Simply sign up for an account, and you'll gain access to our full suite of tools and resources. Once you're logged in, you can start exploring our stock screeners, set up your portfolio, and customize your dashboard to track the stocks that matter to you. We also offer a product guide and tutorials to help you make the most of our platform. If you have any questions along the way, our support team is here to assist you.",
    },
    {
      question: "What markets and stocks does Malaysia Stock cover?",
      answer:
        "Malaysia Stock covers a wide range of global markets, including the UK, US, Australia, and many others. We provide detailed data and analysis on thousands of stocks across various sectors and industries, allowing you to screen and compare stocks based on specific criteria. Whether you're interested in large-cap stocks, small-cap stocks, or specific market sectors, Stockopedia has the tools you need to find and evaluate investment opportunities across multiple markets.",
    },
  ];

  return (
    <div className="pb-12 py-8 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl text-white font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              className="w-full text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg  text-white font-semibold flex justify-between items-center">
                {faq.question}
                <span>{openFAQ === index ? "-" : "+"}</span>
              </h3>
            </button>
            {openFAQ === index && (
              <p className="mt-4  text-white">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
