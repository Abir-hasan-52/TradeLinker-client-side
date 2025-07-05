import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className=" w-screen   mx-auto px-4 md:px-8 lg:px-12 mt-6">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-xl overflow-hidden"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-[#1B365D] to-[#4FB3E8] text-white h-[200px] sm:h-[300px] md:h-[400px] flex items-center justify-center text-center p-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2">
                🔥 Super Discount on Electronics!
              </h2>
              <p className="text-xs sm:text-sm md:text-lg">
                Buy bulk electronics at unbeatable prices.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-purple-700 to-pink-400 text-white h-[200px] sm:h-[300px] md:h-[400px] flex items-center justify-center text-center p-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2">
                🛍️ Fashion in Bulk
              </h2>
              <p className="text-xs sm:text-sm md:text-lg">
                Stock your store with wholesale fashion deals.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-green-600 to-emerald-400 text-white h-[200px] sm:h-[300px] md:h-[400px] flex items-center justify-center text-center p-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2">
                🏭 Industrial Tools Sale
              </h2>
              <p className="text-xs sm:text-sm md:text-lg">
                High-quality tools with bulk order savings.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
