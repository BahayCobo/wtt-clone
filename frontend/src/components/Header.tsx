import HeaderMatchCard from "@/components/HeaderMatchCard";
import { ChevronLeft, ChevronRight, CircleChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import { QA } from "country-flag-icons/react/3x2";

export default function Header() {
  return (
    <header className="p-3 flex flex-col gap-2">
      <div className="md:pl-8 flex gap-2 items-center justify-center md:justify-start">
        <QA title="Qatar" className="size-5" />

        <span className="text-white text-xs font-bold">
          WTT Star Contender Doha 2025
        </span>
        <a className="text-xs text-white flex items-center underline gap-1 font-semibold">
          Hide Scores
          <CircleChevronUp size={12} />
        </a>
        <a className="text-xs text-white underline font-semibold">More</a>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="opacity-25 bg-orange-500 size-6 rounded-full"
          type="button"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="overflow-hidden w-full">
          <div className="w-fit flex text-xs gap-2">
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
        <button className="bg-orange-500 size-6 rounded-full" type="button">
          <ChevronRight size={24} />
        </button>
      </div>
      <Navbar />
    </header>
  );
}
