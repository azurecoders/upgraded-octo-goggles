import React from "react";

const Timeline = () => {
  return (
    <section id="testimonials" className="py-20 dark:bg-dark-custom-dark-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-2xl md:text-4xl font-bold dark:text-indigo-100 mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg md:text-xl dark:text-dark-secondary-text">
            Join 10,000+ students transforming their journey with MyPath
          </p>
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 dark:bg-neutral-800/50 rounded-xl animate__animated animate__fadeInUp">
            <div className="text-4xl font-bold dark:text-dark-logo-primary mb-2">
              10K+
            </div>
            <div className="dark:text-indigo-100">Active Students</div>
          </div>
          <div
            className="text-center p-6 dark:bg-neutral-800/50 rounded-xl animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-4xl font-bold dark:text-dark-logo-primary mb-2">
              95%
            </div>
            <div className="dark:text-indigo-100">Success Rate</div>
          </div>
          <div
            className="text-center p-6 dark:bg-neutral-800/50 rounded-xl animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-4xl font-bold dark:text-dark-logo-primary mb-2">
              500+
            </div>
            <div className="dark:text-indigo-100">Partner Universities</div>
          </div>
        </div>
        {/* Testimonials Carousel */}
        <div className="testimonials-carousel relative">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="dark:bg-neutral-800/40 p-8 rounded-xl shadow-lg animate__animated animate__fadeIn hover:dark:bg-neutral-800/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 border-2 bg-transparent border-indigo-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 dark:text-indigo-100"
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
                  <h4 className="text-lg font-semibold dark:text-dark-primary-text">
                    Sarah Johnson
                  </h4>
                  <p className="dark:text-neutral-400">
                    Computer Science Student
                  </p>
                </div>
              </div>
              <p className="dark:text-neutral-300">
                {
                  '"MyPath\'s AI-powered learning paths helped me master programming concepts at my own pace. The personalized approach made all the difference!"'
                }
              </p>
              <div className="mt-4 flex dark:text-dark-logo-primary">★★★★★</div>
            </div>
            <div className="dark:bg-neutral-800/40 p-8 rounded-xl shadow-lg animate__animated animate__fadeIn hover:dark:bg-neutral-800/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 border-2 bg-transparent border-indigo-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 dark:text-indigo-100"
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
                  <h4 className="text-lg font-semibold dark:text-dark-primary-text">
                    Sarah Johnson
                  </h4>
                  <p className="dark:text-neutral-400">
                    Computer Science Student
                  </p>
                </div>
              </div>
              <p className="dark:text-neutral-300">
                {
                  '"MyPath\'s AI-powered learning paths helped me master programming concepts at my own pace. The personalized approach made all the difference!"'
                }
              </p>
              <div className="mt-4 flex dark:text-dark-logo-primary">★★★★★</div>
            </div>
            <div className="dark:bg-neutral-800/40 p-8 rounded-xl shadow-lg animate__animated animate__fadeIn hover:dark:bg-neutral-800/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 border-2 bg-transparent border-indigo-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 dark:text-indigo-100"
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
                  <h4 className="text-lg font-semibold dark:text-dark-primary-text">
                    Sarah Johnson
                  </h4>
                  <p className="dark:text-neutral-400">
                    Computer Science Student
                  </p>
                </div>
              </div>
              <p className="dark:text-neutral-300">
                {
                  '"MyPath\'s AI-powered learning paths helped me master programming concepts at my own pace. The personalized approach made all the difference!"'
                }
              </p>
              <div className="mt-4 flex dark:text-dark-logo-primary">★★★★★</div>
            </div>
          </div>
        </div>
        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="dark:bg-dark-logo-primary dark:text-dark-primary-text px-8 py-3 rounded-lg md:text-lg font-semibold hover:dark:bg-dark-logo-primary/90 transition duration-300 animate__animated animate__pulse animate__infinite text-sm">
            Join Our Community Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
