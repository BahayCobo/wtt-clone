"use client";

import HeaderMatchCard from "@/components/HeaderMatchCard";
import {
  ChevronLeft,
  ChevronRight,
  CircleChevronUp,
  CircleChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { QA } from "country-flag-icons/react/3x2";

import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", duration: 60 },
    [Autoplay({ delay: 3000 })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex gap-1 items-center">
      <button
        className="bg-orange-600 size-5 shrink-0 rounded-full flex items-center justify-center"
        type="button"
        onClick={scrollPrev}
      >
        <ChevronLeft size={18} />
      </button>
      <div className="p-1 overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-1">
          <HeaderMatchCard />
          <HeaderMatchCard />
          <HeaderMatchCard />
          <HeaderMatchCard />
          <HeaderMatchCard />
          <HeaderMatchCard />
          <HeaderMatchCard />
          <HeaderMatchCard />
          <HeaderMatchCard />
          <HeaderMatchCard />
          <HeaderMatchCard />
          <HeaderMatchCard />
          <HeaderMatchCard />
          <HeaderMatchCard />
          <HeaderMatchCard />
          <HeaderMatchCard />
        </div>
      </div>
      <button
        className="bg-orange-600 shrink-0 size-5 rounded-full flex items-center justify-center"
        type="button"
        onClick={scrollNext}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export default function Header() {
  const [show, setShow] = useState(true);

  return (
    <header className="p-3 flex flex-col gap-2">
      <div className="md:pl-8 flex gap-2 items-center justify-center md:justify-start">
        <QA title="Qatar" className="size-5" />

        <span className="text-white text-xs font-bold">
          WTT Star Contender Doha 2025
        </span>
        <button
          className="text-xs text-white flex items-center underline underline-offset-2 gap-1 font-semibold bg-transparent"
          onClick={() => setShow(!show)}
        >
          <span>{show ? "Hide Scores" : "Show Scores"}</span>
          {show ? (
            <CircleChevronUp size={12} />
          ) : (
            <CircleChevronDown size={12} />
          )}
        </button>
        <Link
          href="/matches"
          className="text-xs text-white underline underline-offset-2 font-semibold"
        >
          More
        </Link>
      </div>
      {show && <EmblaCarousel />}
      <Navbar />
    </header>
  );
}
