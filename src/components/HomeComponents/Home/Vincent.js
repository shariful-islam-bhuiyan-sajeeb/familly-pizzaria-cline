import React from "react";
import pizzaOne from "../../Images/Pizza/pizzaa One.jpg";
import pizzatwo from "../../Images/Pizza/pizza two.jpg";

const Vincent = () => {
  return (
    <div className="lg:mt-20 mb-10 sm:mt-4 mt-2">
      <div className="text-center ">
        <h1 className="uppercase md:text-4xl sm:text-2xl text-xl">
          We are Vincent
        </h1>
        <p className="uppercase text-white lg:w-8/12 w-full mx-auto lg:text-2xl sm:text-xl text-lg sm:text-center text-justify pt-6 lg:px-0 px-3">
          We don't just make pizza, we make people's day vincent pizzeria was
          built on the belief that pizza should be special,and web carry that
          belief into everything we do.{" "}
        </p>
        <p className="h-[2px] xl:w-[550px] lg:w-[450px] md:w-[350px] sm:w-[250px] w-[250px] mx-auto lg:my-12 my-8 bg-slate-100 "></p>
        <p className="lg:w-8/12 w-full mx-auto lg:text-2xl sm:text-xl text-lg text-justify  lg:px-0 px-5">
          when more than 50 years of experience under our belts, we understand
          how to best serve our customers through tried and true server
          principles, Instead of following trends, we set them, We create food
          we're proud to serve and deliver if fast, with a smile. No matter
          where you find us , we're making sure each meal our customers enjoy i
          delicious and one-of-a-kind.
        </p>
      </div>
      <div className="lg:px-0 mx-auto overflow-hidden lg:mt-16 sm:mt-10 mt-6 gap-x-6  ">
        <div className="flex justify-between px-6 gap-x-6 lg:w-10/12 mx-auto w-full  ">
          <img
            className="xl:w-full md:w-96 sm:w-64 w-52"
            src={pizzaOne}
            alt=""
          />
          <img
            className="xl:w-full md:w-96 sm:w-64 w-52 "
            src={pizzatwo}
            alt=""
          />
        </div>
        {/* text address  in heres */}
        <div className=" flex sm:flex-row flex-col items-center justify-around  lg:mt-10 sm:mt-6 mt-4">
          <div className="flex flex-col items-center px-2 lg:space-y-10 md:space-y-6 space-y-4">
            <h1 className="uppercase md:text-4xl sm:text-2xl text-xl text-white">
              Brooklyn
            </h1>
            <p className="text-center md:text-lg text-md sm:mx-0 mx-4">
              H-1 Block-c road-65 East Raja Bazar Framgate,Dhaka <br />{" "}
              01791***** sharifulislambhuiyan93@gmail.com
            </p>
            <a
              href="#_"
              class="relative duration-500 scroll-smooth translate inline-flex items-center md:px-12 sm:px-6 px-3 md:py-3 py-1 overflow-hidden text-lg font-medium text-white border-2 border-white hover:border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative uppercase">Get Directions</span>
            </a>
          </div>
          <div className="flex flex-col items-center sm:mt-0 mt-6 lg:space-y-10 md:space-y-6 space-y-4">
            <h1 className="uppercase md:text-4xl sm:text-2xl text-xl text-white">
              Queens
            </h1>
            <p className="text-center md:text-lg text-md">
              Hillside Av/162 st, Queen, New York 11432,USA <br /> +107938546582
              queens@vincen.com
            </p>
            <a
              href="#_"
              class="relative inline-flex items-center md:px-12 sm:px-6 px-3 md:py-3 py-1 overflow-hidden text-lg font-medium text-white border-2 border-white hover:border-indigo-600 rounded-full duration-500 scroll-smooth group hover:bg-gray-50"
            >
              <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative uppercase">Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vincent;
