import React from "react";
import StatsCard from "./StatsCard";
import TestimonialCard from "./TestimonialCard";

const Timeline = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-light-accent-dark dark:bg-dark-custom-dark-blue"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-2xl md:text-4xl font-bold text-light-text dark:text-indigo-100 mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg md:text-xl text-light-secondary/90 dark:text-dark-secondary-text">
            Join 10,000+ students transforming their journey with MyPath
          </p>
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
        {/* Testimonials Carousel */}
        <div className="testimonials-carousel relative">
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-light-primary hover:bg-light-primary/90 dark:bg-dark-logo-primary dark:text-dark-primary-text px-8 py-3 rounded-lg md:text-lg font-semibold hover:dark:bg-dark-logo-primary/90 transition duration-300 animate__animated animate__pulse animate__infinite text-sm">
            Join Our Community Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
