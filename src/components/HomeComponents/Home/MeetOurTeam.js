import React from "react";
import img from "../../Images/Team/full banner.jpg";
import img1 from "../../Images/Team/vincent-about-1 (1) 2222222222222.jpg";
import img2 from "../../Images/Team/vincent-about-1 (1)333333333333333.jpg";
import banner from "../../Images/team banner.jpg";

const MeetOurTeam = () => {
  return (
    <div className="lg:mt-16 md:mt-10 mt-8">
      <h1 className="lg:text-6xl md:text-4xl text-2xl text-center text-white font-mono">
        Meet our Team
      </h1>
      <div className="flex items-center justify-center md:gap-x-8 gap-x-3 px-4 lg:mt-20 md:mt-16 sm:mt-10 mt-4">
        <div>
          <img
            className="lg:w-[500px] md:w-[400px] sm:w-[300px] w-[200px] h-full"
            src={img}
            alt=""
          />
          <div className="uppercase sm:text-center text-left lg:mt-6 mt-4 md:text-2xl sm:text-xl text-sm font-serif">
            <h1 className="text-gray-100 sm:font-semibold font-normal ">
              john williams
            </h1>
            <p className="text-gray-300">House chef</p>
          </div>
        </div>
        <div>
          <img
            className="lg:w-[500px] md:w-[400px] sm:w-[300px] w-[200px] h-full"
            src={img1}
            alt=""
          />
          <div className="uppercase text-center lg:mt-6 mt-4 md:text-2xl sm:text-xl text-md font-serif">
            <h1 className="text-gray-100 sm:font-semibold font-normal ">
              sara welch
            </h1>
            <p className="text-gray-300">waitress</p>
          </div>
        </div>
        <div>
          <img
            className="lg:w-[500px] md:w-[400px] sm:w-[300px] w-[200px] h-full"
            src={img2}
            alt=""
          />
          <div className="uppercase text-center lg:mt-6 mt-4 md:text-2xl sm:text-xl text-md font-serif">
            <h1 className="text-gray-100 sm:font-semibold font-normal ">
              edward gray
            </h1>
            <p className="text-gray-300">barman</p>
          </div>
        </div>
      </div>
      <div className="text-center md:my-20 sm:my-14 my-9">
        <a
          href="#_"
          class="relative inline-flex items-center justify-center md:px-10 sm:px-7 px-5 md:py-4 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
        >
          <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span class="relative uppercase md:text-lg text-md">
            view all staff
          </span>
        </a>
      </div>
      <div className="px-3">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default MeetOurTeam;
