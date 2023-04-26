import React from "react";
import MenuIcon from "../../../Practice/MenuIcon";
import BannerCoursol from "../BannerCoursol";
import Vincent from "./Vincent";
import ClineReview from "./ClineReview";
import MarqueeAnimation from "../MarqueeAnimation";
import MeetOurTeam from "./MeetOurTeam";

const Home = () => {
  return (
    <div className=" max-w-[2036px] mx-auto">
      <MenuIcon></MenuIcon>
      <BannerCoursol />
      <Vincent />
      <ClineReview />
      <MarqueeAnimation />
      <MeetOurTeam />
    </div>
  );
};

export default Home;
