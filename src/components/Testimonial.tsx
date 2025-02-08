"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Add this CSS to your global styles or component-specific CSS
const swiperStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.3) !important;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    --swiper-navigation-size: 16px;
    color: black !important;
    margin-top:5px;
  }

  .dark .swiper-button-next,
  .dark .swiper-button-prev {
    background: rgba(17, 24, 39, 0.9);
    color: var(--dark-logo-primary);
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 1);
  }

  .dark .swiper-button-next:hover,
  .dark .swiper-button-prev:hover {
    background: rgba(17, 24, 39, 1);
  }

  .swiper-button-next {
    top: 250px;
    right: -20px;
  }

  .swiper-button-prev {
    top: 250px;
    left: -20px;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: var(--light-primary);
    opacity: 0.5;
    margin: 0 4px !important;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    width: 20px;
    border-radius: 4px;
    background: var(--light-primary);
  }

  .dark .swiper-pagination-bullet {
    background: var(--dark-logo-primary);
  }

  .dark .swiper-pagination-bullet-active {
    background: var(--dark-logo-primary);
  }
`;

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="py-14 bg-light-accent dark:bg-dark-custom-blue"
    >
      <style>{swiperStyles}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="testimonials-carousel relative">
          <h2 className="py-8 text-center text-2xl md:text-4xl font-bold text-light-text dark:text-indigo-100 mb-4">
            Testimonial
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12" // Add padding for pagination
          >
            {/* Your SwiperSlides here */}
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-next !hidden md:!flex"></div>
          <div className="swiper-button-prev !hidden md:!flex"></div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-light-primary hover:bg-light-primary/90 dark:bg-dark-logo-primary dark:text-dark-primary-text px-8 py-3 rounded-lg md:text-lg font-semibold hover:dark:bg-dark-logo-primary/90 transition duration-300 animate__animated animate__pulse animate__infinite text-sm">
            Join Our Community Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
