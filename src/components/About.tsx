import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-20 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">
            Empowering Students to Shape Their Future
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            At MyPath, we believe every student deserves access to personalized
            education and career guidance. Our AI-powered platform bridges the
            gap between learning and success, making quality education
            accessible to all.
          </p>
        </div>
        {/* Our Story Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 border-l-2 border-indigo-600 h-full" />
          {/* Timeline Item 1 */}
          <div className="mb-16 relative animate__animated animate__fadeInLeft">
            <div className="flex items-center w-full">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-neutral-100 p-6 rounded-xl shadow-lg inline-block">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    2021
                  </h3>
                  <p className="text-neutral-600 text-xs md:text-[14px]">
                    MyPath was founded with a vision to revolutionize education
                    through AI
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full" />
              <div className="w-1/2" />
            </div>
          </div>
          {/* Timeline Item 2 */}
          <div className="mb-16 relative animate__animated animate__fadeInRight">
            <div className="flex items-center w-full">
              <div className="w-1/2" />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full" />
              <div className="w-1/2 pl-8">
                <div className="bg-neutral-100 p-6 rounded-xl shadow-lg inline-block">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    2022
                  </h3>
                  <p className="text-neutral-600 text-xs md:text-[14px]">
                    Launched AI-powered learning paths and career guidance
                    features
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Timeline Item 3 */}
          <div className="relative animate__animated animate__fadeInLeft">
            <div className="flex items-center w-full">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-neutral-100 p-6 rounded-xl shadow-lg inline-block">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    2023
                  </h3>
                  <p className="text-neutral-600 text-xs md:text-[14px]">
                    Reached 10,000+ active students and expanded nationwide
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full" />
              <div className="w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
