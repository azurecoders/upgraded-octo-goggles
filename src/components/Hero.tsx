import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[70vh] justify-center bg-gradient-to-br bg-light-golden-white bg-light-bg dark:from-dark-button-blue dark:via-dark-text-hover dark:to-dark-button-blue relative overflow-hidden"
    >
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_50%_50%,rgba(13, 24, 39, 1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-primary-text leading-tight">
              Your All-in-One Platform to{" "}
              <span className="dark:text-dark-logo-primary text-light-primary">
                Learn, Connect, and Grow
              </span>
            </h1>
            <p className="text-xl dark:text-gray-300 max-w-2xl text-light-secondary">
              From personalized learning to career development, MyPath empowers
              students to unlock their full potential—all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="w-full md:w-fit px-8 py-4 bg-light-primary hover:bg-light-primary/90 dark:bg-dark-logo-primary dark:text-dark-primary-text rounded-lg text-lg font-semibold dark:hover:bg-dark-logo-primary/90 transition-colors animate__animated animate__pulse animate__infinite">
                Get Started for Free
              </button>
              <button className="w-full md:w-fit px-8 py-4 border-1 bg-light-text hover:bg-light-text/95 border-light-primary dark:border-[#ccc] dark:text-dark-primary-text rounded-lg text-lg font-semibold transition-colors dark:bg-dark-custom-dark-blue dark:hover:bg-dark-custom-blue">
                Learn More
              </button>
            </div>
            <div className="flex items-center gap-4 text-dark-primary-text">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-light-primary dark:bg-dark-secondary-text" />
                <div className="w-8 h-8 rounded-full bg-light-secondary dark:bg-dark-button-blue" />
                <div className="w-8 h-8 rounded-full bg-light-text dark:bg-dark-custom-blue" />
              </div>
              <p className="text-light-text dark:text-dark-primary-text">
                Joined by 10,000+ students
              </p>
            </div>
          </div>
          {/* Dashboard mockup */}
          <div className="relative animate__animated animate__fadeInRight border-1 border-light-accent/5">
            <div className="dark:bg-dark-custom-dark-blue backdrop-blur-sm p-6 rounded-2xl border dark:border-neutral-700 shadow-2xl">
              <div className="space-y-4">
                <div className="h-4 w-1/3 bg-light-accent dark:bg-dark-custom-blue-stroke rounded animate-pulse" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="h-24 bg-light-accent dark:bg-dark-custom-blue rounded animate-pulse" />
                  <div className="h-24 bg-light-accent dark:bg-dark-custom-blue rounded animate-pulse" />
                  <div className="hidden md:block h-24 bg-light-accent dark:bg-dark-custom-blue rounded animate-pulse" />
                  <div className="hidden md:block h-24 bg-light-accent dark:bg-dark-custom-blue rounded animate-pulse" />
                </div>
                <div className="h-4 w-1/2 bg-light-accent dark:bg-dark-custom-blue-stroke rounded animate-pulse" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 dark:bg-dark-logo-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 dark:bg-dark-secondary-text/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
