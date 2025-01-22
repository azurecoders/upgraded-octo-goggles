import React from "react";

const Features = () => {
  return (
    <section id="features" className="py-20 dark:bg-dark-custom-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[42px] font-bold text-center my-6 dark:text-indigo-100">
          Why Choose MyPath?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="dark:bg-dark-custom-dark-blue p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 dark:text-dark-logo-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold dark:text-dark-primary-text mb-2">
              AI-Driven
            </h3>
            <p className="dark:text-dark-secondary-text">
              Advanced algorithms personalize your learning experience and
              career path
            </p>
          </div>
          <div
            className="dark:bg-dark-custom-dark-blue p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 dark:text-dark-logo-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold dark:text-dark-primary-text mb-2">
              All-in-One Platform
            </h3>
            <p className="dark:text-dark-secondary-text">
              Everything you need for academic and career success in one place
            </p>
          </div>
          <div
            className="dark:bg-dark-custom-dark-blue p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-dark-logo-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold dark:text-dark-primary-text mb-2">
              Affordable
            </h3>
            <p className="dark:text-dark-secondary-text">
              Flexible pricing plans to make quality education accessible to
              everyone
            </p>
          </div>
        </div>
        {/* CTA */}
        <div className="text-center animate__animated animate__fadeIn">
          <button className="bg-dark-logo-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-dark-logo-primary/90 transition duration-300">
            Join the MyPath Community Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
