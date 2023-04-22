import React from "react";
import MenuIcon from "../../../Practice/MenuIcon";
import BannerCoursol from "../BannerCoursol";
import Vincent from "./Vincent";

const Home = () => {
  return (
    <div className=" max-w-[2036px] mx-auto">
      <MenuIcon></MenuIcon>
      <BannerCoursol />
      <Vincent />
    </div>
  );
};

export default Home;
