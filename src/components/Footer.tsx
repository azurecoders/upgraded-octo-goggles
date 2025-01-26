import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-light-accent dark:bg-gray-900 text-light-text dark:text-dark-primary-text pt-20 pb-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">MyPath</h3>
            <p className="dark:dark:text-gray-400 mb-6">
              Empowering students to shape their future through AI-powered
              learning and career development.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="dark:dark:text-gray-400 hover:dark:text-dark-primary-text transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="dark:dark:text-gray-400 hover:dark:text-dark-primary-text transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="dark:text-gray-400 hover:dark:text-dark-primary-text transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-dark-primary-text transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-dark-primary-text transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-dark-primary-text transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-dark-primary-text transition-colors duration-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-dark-primary-text transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-dark-primary-text transition-colors duration-300"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-dark-primary-text transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-dark-primary-text transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-dark-primary-text transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="dark:text-gray-400 mb-4">
              Stay updated with the latest from MyPath!
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg dark:bg-gray-800 border border-gray-dark dark:text-dark-primary-text dark:placeholder-gray-400 focus:ring-2 focus:dark:ring-blue-600 focus:border-transparent outline-none"
              />
              <button
                type="submit"
                className="w-full bg-light-primary hover:bg-light-primary/90 text-light-bg dark:bg-blue-600 dark:text-dark-primary-text py-2 px-4 rounded-lg hover:dark:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-light-secondary dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="dark:text-gray-400 text-sm">
              © 2024 MyPath. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="dark:text-gray-400 hover:dark:text-dark-primary-text text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="dark:text-gray-400 hover:dark:text-dark-primary-text text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="dark:text-gray-400 hover:dark:text-dark-primary-text text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
