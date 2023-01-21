import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shere/Navbar/Navbar';

const Mian = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mian;