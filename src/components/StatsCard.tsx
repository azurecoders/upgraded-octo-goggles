"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsCard = ({ count, label }: { count: number; label: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  return (
    <div
      ref={ref}
      className="text-center p-6 bg-light-accent dark:bg-neutral-800/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp"
    >
      <div className="text-4xl font-bold text-light-text dark:text-dark-logo-primary mb-2">
        {inView ? (
          <CountUp start={0} end={count} duration={count < 100 ? 1 : 2} />
        ) : (
          0
        )}
        {"+"}
      </div>
      <div className="text-light-secondary/90 dark:text-indigo-100">
        {label}
      </div>
    </div>
  );
};

export default StatsCard;
