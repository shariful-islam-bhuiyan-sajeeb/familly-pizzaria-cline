import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { HiDevicePhoneMobile, IconName } from "react-icons/hi2";

const Navbar = () => {
  const [logo, setLogo] = useState([]);
  const [card, setCard] = useState([]);
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  useEffect(() => {
    fetch("resturent/resturent-logo.json")
      .then((res) => res.json())
      .then((data) => setLogo(data));
  }, []);

  const menuItem = (
    <>
      <li className="flex">
        <a
          rel="noopener noreferrer"
          href="#banner"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
        >
          Home
        </a>
      </li>
      <li className="flex">
        <a
          rel="noopener noreferrer"
          href="#projects"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
        >
          Menu
        </a>
      </li>
      <li className="flex">
        <a
          rel="noopener noreferrer"
          href="#skill"
          className="flex items-center px-4 -mb-1 border-b-2 md:text-inline "
        >
          Features
        </a>
      </li>
      <li className="flex">
        <a
          href="#aboutMe"
          rel="noopener noreferrer"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
        >
          About
        </a>
      </li>
      <li className="flex">
        <a
          rel="noopener noreferrer"
          href="#contact"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div>
      <header className="  text-white">
        <div>
          <div className="md:hidden ">
            <div className=" flex flex-col items-center hover:text-yellow-600 transform-all">
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
          </div>
          <div className=" flex items-center justify-around md:mt-0 mt-8 sm:px-0 px-2">
            <div className="flex md:flex-row flex-col  items-center hover:text-yellow-600 ">
              <HiDevicePhoneMobile className=" sm:text-6xl text-4xl "></HiDevicePhoneMobile>
              <ul className="sm:text-sm text-xs text-center ">
                <li className="sm:font-semibold font-normal py-1">
                  01791514345
                </li>
                <li className="text-sm text-gray-400 hover:text-yellow-600 ">
                  08:00- 09:00 pm
                </li>
              </ul>
            </div>
            <div className="hidden md:flex">
              <div className=" flex flex-col items-center md: hover:text-yellow-600 transform-all">
                {logo.map((img) => (
                  <img
                    className="md:w-32 sm:w-20 w-12  hover:text-red-700 "
                    src={img.logo}
                    alt=""
                  />
                ))}
                <h2 className="uppercase sm:text-2xl text-md font-serif">
                  Family Pizzeria
                </h2>
              </div>
            </div>
            <div className=" flex md:flex-row flex-col items-center justify-center hover:text-yellow-600">
              {logo.map((img) => (
                <img
                  className="sm:w-20 w-12 text-white mx-auto"
                  src={img.logo1}
                  alt=""
                />
              ))}
              <ul className="text-center sm:text-sm text-xs">
                <li className="md:font-semibold font-normal">$34.00</li>
                <li className="text-sm text-gray-400 hover:text-yellow-600 transform-all">
                  3 items- view cart
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex justify-center md:mt-4 mt-0 py-2 mx-auto">
          <ul className="items-stretch hidden space-x-3 lg:flex upp">
            {menuItem}
          </ul>
        </div>

        {/* <div  >
                    <button onClick={() => setOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </button>
                    {
                        open &&
                        <div className='text-right'>
                            <ul className='menu menu-compact  mt-3 p-2 shadow bg-base-100 text-black  rounded-box w-52 '>
                                <p onClick={() => setOpen(false)}>x</p>
                                <li>{menuItem}</li>
                            </ul>
                        </div>
                    }
                </div> */}

        {/* <div className="md:hidden">
          <button onClick={() => setClose(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {close && (
            <div>
              <ul className="menu menu-compact  mt-3 p-2 shadow bg-base-100 text-black  rounded-box w-52 ">
                <p
                  className="text-2xl hover:text-red-600 p-2  text-right "
                  onClick={() => setClose(false)}
                >
                  X
                </p>
                <li>{menuItem}</li>
              </ul>
            </div>
          )}
        </div> */}
      </header>
    </div>
  );
};

export default Navbar;
