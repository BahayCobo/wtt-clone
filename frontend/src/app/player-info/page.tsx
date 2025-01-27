import Image from "next/image";
import { CN } from "country-flag-icons/react/3x2";
import { ChevronLeft, Heart } from "lucide-react";
import PlayerVideoCard from "@/components/PlayerVideoCard";

export default function Page() {
  return (
    <>
      <div className="flex justify-between items-center py-[7px] px-[1.5rem] text-white">
        <button className="flex items-center" type="button">
          <ChevronLeft className="inline-block" size={28} />
          <span className="text-lg">Back</span>
        </button>
        <div className="flex items-center gap-1 text-gray-400 hover:scale-105 cursor-pointer">
          <Heart size={10} fill="gray" />
          <p className="text-xxs">Mark as favourite</p>
        </div>
      </div>

      <div className="flex flex-col p-4 md:flex-row w-full gap-12 md:gap-10 items-center max-w-screen-lg mx-auto bg-black text-white mb-12">
        <div className="w-[240px] sm:w-[289px] relative">
          <Image
            src="/wang-chuqin.png"
            height={300}
            width={300}
            sizes="100vw"
            style={{
              height: "auto",
              width: "100%",
            }}
            objectFit="cover"
            alt="Wang Chuqin"
          />
        </div>
        <div className="flex flex-col gap-8 mx-4 md:flex-1">
          <h2 className="text-5xl tracking-tighter font-extrabold">
            Wang Chuqin
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div>
              <p className="text-2xl tracking-tight font-semibold pb-6">
                World Ranking
              </p>
              <div>
                <p className="text-6xl tracking-tighter font-extrabold">#1</p>
                <p className="uppercase text-md">Senior</p>
              </div>
            </div>
            <div className="md:m-auto">
              <div className="grid grid-cols-2 auto-cols-min gap-y-3 place-items-baseline">
                <CN title="China" className="size-5 border rounded-sm" />
                <p className="text-lg font-bold">PH</p>
                <p className="text-lg font-light ">Age</p>
                <p className="text-lg font-bold">24</p>
                <p className="text-lg font-light ">Style</p>
                <p className="text-lg font-bold">Left Hand</p>
              </div>
            </div>
          </div>

          <div className="flex -m-l-3 md:m-0 gap-8 md:gap-4 items-center">
            <div className="flex flex-col">
              <p className="text-sm">Year to Date</p>
              <p className="uppercase font-bold">Win Loss %</p>
            </div>
            <p className="text-5xl tracking-tighter font-semibold">90%</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full">
        <div className="max-w-screen-lg text-black p-4 mx-auto flex flex-col gap-6">
          <h2 className="text-2xl font-bold uppercase">
            Videos Related to Chuqin Wang
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <PlayerVideoCard />
            <PlayerVideoCard />
            <PlayerVideoCard />
            <PlayerVideoCard />
            <PlayerVideoCard />
            <PlayerVideoCard />
            <PlayerVideoCard />
            <PlayerVideoCard />
          </div>
          <h2 className="text-2xl font-bold uppercase border-t-[1px] border-gray-300 pt-4">
            Biography
          </h2>
          <p className="text-md border-b-[1px] border-gray-300 pb-4">
            Biography Not Available
          </p>
        </div>
      </div>
    </>
  );
}
