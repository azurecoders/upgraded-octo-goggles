import React from "react";

const FAQPage = () => {
  return (
    <section id="pricing" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4" id="faq-container">
            {/* FAQ Item 1 */}
            <div className="border border-neutral-700 rounded-lg">
              <button className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center">
                <span>What's included in the free plan?</span>
                <svg
                  className="w-6 h-6 transform transition-transform duration-300"
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
              <div className="hidden px-6 py-4 text-neutral-400 border-t border-neutral-700">
                The free plan includes basic learning paths, limited resume
                templates, and basic networking features to help you get started
                with MyPath.
              </div>
            </div>
            {/* FAQ Item 2 */}
            <div className="border border-neutral-700 rounded-lg">
              <button className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center">
                <span>Can I switch plans later?</span>
                <svg
                  className="w-6 h-6 transform transition-transform duration-300"
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
              <div className="hidden px-6 py-4 text-neutral-400 border-t border-neutral-700">
                Yes, you can upgrade or downgrade your plan at any time. Your
                billing will be adjusted accordingly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
