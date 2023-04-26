import React, { useEffect, useState } from "react";

const Footer = () => {
  const [logo, setLogo] = useState([]);
  useEffect(() => {
    fetch("resturent/resturent-logo.json")
      .then((res) => res.json())
      .then((data) => setLogo(data));
  }, []);
  return (
    <div className="lg:mt-16">
      <div className=" ">
        <div className=" flex flex-col items-center hover:text-yellow-600 transform">
          {logo.map((img) => (
            <img
              className="md:w-32 w-20   hover:text-red-700 "
              src={img.logo}
              alt=""
            />
          ))}
          <h2 className="uppercase sm:text-2xl text-xl font-serif">
            Family Pizzeria
          </h2>
        </div>
        <p className="text-center font-mono md:py-6 py-3">
          +01791514345.{" "}
          <span className="text-gray-400">08:00 am- 11:00 pm</span>
        </p>
      </div>
      <div>
        <ul className="uppercase  flex md:flex-row flex-col items-center justify-center sm:text-inline text-block lg:gap-x-10 md:gap-x-7 sm:gap-x-4 gap-x-2 md:py-8 sm:py-6 py-4 font-mono md:text-2xl text-md md:px-0 px-3 font-semibold text-center">
          <li>Home</li>
          <li>Menu</li>
          <li>Feature</li>

          <li>About</li>
          <li>Blog</li>
          <li>contact</li>
        </ul>
        <p className="text-center md:text-xl text-md py-4 font-serif text-gray-500 md:px-0 px-3">
          Restaurent Mafia. All right reserve support.
          sharifulislambhuiyan93@gamil.com
        </p>
        <div class="w-full h-[1px] bg-gray-500 my-10"></div>
      </div>
    </div>
  );
};

export default Footer;
