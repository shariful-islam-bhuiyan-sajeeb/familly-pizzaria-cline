import React from "react";
import banner from "../Images/Banner.jpg";
import waiter1 from "../Images/restorent img/waiter one.jpg";
import restorent1 from "../Images/restorent img/restorent one.jpg";
import waiter2 from "../Images/restorent img/waiter two.jpg";
import restorent2 from "../Images/restorent img/restorent two.jpg";
import waiter3 from "../Images/restorent img/waiter three.jpg";
import restorent3 from "../Images/restorent img/restorent three.jpg";

const BannerCoursol = () => {
  return (
    <div className="lg:mt-20">
      <div>
        <img className="w-full  " src={banner} alt="" />
      </div>

      {/*---------------------- carousel  */}
      <div className="carousel w-full h-1/2 mx-auto">
        <div
          id="slide1"
          className="carousel-item  relative w-full lg:h-[800px] md:h-[600px] sm:h-[400px] h-[200px] mx-auto"
        >
          <img src={waiter1} className="w-full mx-auto" />
          <div className="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="bg-black px-2 rounded-full text-white lg:text-5xl sm:text-2xl text-xl  "
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="bg-black px-2 rounded-full text-white lg:text-5xl sm:text-2xl text-xl"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item duration-500 relative w-full lg:h-[800px] md:h-[600px] sm:h-[400px] h-[200px] mx-auto"
        >
          <img src={restorent1} className="w-full mx-auto" />
          <div className="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="bg-black px-2 rounded-full text-white lg:text-5xl sm:text-2xl text-xl"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="bg-black px-2 rounded-full text-white lg:text-5xl sm:text-2xl text-xl"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item duration-500 relative w-full lg:h-[800px] md:h-[600px] sm:h-[400px] h-[200px] mx-auto"
        >
          <img src={waiter2} className="w-full  mx-auto" />
          <div className="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="bg-black px-2 rounded-full text-white lg:text-5xl sm:text-2xl text-xl"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="bg-black px-2 rounded-full text-white lg:text-5xl sm:text-2xl text-xl"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item duration-500 relative w-full lg:h-[800px] md:h-[600px] sm:h-[400px] h-[200px] mx-auto"
        >
          <img src={restorent2} className="w-full mx-auto" />
          <div className="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="bg-black px-2 rounded-full text-white lg:text-5xl sm:text-2xl text-xl"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="bg-black px-2 rounded-full text-white lg:text-5xl sm:text-2xl text-xl"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCoursol;
