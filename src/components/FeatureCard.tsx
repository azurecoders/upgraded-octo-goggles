import React from "react";

const FeatureCard = () => {
  return (
    <div className="bg-light-bg/60 dark:bg-dark-custom-dark-blue p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp">
      <div className="bg-light-primary dark:bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
      <h3 className="text-xl font-bold text-light-text dark:text-dark-primary-text mb-2">
        AI-Driven
      </h3>
      <p className="dark:text-dark-secondary-text text-light-secondary/90">
        Advanced algorithms personalize your learning experience and career path
      </p>
    </div>
  );
};

export default FeatureCard;
