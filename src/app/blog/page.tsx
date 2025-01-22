import React from "react";

const BlogsPage = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="text-center max-w-3xl mx-auto animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6 font-poppins">
            Blogs Coming Soon!
          </h2>
          <p className="text-xl text-neutral-600 mb-12">
            Stay tuned for insightful articles, tips, and updates from MyPath
          </p>
          {/* Coming Soon Animation */}
          <div className="mb-16">
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-25" />
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 w-48 h-48 rounded-full flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* Newsletter Signup */}
          <div className="bg-neutral-50 p-8 rounded-2xl shadow-lg animate__animated animate__fadeInUp">
            <h3 className="text-2xl font-semibold mb-4">
              Get Notified When We Launch
            </h3>
            <p className="text-neutral-600 mb-8">
              Be the first to receive our latest insights and educational
              content
            </p>
            <form id="newsletter-form" className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:border-blue-500"
                  required={true}
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 whitespace-nowrap"
                >
                  Notify Me
                </button>
              </div>
              <p className="text-sm text-neutral-500">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
