import React from "react";

const TestimonialCard = () => {
  return (
    <div className="bg-light-accent hover:bg-light-accent/90 dark:bg-neutral-800/40 p-8 rounded-xl shadow-lg animate__animated animate__fadeIn hover:dark:bg-neutral-800/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 border-2 bg-transparent border-light-secondary dark:border-indigo-100 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-light-text dark:text-indigo-100"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h4 className="text-light-text text-lg font-semibold dark:text-dark-primary-text">
            Sarah Johnson
          </h4>
          <p className="text-light-secondary/90 dark:text-neutral-400">
            Computer Science Student
          </p>
        </div>
      </div>
      <p className="text-light-secondary/90 dark:text-neutral-300">
        {
          '"MyPath\'s AI-powered learning paths helped me master programming concepts at my own pace. The personalized approach made all the difference!"'
        }
      </p>
      <div className="mt-4 flex text-light-primary dark:text-dark-logo-primary">
        ★★★★★
      </div>
    </div>
  );
};

export default TestimonialCard;
