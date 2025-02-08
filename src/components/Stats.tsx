import StatsCard from "./StatsCard";

const Stats = () => {
  return (
    <section
      id="stats"
      className="py-20 bg-light-accent-dark dark:bg-dark-custom-blue"
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
          <StatsCard count={500} label={"Active Students"} />
          <StatsCard count={1000} label={"Hours of Content"} />
          <StatsCard count={50} label={"Expert Mentors"} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
