import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 bg-light-accent dark:bg-dark-custom-blue w-full flex flex-col items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[30px] md:text-[42px] font-bold text-center my-6 text-light-text dark:text-indigo-100">
          Why Choose MyPath?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
        {/* CTA */}
        <div className="text-center animate__animated animate__fadeIn">
          <button className="bg-light-primary hover:bg-light-primary/90 dark:bg-dark-logo-primary dark:text-dark-primary-text px-8 py-3 rounded-lg md:text-lg font-semibold hover:dark:bg-dark-logo-primary/90 transition duration-300 text-sm">
            Join Our Community Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
