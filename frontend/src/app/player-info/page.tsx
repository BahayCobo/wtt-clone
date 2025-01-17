import Image from "next/image";
import { CN } from "country-flag-icons/react/3x2";
import { ChevronLeft } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="flex justify-between items-center py-[7px] px-[1.5rem] text-white">
        {/* <p className="text-lg"><span className="font-bold">< </span>Back</p> */}
        <button className="flex items-center" type="button">
          <ChevronLeft className="inline-block" size={28} />
          <span className="text-xl">Back</span>
        </button>
        <div className="flex items-center gap-1 text-gray-400">
          <svg
            className="size-3"
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
            ></path>
          </svg>
          <p className="text-xxs">Mark as favourite</p>
        </div>
      </div>

      <div className="flex flex-col p-4 md:flex-row w-full gap-12 md:gap-10 items-center max-w-screen-lg mx-auto bg-black text-white">
        <div className="max-w-[240px] sm:max-w-[289px]">
          <Image
            src="/wang-chuqin.png"
            width={140}
            height={46}
            className="object-contain object-top w-full"
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
                <p className="text-xl font-bold">PH</p>
                <p className="font-light text-xl">Age</p>
                <p className="text-xl font-bold">24</p>
                <p className="font-light text-xl">Style</p>
                <p className="text-xl font-bold">Left Hand</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col -m-l-3 md:m-0">
            <p className="text-sm">Year to Date</p>
            <p className="uppercase font-bold">Win Loss %</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full">
        <div className="max-w-screen-lg text-black p-4 mx-auto">
          <h2 className="text-2xl font-bold mb-3 uppercase">
            Videos Related to Chuqin Wang
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="w-full shadow-md border-[0.5px] border-gray-200 rounded-sm flex flex-col justify-center overflow-hidden">
              <iframe
                className="w-auto h-[200px]"
                src="https://www.youtube.com/embed/1ISctOqIurk?si=rhKhqk8eLC7p_uFO"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <div className="flex flex-col px-3 py-3 gap-10">
                <p className="font-bold text-sm">
                  Wang Chuqin vs Tomokazu Harimoto | MS F | WTT Finals Fukuoka
                  2024
                </p>
                <div className="flex justify-between text-gray-400">
                  <div className="flex items-center gap-1">
                    <svg
                      className="size-3"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                      ></path>
                    </svg>
                    <p className="text-xxs">Mark as favourite</p>
                  </div>
                  <p className="text-xxs">2 months ago</p>
                </div>
              </div>
            </div>
            <div className="w-full shadow-md border-[0.5px] border-gray-200 rounded-sm flex flex-col justify-center overflow-hidden">
              <iframe
                className="w-auto h-[200px]"
                src="https://www.youtube.com/embed/1ISctOqIurk?si=rhKhqk8eLC7p_uFO"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <div className="flex flex-col px-3 py-3 gap-10">
                <p className="font-bold text-sm">
                  Wang Chuqin vs Tomokazu Harimoto | MS F | WTT Finals Fukuoka
                  2024
                </p>
                <div className="flex justify-between text-gray-400">
                  <div className="flex items-center gap-1">
                    <svg
                      className="size-3"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                      ></path>
                    </svg>
                    <p className="text-xxs">Mark as favourite</p>
                  </div>
                  <p className="text-xxs">2 months ago</p>
                </div>
              </div>
            </div>
            <div className="w-full shadow-md border-[0.5px] border-gray-200 rounded-sm flex flex-col justify-center overflow-hidden">
              <iframe
                className="w-auto h-[200px]"
                src="https://www.youtube.com/embed/1ISctOqIurk?si=rhKhqk8eLC7p_uFO"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <div className="flex flex-col px-3 py-3 gap-10">
                <p className="font-bold text-sm">
                  Wang Chuqin vs Tomokazu Harimoto | MS F | WTT Finals Fukuoka
                  2024
                </p>
                <div className="flex justify-between text-gray-400">
                  <div className="flex items-center gap-1">
                    <svg
                      className="size-3"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                      ></path>
                    </svg>
                    <p className="text-xxs">Mark as favourite</p>
                  </div>
                  <p className="text-xxs">2 months ago</p>
                </div>
              </div>
            </div>
            <div className="w-full shadow-md border-[0.5px] border-gray-200 rounded-sm flex flex-col justify-center overflow-hidden">
              <iframe
                className="w-auto h-[200px]"
                src="https://www.youtube.com/embed/1ISctOqIurk?si=rhKhqk8eLC7p_uFO"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <div className="flex flex-col px-3 py-3 gap-10">
                <p className="font-bold text-sm">
                  Wang Chuqin vs Tomokazu Harimoto | MS F | WTT Finals Fukuoka
                  2024
                </p>
                <div className="flex justify-between text-gray-400">
                  <div className="flex items-center gap-1">
                    <svg
                      className="size-3"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                      ></path>
                    </svg>
                    <p className="text-xxs">Mark as favourite</p>
                  </div>
                  <p className="text-xxs">2 months ago</p>
                </div>
              </div>
            </div>
            <div className="w-full shadow-md border-[0.5px] border-gray-200 rounded-sm flex flex-col justify-center overflow-hidden">
              <iframe
                className="w-auto h-[200px]"
                src="https://www.youtube.com/embed/1ISctOqIurk?si=rhKhqk8eLC7p_uFO"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <div className="flex flex-col px-3 py-3 gap-10">
                <p className="font-bold text-sm">
                  Wang Chuqin vs Tomokazu Harimoto | MS F | WTT Finals Fukuoka
                  2024
                </p>
                <div className="flex justify-between text-gray-400">
                  <div className="flex items-center gap-1">
                    <svg
                      className="size-3"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                      ></path>
                    </svg>
                    <p className="text-xxs">Mark as favourite</p>
                  </div>
                  <p className="text-xxs">2 months ago</p>
                </div>
              </div>
            </div>
            <div className="w-full shadow-md border-[0.5px] border-gray-200 rounded-sm flex flex-col justify-center overflow-hidden">
              <iframe
                className="w-auto h-[200px]"
                src="https://www.youtube.com/embed/1ISctOqIurk?si=rhKhqk8eLC7p_uFO"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <div className="flex flex-col px-3 py-3 gap-10">
                <p className="font-bold text-sm">
                  Wang Chuqin vs Tomokazu Harimoto | MS F | WTT Finals Fukuoka
                  2024
                </p>
                <div className="flex justify-between text-gray-400">
                  <div className="flex items-center gap-1">
                    <svg
                      className="size-3"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                      ></path>
                    </svg>
                    <p className="text-xxs">Mark as favourite</p>
                  </div>
                  <p className="text-xxs">2 months ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
