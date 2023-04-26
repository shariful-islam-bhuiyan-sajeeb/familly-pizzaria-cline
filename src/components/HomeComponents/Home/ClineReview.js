import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import review1 from "../../Images/Cline review/Cline banner.jpg";
import review2 from "../../Images/Cline review/review one.jpg";
import review3 from "../../Images/Cline review/review two.jpg";
import review4 from "../../Images/Cline review/rewview three.jpg";
import review5 from "../../Images/Cline review/review four.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="flex flex-col justify-center px-4  w-full lg:mt-20 sm:mt-10 mt-6">
        <Slider {...settings}>
          <div>
            <img
              className=" w-full lg:h-[800px] md:h-[600px] sm:h-[500px] h-[300px] rounded-lg "
              src={review1}
              alt=""
            />
          </div>
          <div>
            <img
              className=" w-full lg:h-[800px] md:h-[600px] sm:h-[500px] h-[300px] rounded-lg "
              src={review2}
              alt=""
            />
          </div>
          <div>
            <img
              className=" w-full lg:h-[800px] md:h-[600px] sm:h-[500px] h-[300px] rounded-lg "
              src={review3}
              alt=""
            />
          </div>
          <div>
            <img
              className=" w-full lg:h-[800px] md:h-[600px] sm:h-[500px] h-[300px] rounded-lg "
              src={review4}
              alt=""
            />
          </div>
          <div>
            <img
              className=" w-full lg:h-[800px] md:h-[600px] sm:h-[500px] h-[300px] rounded-lg "
              src={review5}
              alt=""
            />
          </div>
          {/* <div>
            <img
              className=" w-full lg:h-[800px] md:h-[600px] sm:h-[500px] h-[300px] rounded-lg "
              src={review6}
              alt=""
            />
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
    );
  }
}
