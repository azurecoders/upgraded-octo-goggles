import React from "react";

const PricingPage = () => {
  return (
    <section id="pricing" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        {/* Section Header */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold mb-4 font-poppins">
            Simple, Transparent Pricing
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your educational journey
          </p>
        </div>
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Free Plan */}
          <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-blue-500 transition-all duration-300 animate__animated animate__fadeInUp">
            <h3 className="text-2xl font-semibold mb-4">Free Plan</h3>
            <p className="text-neutral-400 mb-6">Perfect for getting started</p>
            <div className="text-4xl font-bold mb-6">
              <span>Rs. 0</span>
              <span className="text-neutral-400 text-lg">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
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
                  className="w-5 h-5 text-green-500 mr-3"
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
                  className="w-5 h-5 text-green-500 mr-3"
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
            <button className="w-full bg-neutral-700 hover:bg-neutral-600 text-white py-3 rounded-lg transition-all duration-300">
              Get Started Free
            </button>
          </div>
          {/* Premium Plan */}
          <div
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 transform scale-105 shadow-xl animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute top-4 right-4">
              <span className="bg-yellow-400 text-neutral-900 text-sm font-semibold px-3 py-1 rounded-full">
                Popular
              </span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
            <p className="text-neutral-200 mb-6">Full access to all features</p>
            <div className="text-4xl font-bold mb-6">
              <span>Rs. 1000</span>
              <span className="text-neutral-200 text-lg">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-400 mr-3"
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
                  className="w-5 h-5 text-yellow-400 mr-3"
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
                  className="w-5 h-5 text-yellow-400 mr-3"
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
                  className="w-5 h-5 text-yellow-400 mr-3"
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
            <button className="w-full bg-white text-neutral-900 py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300">
              Start Premium Trial
            </button>
          </div>
          {/* Student Plan */}
          <div
            className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-blue-500 transition-all duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-2xl font-semibold mb-4">Student Plan</h3>
            <p className="text-neutral-400 mb-6">Special student discount</p>
            <div className="text-4xl font-bold mb-6">
              <span>Rs. 500</span>
              <span className="text-neutral-400 text-lg">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
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
                All Premium Features
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
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
                Student Community Access
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
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
                Student-Only Events
              </li>
            </ul>
            <button className="w-full bg-neutral-700 hover:bg-neutral-600 text-white py-3 rounded-lg transition-all duration-300">
              Verify Student Status
            </button>
          </div>
        </div>
        {/* Compare Plans Button */}
        <div className="text-center mb-20">
          <button className="bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-3 rounded-lg transition-all duration-300">
            Compare All Plans
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
