"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import "./styles.css";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", duration: 20 },
    [Autoplay({ delay: 2000 })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <button
        className="px-2 py-1 bg-blue-400 mr-1 embla__prev"
        onClick={scrollPrev}
      >
        Prev
      </button>
      <button
        className="px-2 py-1 bg-blue-400 embla__next"
        onClick={scrollNext}
      >
        Next
      </button>

      <div className="embla p-4 overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-1 sm:-ml-2 md:-ml-3">
          <div className="p-1 sm:p-2 md:p-3 bg-transparent flex-shrink-0 flex-grow-0 basis-auto min-w-0 max-w-full">
            <div className="h-32 w-48 border border-red-400">Slide 1</div>
          </div>
          <div className="p-1 sm:p-2 md:p-3 bg-transparent flex-shrink-0 flex-grow-0 basis-auto min-w-0 max-w-full">
            <div className="h-32 w-48 border border-red-400">Slide 2</div>
          </div>
          <div className="p-1 sm:p-2 md:p-3 bg-transparent flex-shrink-0 flex-grow-0 basis-auto min-w-0 max-w-full">
            <div className="h-32 w-48 border border-red-400">Slide 3</div>
          </div>
          <div className="p-1 sm:p-2 md:p-3 bg-transparent flex-shrink-0 flex-grow-0 basis-auto min-w-0 max-w-full">
            <div className="h-32 w-48 border border-red-400">Slide 4</div>
          </div>
          <div className="p-1 sm:p-2 md:p-3 bg-transparent flex-shrink-0 flex-grow-0 basis-auto min-w-0 max-w-full">
            <div className="h-32 w-48 border border-red-400">Slide 5</div>
          </div>
          <div className="p-1 sm:p-2 md:p-3 bg-transparent flex-shrink-0 flex-grow-0 basis-auto min-w-0 max-w-full">
            <div className="h-32 w-48 border border-red-400">Slide 6</div>
          </div>
          <div className="p-1 sm:p-2 md:p-3 bg-transparent flex-shrink-0 flex-grow-0 basis-auto min-w-0 max-w-full">
            <div className="h-32 w-48 border border-red-400">Slide 7</div>
          </div>
          <div className="p-1 sm:p-2 md:p-3 bg-transparent flex-shrink-0 flex-grow-0 basis-auto min-w-0 max-w-full">
            <div className="h-32 w-48 border border-red-400">Slide 8</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-white">
      <h1>Hello Carousel</h1>
      <EmblaCarousel />
    </div>
  );
}
