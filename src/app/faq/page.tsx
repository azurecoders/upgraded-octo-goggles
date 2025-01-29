"use client";

import React, { useState } from "react";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What's included in the free plan?",
      answer:
        "The free plan includes basic learning paths, limited resume templates, and basic networking features to help you get started with MyPath.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Your billing will be adjusted accordingly.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time. Your billing will be adjusted accordingly.",
    },
    {
      question: "Can I access MyPath from any device?",
      answer:
        "Yes, you can access MyPath from any device with an internet connection.",
    },
    {
      question: "How can I get in touch with customer support?",
      answer:
        "You can reach out to our customer support team by emailing [insert email address here]. We're here to help you with any questions or concerns you may have.",
    },
  ];

  return (
    <section
      id="pricing"
      className="pt-12 pb-1 md:py-20 bg-light-accent-dark dark:bg-dark-custom-dark-blue dark:text-dark-primary-text"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center text-light-text dark:text-indigo-100">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4" id="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-neutral-700 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center text-sm md:text-[14px]"
                >
                  <span className="text-light-text dark:text-dark-primary-text">
                    {faq.question}
                  </span>
                  <svg
                    className={`text-light-secondary dark:text-dark-primary-text w-6 h-6 transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    activeIndex === index ? "block" : "hidden"
                  } px-6 py-4 text-light-secondary/90 dark:text-dark-primary-text border-t border-neutral-700 text-sm md:text-[14px]`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
