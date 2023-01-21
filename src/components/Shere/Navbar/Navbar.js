import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { HiDevicePhoneMobile, IconName } from "react-icons/hi2";

const Navbar = () => {
    const [logo, setLogo] = useState([])
    const [card, setCard] = useState([])

    useEffect(() => {
        fetch('resturent/resturent-logo.json')
            .then(res => res.json())
            .then(data => setLogo(data))
    }, [])


    const menuItem = <>
        <li className="flex">
            <a rel="noopener noreferrer" href="#banner" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</a>
        </li>
        <li className="flex">
            <a rel="noopener noreferrer" href="#projects" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Menu</a>
        </li>
        <li className="flex">
            <a rel="noopener noreferrer" href="#skill" className="flex items-center px-4 -mb-1 border-b-2 md:text-inline ">Features</a>
        </li>
        <li className="flex">
            <a href="#aboutMe" rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">About</a>
        </li>
        <li className="flex">
            <a rel="noopener noreferrer" href="#contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Contact</a>
        </li>

    </>

    return (
        <div>
            <header className="py-6 bg-black text-white">
                <div className='flex items-center justify-around '>
                    <div className='flex items-center hover:text-yellow-600 transform-all gap-2'>
                        <HiDevicePhoneMobile className='sm:text-6xl text-3xl '></HiDevicePhoneMobile>
                        <ul className='sm:text-sm text-xs '>
                            <li className='font-semibold'>01791514345</li>
                            <li className='text-sm text-gray-400 hover:text-yellow-600 transform-all'>08:00- 09:00 pm</li>
                        </ul>
                    </div>
                    <div className=' flex flex-col items-center  hover:text-yellow-600 transform-all'>
                        {logo.map(img =>
                            <img
                                className='sm:w-32 w-20 hover:text-red-700 '
                                src={img.logo} alt="" />
                        )}
                        <h2 className='uppercase sm:text-2xl text-lg'>Family Pizzeria</h2>
                    </div>
                    <div className='flex items-center hover:text-yellow-600 transform-all'>
                        <ul className='text-right sm:text-sm text-xs'>
                            <li className='font-semibold'>$34.00</li>
                            <li className='text-sm text-gray-400 hover:text-yellow-600 transform-all'>3 items- view cart</li>
                        </ul>
                        {logo.map(img =>
                            <img
                                className='w-20 text-white'
                                src={img.logo1} alt="" />
                        )}

                    </div>
                </div>
                <div className="container flex justify-center h-16 mx-auto">
                    <ul className="items-stretch hidden space-x-3 lg:flex upp">
                        {menuItem}
                    </ul>
                </div>
                <div className='dropdown'>
                    <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className='menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 text-black  rounded-box w-52 '>
                        <li>{menuItem}</li>

                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Navbar;

