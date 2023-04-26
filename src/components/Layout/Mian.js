import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shere/Navbar/Navbar";
import Footer from "../Shere/Footer";

const Mian = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Mian;
