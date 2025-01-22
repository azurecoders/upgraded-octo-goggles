import React from "react";

const Timeline = () => {
  return (
    <section id="testimonials" className="py-20 bg-dark-custom-dark-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-indigo-100 mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-dark-secondary-text">
            Join 10,000+ students transforming their journey with MyPath
          </p>
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-neutral-800/50 rounded-xl animate__animated animate__fadeInUp">
            <div className="text-4xl font-bold text-dark-logo-primary mb-2">
              10K+
            </div>
            <div className="text-indigo-100">Active Students</div>
          </div>
          <div
            className="text-center p-6 bg-neutral-800/50 rounded-xl animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-4xl font-bold text-dark-logo-primary mb-2">
              95%
            </div>
            <div className="text-indigo-100">Success Rate</div>
          </div>
          <div
            className="text-center p-6 bg-neutral-800/50 rounded-xl animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-4xl font-bold text-dark-logo-primary mb-2">
              500+
            </div>
            <div className="text-indigo-100">Partner Universities</div>
          </div>
        </div>
        {/* Testimonials Carousel */}
        <div className="testimonials-carousel relative">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-neutral-800 p-8 rounded-xl shadow-lg animate__animated animate__fadeIn">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-neutral-400"
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
                  <h4 className="text-lg font-semibold text-white">
                    Sarah Johnson
                  </h4>
                  <p className="text-neutral-400">Computer Science Student</p>
                </div>
              </div>
              <p className="text-neutral-300">
                "MyPath's AI-powered learning paths helped me master programming
                concepts at my own pace. The personalized approach made all the
                difference!"
              </p>
              <div className="mt-4 flex text-dark-logo-primary">★★★★★</div>
            </div>
            {/* Testimonial 2 */}
            <div
              className="bg-neutral-800 p-8 rounded-xl shadow-lg animate__animated animate__fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-neutral-400"
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
                  <h4 className="text-lg font-semibold text-white">
                    Michael Chen
                  </h4>
                  <p className="text-neutral-400">Business Major</p>
                </div>
              </div>
              <p className="text-neutral-300">
                "The networking features connected me with amazing mentors and
                peers. I've already secured an internship through MyPath's
                platform!"
              </p>
              <div className="mt-4 flex text-dark-logo-primary">★★★★★</div>
            </div>
            {/* Testimonial 3 */}
            <div
              className="bg-neutral-800 p-8 rounded-xl shadow-lg animate__animated animate__fadeIn"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-neutral-400"
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
                  <h4 className="text-lg font-semibold text-white">
                    Emily Rodriguez
                  </h4>
                  <p className="text-neutral-400">Engineering Student</p>
                </div>
              </div>
              <p className="text-neutral-300">
                "The AI Resume Builder helped me create a professional resume
                that stands out. I've received more interview calls since using
                MyPath!"
              </p>
              <div className="mt-4 flex text-dark-logo-primary">★★★★★</div>
            </div>
          </div>
        </div>
        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-dark-logo-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-dark-logo-primary/90 transition duration-300 animate__animated animate__pulse animate__infinite">
            Join Our Community Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
