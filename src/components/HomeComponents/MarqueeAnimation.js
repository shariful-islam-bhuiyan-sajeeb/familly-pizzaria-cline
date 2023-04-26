import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../Images/Marquee Logo/1000_F_452340572_3tgt5GgW6D9Y6Crp2gZkjlaqz5WKXZVS.jpg";
import img2 from "../Images/Marquee Logo/3.jpg";
import img3 from "../Images/Marquee Logo/4.png";
import img4 from "../Images/Marquee Logo/95e84bea1a35588752585f5340ec0a58.jpg";
import img5 from "../Images/Marquee Logo/Nescafe.png";
import img6 from "../Images/Marquee Logo/Restaurant-Logo-Designs.jpg";
import img7 from "../Images/Marquee Logo/cooper.jpg";
import img8 from "../Images/Marquee Logo/depositphotos_406326112-stock-illustration-restaurant-simple-logo-design-vector.jpg";
import img9 from "../Images/Marquee Logo/restaurant.jpg";
import img10 from "../Images/Marquee Logo/street-food-typography-design-logo-can-be-used-for-restaurant-cafe-seafood-logos-on-a-dark-background-free-vector.jpg";
import img11 from "../Images/Marquee Logo/images.png";
const MarqueeAnimation = () => {
  return (
    <div>
      <div className="mx-4 lg:mt-16 md:mt-8 mt-6">
        <Marquee
          gradientColor
          speed={60}
          pauseOnHover
          className="rounded-lg  duration-300"
        >
          <div className="flex md:gap-x-16 gap-x-10">
            <div className="border border-gray-600 rounded-lg">
              <img
                className="  w-full lg:h-[250px] md:h-[200px] sm:h-[150px] h-[120px] "
                src={img1}
                alt=""
              />
            </div>
            <div className="border border-gray-600 rounded-lg ">
              <img
                className="w-full lg:h-[250px] md:h-[200px] sm:h-[150px] h-[120px]"
                src={img2}
                alt=""
              />
            </div>
            <div className="border border-gray-600 rounded-lg ">
              <img
                className="w-full lg:h-[250px] md:h-[200px] sm:h-[150px] h-[120px]"
                src={img3}
                alt=""
              />
            </div>
            <div className="border border-gray-600 rounded-lg ">
              <img
                className="w-full lg:h-[250px] md:h-[200px] sm:h-[150px] h-[120px]"
                src={img4}
                alt=""
              />
            </div>
            <div className="border border-gray-600 rounded-lg ">
              <img
                className="w-full lg:h-[250px] md:h-[200px] sm:h-[150px] h-[120px]"
                src={img5}
                alt=""
              />
            </div>
            <div className="border border-gray-600 rounded-lg ">
              <img
                className="w-full lg:h-[250px] md:h-[200px] sm:h-[150px] h-[120px]"
                src={img6}
                alt=""
              />
            </div>
            <div className="border border-gray-600 rounded-lg ">
              <img
                className="w-full lg:h-[250px] md:h-[200px] sm:h-[150px] h-[120px]"
                src={img7}
                alt=""
              />
            </div>
            <div className="border border-gray-600 rounded-lg ">
              <img
                className="w-full lg:h-[250px] md:h-[200px] sm:h-[150px] h-[120px]"
                src={img8}
                alt=""
              />
            </div>
            <div className="border border-gray-600 rounded-lg ">
              <img
                className="w-full lg:h-[250px] md:h-[200px] sm:h-[150px] h-[120px]"
                src={img9}
                alt=""
              />
            </div>
            <div className="border border-gray-600 rounded-lg ">
              <img
                className="w-full lg:h-[250px] md:h-[200px] sm:h-[150px] h-[120px]"
                src={img10}
                alt=""
              />
            </div>
            <div className="border border-gray-600 rounded-lg ">
              <img
                className="w-full lg:h-[250px] md:h-[200px] sm:h-[150px] h-[120px]"
                src={img11}
                alt=""
              />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeAnimation;
