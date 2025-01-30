"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-50 backdrop-blur-sm  ${
        colorChange
          ? "bg-light-bg/80 dark:bg-dark-custom-blue bg-light-golden-white"
          : location === "/"
          ? ""
          : "bg-light-bg dark:bg-dark-custom-blue"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-2xl font-bold text-light-text dark:text-dark-primary-text text-light-light-black"
              >
                MyPath
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="text-light-secondary hover:text-light-text/80 dark:text-dark-primary-text text-light-light-black hover:text-light-light-black/80 hover:dark:text-dark-primary-text px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-light-secondary hover:text-light-text/80 dark:text-dark-primary-text text-light-light-black hover:text-light-light-black/80 hover:dark:text-dark-primary-text px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/features"
                className="text-light-secondary hover:text-light-text/80 dark:text-dark-primary-text text-light-light-black hover:text-light-light-black/80 hover:dark:text-dark-primary-text px-3 py-2 rounded-md text-sm font-medium"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-light-secondary hover:text-light-text/80 dark:text-dark-primary-text text-light-light-black hover:text-light-light-black/80 hover:dark:text-dark-primary-text px-3 py-2 rounded-md text-sm font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="text-light-secondary hover:text-light-text/80 dark:text-dark-primary-text text-light-light-black hover:text-light-light-black/80 hover:dark:text-dark-primary-text px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </Link>
              <Link
                href="/team"
                className="text-light-secondary hover:text-light-text/80 dark:text-dark-primary-text text-light-light-black hover:text-light-light-black/80 hover:dark:text-dark-primary-text px-3 py-2 rounded-md text-sm font-medium"
              >
                Team
              </Link>
              <Link
                href="/faq"
                className="text-light-secondary hover:text-light-text/80 dark:text-dark-primary-text text-light-light-black hover:text-light-light-black/80 hover:dark:text-dark-primary-text px-3 py-2 rounded-md text-sm font-medium"
              >
                FAQ
              </Link>
              <button className="hover:bg-light-primary/90 bg-light-primary dark:bg-dark-logo-primary dark:text-dark-primary-text px-4 py-2 rounded-md text-sm font-medium hover:dark:bg-dark-logo-primary/90 transition-colors animate__animated animate__pulse animate__infinite">
                Get Started
              </button>
              {/* {resolvedTheme === "light" ? (
                <button
                  className="cursor-pointer text-light-text"
                  onClick={() => setTheme("dark")}
                >
                  <Moon className="cursor-pointer" />
                </button>
              ) : (
                <button
                  className="cursor-pointer"
                  onClick={() => setTheme("light")}
                >
                  <Sun className="cursor-pointer" />
                </button>
              )} */}
            </div>
          </div>
          <div className="md:hidden outline-none border-none">
            <button
              type="button"
              className="outline-none border-none mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:dark:text-dark-primary-text hover:bg-light-text focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:dark:ring-dark-primary-text"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`mobile-menu bg-light-bg/95 dark:bg-dark-custom-blue ${
          toggleMenu ? "block" : "hidden"
        } md:hidden shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="dark:text-dark-primary-text hover:dark:text-dark-primary-text text-light-text hover:text-light-text/95 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setToggleMenu(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="dark:text-dark-primary-text hover:dark:text-dark-primary-text text-light-text hover:text-light-text/95 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setToggleMenu(false)}
          >
            About
          </Link>
          <Link
            href="/features"
            className="dark:text-dark-primary-text hover:dark:text-dark-primary-text text-light-text hover:text-light-text/95 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setToggleMenu(false)}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="dark:text-dark-primary-text hover:dark:text-dark-primary-text text-light-text hover:text-light-text/95 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setToggleMenu(false)}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="dark:text-dark-primary-text hover:dark:text-dark-primary-text text-light-text hover:text-light-text/95 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setToggleMenu(false)}
          >
            Blog
          </Link>
          <Link
            href="/team"
            className="dark:text-dark-primary-text hover:dark:text-dark-primary-text text-light-text hover:text-light-text/95 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setToggleMenu(false)}
          >
            Team
          </Link>
          <Link
            href="/faq"
            className="dark:text-dark-primary-text hover:dark:text-dark-primary-text text-light-text hover:text-light-text/95 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setToggleMenu(false)}
          >
            FAQ
          </Link>
          <div className="flex items-center justify-between px-3 py-2">
            <button className="flex-1 bg-light-primary hover:bg-light-primary/90 dark:bg-dark-logo-primary dark:text-dark-primary-text px-4 py-2 rounded-md text-sm font-medium hover:dark:bg-dark-logo-primary/90 transition-colors">
              Get Started
            </button>
            {/* <div className="ml-4">
              {resolvedTheme === "light" ? (
                <button
                  className="cursor-pointer text-light-text p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setTheme("dark")}
                >
                  <Moon className="cursor-pointer" />
                </button>
              ) : (
                <button
                  className="cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setTheme("light")}
                >
                  <Sun className="cursor-pointer" />
                </button>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
