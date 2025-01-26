import React from "react";

const StatsCard = () => {
  return (
    <div className="text-center p-6 bg-light-accent dark:bg-neutral-800/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp">
      <div className="text-4xl font-bold text-light-text dark:text-dark-logo-primary mb-2">
        10K+
      </div>
      <div className="text-light-secondary/90 dark:text-indigo-100">
        Active Students
      </div>
    </div>
  );
};

export default StatsCard;
