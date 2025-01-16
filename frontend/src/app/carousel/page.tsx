"use client";

import React from "react";
import Slider from "react-slick";

import "@/slider/slick.css";
import "@/slider/slick-theme.css";

function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    initialSlide: 4,
    cssEase: "linear",
    className: "ajsdhsaj",
    centerMode: true,
    centerPadding: "100px",
    speed: 500,
  };
  return (
    <div className="relative ml-10 mr-10">
      <Slider {...settings} className="">
        <div className="!w-48 h-32 inline-block p-1">
          <div className="size-full bg-green-400 inline-block border-2 border-red-400">
            <h3>1</h3>
          </div>
        </div>
        <div className="!w-48 h-32 inline-block p-1">
          <div className="size-full bg-green-400 inline-block border-2 border-red-400">
            <h3>2</h3>
          </div>
        </div>
        <div className="!w-48 h-32 inline-block p-1">
          <div className="size-full bg-green-400 inline-block border-2 border-red-400">
            <h3>3</h3>
          </div>
        </div>
        <div className="!w-48 h-32 inline-block p-1">
          <div className="size-full bg-green-400 inline-block border-2 border-red-400">
            <h3>4</h3>
          </div>
        </div>
        <div className="!w-48 h-32 inline-block p-1">
          <div className="size-full bg-green-400 inline-block border-2 border-red-400">
            <h3>5</h3>
          </div>
        </div>
        <div className="!w-48 h-32 inline-block p-1">
          <div className="size-full bg-green-400 inline-block border-2 border-red-400">
            <h3>6</h3>
          </div>
        </div>
        <div className="!w-48 h-32 inline-block p-1">
          <div className="size-full bg-green-400 inline-block border-2 border-red-400">
            <h3>7</h3>
          </div>
        </div>
        <div className="!w-48 h-32 inline-block p-1">
          <div className="size-full bg-green-400 inline-block border-2 border-red-400">
            <h3>8</h3>
          </div>
        </div>
        <div className="!w-48 h-32 inline-block p-1">
          <div className="size-full bg-blue-400 inline-block border-2 border-red-400">
            <h3>9</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
