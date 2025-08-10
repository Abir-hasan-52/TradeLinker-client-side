import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import allProductsImage from "../../assets/AllProducts.png";
import discountsImage from "../../assets/Discount.png";
import newArrivalsImage from "../../assets/newArrival.png";

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        slidesPerView={1}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        {/* Slide 1: All Products */}
        <SwiperSlide>
          <div
            className="relative h-72 sm:h-96 md:h-[420px] bg-cover bg-center flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${allProductsImage})` }}
          >
            <div className="relative z-10 text-center text-gray-600 px-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Explore Our Full Collection
              </h2>
              <p className="mb-6 text-lg">
                Find everything you need in one place — from bestsellers to
                hidden gems.
              </p>
              <Link
                to="/products"
                className="inline-block text-white bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded font-semibold shadow-lg"
              >
                Shop All Products
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Discounts */}
        <SwiperSlide>
          <div
            className="relative h-72 sm:h-96 md:h-[420px]  flex items-center justify-end"
            style={{ backgroundImage: `url(${discountsImage})` }}
          >
            <div className="relative z-10 text-gray-600 max-w-lg text-center px-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Exclusive Discounts
              </h2>
              <p className="mb-6 text-lg">
                Save big with our latest deals — up to 20% off.
              </p>
              <Link
                to="/discounted"
                className="inline-block text-white bg-red-700 hover:bg-red-800 transition px-6 py-3 rounded font-semibold shadow-lg"
              >
                View Discounts
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3: New Arrivals */}
        <SwiperSlide>
          <div
            className="relative h-72 sm:h-96 md:h-[420px] bg-cover bg-center flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${newArrivalsImage})` }}
          >
            <div className="absolute inset-0   "></div>
            <div className="relative z-10 text-center text-gray-600 px-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                New Arrivals Just In!
              </h2>
              <p className="mb-6 text-lg">
                Be the first to get your hands on our latest arrivals.
              </p>
              <Link
                to="/new-arrivals"
                className="inline-block text-white bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded font-semibold shadow-lg"
              >
                See What's New
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
