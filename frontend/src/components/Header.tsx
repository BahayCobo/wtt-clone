"use client";

import HeaderMatchCard from "@/components/HeaderMatchCard";
import { ChevronLeft, ChevronRight, CircleChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import { US, QA, JP, CY, CN } from "country-flag-icons/react/3x2";

import Slider from "react-slick";

import "@/slider/slick.css";
import "@/slider/slick-theme.css";

export default function Header() {
  const settings = {
    dots: false,
    draggable: true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    initialSlide: 0,
    // fade: true,
    cssEase: "linear",
  };
  return (
    <header className="flex flex-col gap-2">
      <div className="md:pl-8 flex gap-2 items-center justify-center md:justify-start">
        <QA title="Qatar" className="size-5" />
        <JP title="Qatar" className="size-5" />
        <CY title="Qatar" className="size-5" />
        <US title="Qatar" className="size-5" />
        <CN title="Qatar" className="size-5" />
        <span className="text-white text-xs font-bold">
          WTT Star Contender Doha 2025
        </span>
        <a className="text-xs text-white flex items-center underline gap-1 font-semibold">
          Hide Scores
          <CircleChevronUp size={12} />
        </a>
        <a className="text-xs text-white underline font-semibold">More</a>
      </div>

      <div className="relative">
        <Slider {...settings}>
          <HeaderMatchCard pos={1} />
          <HeaderMatchCard pos={2} />
          <HeaderMatchCard pos={3} />
          <HeaderMatchCard pos={4} />
          <HeaderMatchCard pos={5} />
          <HeaderMatchCard pos={6} />
          <HeaderMatchCard pos={7} />
          <HeaderMatchCard pos={8} />
          <HeaderMatchCard pos={9} />
          <HeaderMatchCard pos={10} />
        </Slider>
      </div>

      {/* <div className="flex items-center gap-2">
        <button
          className="opacity-25 bg-orange-500 size-6 rounded-full"
          type="button"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="overflow-hidden w-full">
          <div className="w-fit flex text-xs gap-2"></div>
        </div>
        <button className="bg-orange-500 size-6 rounded-full" type="button">
          <ChevronRight size={24} />
        </button>
      </div> */}
      <Navbar />
    </header>
  );
}
