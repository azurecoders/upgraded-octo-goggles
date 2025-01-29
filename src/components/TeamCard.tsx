import React from "react";

const TeamCard = () => {
  return (
    <div className="bg-light-accent hover:bg-light-accent/80 hover:shadow-lg hover:shadow-light-primary/5 dark:bg-dark-text-hover rounded-xl p-4  md:p-6 hover:transform hover:dark:bg-dark-custom-blue transition duration-300 animate__animated animate__fadeInUp cursor-pointer">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 shadow-md shadow-light-primary/20 dark:shadow-none text-light-secondary dark:bg-dark-button-blue/20 rounded-full mb-4 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-light-secondary/80 dark:text-dark-primary-text"
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
        <h3 className="text-xl font-semibold text-light-text dark:text-indigo-100 mb-2">
          Sarah Khan
        </h3>
        <p className="font-semibold text-sm text-light-secondary/80 dark:text-dark-logo-primary mb-4">
          Founder &amp; CEO
        </p>
        <p className="text-light-secondary/90 dark:text-dark-secondary-text/70 text-center mb-4">
          Visionary leader with 10+ years in EdTech, passionate about
          transforming education through AI.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-light-secondary/80 hover:text-[#0077B5] dark:text-dark-primary-text hover:dark:text-[#0077B5] transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-light-secondary/80 hover:text-[#1DA1F2] dark:text-dark-primary-text hover:dark:text-[#1DA1F2] transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
