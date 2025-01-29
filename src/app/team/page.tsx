import TeamCard from "@/components/TeamCard";
import React from "react";

const TeamPage = () => {
  return (
    <section
      id="team"
      className="py-20 bg-light-bg dark:bg-dark-custom-dark-blue"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        {/* Section Header */}

        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-[30px] md:text-4xl font-bold text-light-text dark:text-indigo-100 mb-4">
            The Minds Behind MyPath
          </h2>
          <p className="text-lg md:text-xl text-light-secondary/90 dark:text-dark-secondary-text/90">
            Meet the passionate team driving innovation in education
          </p>
        </div>
        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
        {/* CTA Section */}
        <div className="text-center animate__animated animate__fadeIn">
          <button className="bg-light-primary text-light-bg  hover:bg-light-primary/90 dark:bg-dark-logo-primary dark:text-dark-primary-text px-8 py-3 rounded-lg md:text-lg font-semibold hover:dark:bg-dark-logo-primary/60 transition duration-300 text-sm">
            Join Our Mission
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
