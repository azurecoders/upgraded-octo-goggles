import React from "react";

const PricingPage = () => {
  return (
    <section
      id="pricing"
      className="py-20 dark:bg-dark-custom-dark-blue text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        {/* Section Header */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-2xl md:text-4xl text-indigo-100 font-bold mb-4 font-poppins">
            Simple, Transparent Pricing
          </h2>
          <p className="dark:text-dark-secondary-text text-sm md:text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your educational journey
          </p>
        </div>
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Free Plan */}
          <div className="dark:bg-dark-text-hover rounded-2xl p-6 md:p-8 border dark:border-dark-button-blue transition-all duration-300 animate__animated animate__fadeInUp flex flex-col cursor-pointer hover:scale-[1.02]">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-100">
              Free Plan
            </h3>
            <p className="dark:text-dark-primary-text mb-6">
              Perfect for getting started
            </p>
            <div className="text-2xl md:text-4xl font-bold mb-6">
              <span>Rs. 0</span>
              <span className="dark:text-dark-primary-text text-sm md:text-lg">
                /month
              </span>
            </div>
            <ul className="space-y-4 mb-8 h-full">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 dark:text-dark-logo-primary mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Basic Learning Paths
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 dark:text-dark-logo-primary mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Limited Resume Templates
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 dark:text-dark-logo-primary mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Basic Networking
              </li>
            </ul>
            <button className="justify-end w-full dark:bg-dark-custom-dark-blue/90 font-semibold py-3 rounded-lg hover:dark:bg-dark-custom-dark-blue/60 hover:text-dark-primary-text transition-all duration-300">
              Get Started Free
            </button>
          </div>
          {/* Premium Plan */}
          <div
            className="bg-gradient-to-br dark:from-dark-button-blue dark:to-dark-text-hover rounded-2xl p-6 md:p-8 transform md:scale-[1.05] hover:scale-[1.07] shadow-xl animate__animated animate__fadeInUp flex flex-col cursor-pointer transition-all duration-300"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute top-4 right-4">
              <span className="dark:bg-dark-logo-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
                Popular
              </span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-100">
              Premium Plan
            </h3>
            <p className="dark:text-dark-primary-text mb-6">
              Full access to all features
            </p>
            <div className="text-2xl md:text-4xl font-bold mb-6">
              <span>Rs. 1000</span>
              <span className="dark:text-dark-primary-text text-sm md:text-lg">
                /month
              </span>
            </div>
            <ul className="space-y-4 mb-8 h-full">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 dark:text-dark-logo-primary mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Advanced Learning Paths
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 dark:text-dark-logo-primary mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                AI-Powered Resume Builder
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 dark:text-dark-logo-primary mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Full Networking Features
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 dark:text-dark-logo-primary mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Priority Support
              </li>
            </ul>
            <button className=" w-full dark:bg-dark-logo-primary hover:dark:bg-dark-logo-primary/60 py-3 rounded-lg transition-all duration-300 font-semibold dark:text-white justify-end">
              Start Premium Trial
            </button>
          </div>
          {/* Student Plan */}
          <div className="dark:bg-dark-text-hover rounded-2xl p-6 md:p-8 border dark:border-dark-button-blue transition-all duration-300 animate__animated animate__fadeInUp flex flex-col hover:scale-[1.02]">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-100">
              Student Plan
            </h3>
            <p className="dark:text-dark-primary-text mb-6">
              Special Discounts for Students
            </p>
            <div className="text-2xl md:text-4xl font-bold mb-6">
              <span>Rs. 500</span>
              <span className="dark:text-dark-primary-text text-sm md:text-lg">
                /month
              </span>
            </div>
            <ul className="space-y-4 mb-8 h-full">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 dark:text-dark-logo-primary mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Basic Learning Paths
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 dark:text-dark-logo-primary mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Limited Resume Templates
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 dark:text-dark-logo-primary mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Basic Networking
              </li>
            </ul>
            <button className="justify-end w-full dark:bg-dark-custom-dark-blue/90 font-semibold py-3 rounded-lg hover:dark:bg-dark-custom-dark-blue/60 hover:text-dark-primary-text transition-all duration-300">
              Verify Student Details
            </button>
          </div>
        </div>
        {/* Compare Plans Button */}
        <div className="text-center mb-20">
          <button className="dark:bg-dark-button-blue hover:dark:bg-dark-custom-blue-stroke text-white px-8 py-3 rounded-lg transition-all duration-300">
            Compare All Plans
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
