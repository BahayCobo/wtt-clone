export default function Page() {
  return (
    <main className="flex flex-col gap-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-5 mx-2 lg:mx-10 bg-event-background bg-cover bg-center bg-black/50 bg-blend-overlay rounded-[5px] p-1">
        <div className="p-5">
          <div className="w-[280px] pb-5">
            <img src="./events/Singapore_Smash_Logo_2025.png" />
          </div>
          <div className="text-white flex">
            <img
              src="./events/sg.png"
              className="flex w-10 h-7 rounded-[5px] p-1"
            />
            <span className="text-lg font-semibold"> 30 Jan - 9 Feb 2025 </span>
          </div>
          <div className="text-[#f9f9f9] flex">
            <h2 className="text-[3.5rem] font-bold px-[2px] py-[15px] leading-[3.5rem]">
              Singapore Smash 2025
            </h2>
          </div>
          <div className="text-[#f9f9f9] text-[1.8rem] font-semibold leading-[1.5] mb-5 pt-[5px]">
            <p>
              Singapore Sports Hub{" "}
              <span className="font-bold"> Singapore, Singapore</span>{" "}
            </p>
          </div>
          <div className="py-[10px]">
            <button className="bg-white text-slate-900 cursor-auto px-5 py-[7px] text-base m-[2px] uppercase font-bold border-0 rounded-[5px]">
              VISIT SINGAPORESMASH.COM{" "}
            </button>
          </div>
          <div>
            <button className="bg-white text-slate-900 cursor-auto px-5 py-[7px] text-base m-[2px] uppercase font-bold border-0 rounded-[5px] mr-[25px]">
              EVENT INFO{" "}
            </button>
            <button className="bg-white text-slate-900 cursor-auto px-5 py-[7px] text-base m-[2px] uppercase font-bold border-0 rounded-[5px]">
              TICKETS
            </button>
          </div>
          <div>
            <p className="text-white text-lg font-bold mt-5">
              {" "}
              PRIZE MONEY : USD 85,000{" "}
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-row text-center p-4 justify-between bg-black text-white min-w-96 mt-5 mx-2 rounded-xl">
            <div>
              <p className="text-[56px] font-bold">13</p>
              <p className="text-xs">Days</p>
            </div>
            <div>
              <p className="text-[56px] font-bold">21</p>
              <p className="text-xs">Hours</p>
            </div>
            <div>
              <p className="text-[56px] font-bold">59</p>
              <p className="text-xs">Minutes</p>
            </div>
            <div>
              <p className="text-[56px] font-bold">00</p>
              <p className="text-xs">Seconds</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2  text-white mt-5 px-2">
            <div className=" bg-[rgba(0,0,0,0.7)] mr-[10px]">
              <div className="flex flex-row justify-between mx-3 pt-6 border-b border-[#282828] py-[10px]  px-[15px]">
                <p>Men&apos;s Singles</p>
                <div className="flex justify-center items-center rounded-full bg-red-700 w-[25px] h-[25px] text-center">
                  <span className="text-slate-100 p-1 text-xs ">MS</span>
                </div>
              </div>
            </div>

            <div className=" bg-[rgba(0,0,0,0.7)] mr-[10px]">
              <div className="flex flex-row justify-between mx-3 border-b-[1px] border-[#282828] py-[10px] px-[15px]">
                <p>Women&apos;s Singles</p>
                <div className="flex justify-center items-center rounded-full bg-red-700 w-[25px] h-[25px] text-center">
                  <span className="text-slate-100 p-1 text-xs ">WS</span>
                </div>
              </div>
            </div>
            <div className=" bg-[rgba(0,0,0,0.7)] mr-[10px]">
              <div className="flex flex-row justify-between mx-3 border-b-[1px] border-[#282828]  py-[10px] px-[15px]">
                <p>Men&apos;s Doubles</p>
                <div className="flex justify-center items-center rounded-full bg-red-700 w-[25px] h-[25px] text-center">
                  <span className="text-slate-100 p-1 text-xs ">MD</span>
                </div>
              </div>
            </div>

            <div className=" bg-[rgba(0,0,0,0.7)] mr-[10px]">
              <div className="flex flex-row justify-between mx-3 border-b-[1px] border-[#282828] py-[10px] px-[15px]">
                <p>Women&apos;s Doubles</p>
                <div className="flex justify-center items-center rounded-full bg-red-700 w-[25px] h-[25px] text-center">
                  <span className="text-slate-100 p-1 text-xs ">WD</span>
                </div>
              </div>
            </div>
            <div className=" bg-[rgba(0,0,0,0.7)] mr-[10px]">
              <div className="flex flex-row justify-between mx-3 border-b-[1px] border-[#282828] py-[10px]  px-[15px]">
                <p>Mixed Doubles</p>
                <div className="flex justify-center items-center rounded-full bg-red-700 w-[25px] h-[25px] text-center">
                  <span className=" text-slate-100 p-1 text-xs ">XD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-5 mx-2 lg:mx-10 bg-event-background bg-cover bg-center bg-black/50 bg-blend-overlay rounded-[5px] p-1">
        <div className="p-5">
          <div className="w-[280px] pb-5">
            <img src="./events/Singapore_Smash_Logo_2025.png" />
          </div>
          <div className="text-white flex">
            <img
              src="./events/sg.png"
              className="flex w-10 h-7 rounded-[5px] p-1"
            />
            <span className="text-lg font-semibold"> 30 Jan - 9 Feb 2025 </span>
          </div>
          <div className="text-[#f9f9f9] flex">
            <h2 className="text-[3.5rem] font-bold px-[2px] py-[15px] leading-[3.5rem]">
              Singapore Smash 2025
            </h2>
          </div>
          <div className="text-[#f9f9f9] text-[1.8rem] font-semibold leading-[1.5] mb-5 pt-[5px]">
            <p>
              Singapore Sports Hub{" "}
              <span className="font-bold"> Singapore, Singapore </span>
            </p>
          </div>
          <div className="py-[10px]">
            <button className="bg-white text-slate-900 cursor-auto px-5 py-[7px] text-base m-[2px] uppercase font-bold border-0 rounded-[5px]">
              VISIT SINGAPORESMASH.COM{" "}
            </button>
          </div>
          <div>
            <button className="bg-white text-slate-900 cursor-auto px-5 py-[7px] text-base m-[2px] uppercase font-bold border-0 rounded-[5px] mr-[25px]">
              EVENT INFO{" "}
            </button>
            <button className="bg-white text-slate-900 cursor-auto px-5 py-[7px] text-base m-[2px] uppercase font-bold border-0 rounded-[5px]">
              TICKETS
            </button>
          </div>
          <div>
            <p className="text-white text-lg font-bold mt-5">
              {" "}
              PRIZE MONEY : USD 85,000{" "}
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-row text-center p-4 justify-between bg-black text-white min-w-96 mt-5 mx-2 rounded-xl">
            <div>
              <p className="text-[56px] font-bold">13</p>
              <p className="text-xs">Days</p>
            </div>
            <div>
              <p className="text-[56px] font-bold">21</p>
              <p className="text-xs">Hours</p>
            </div>
            <div>
              <p className="text-[56px] font-bold">59</p>
              <p className="text-xs">Minutes</p>
            </div>
            <div>
              <p className="text-[56px] font-bold">00</p>
              <p className="text-xs">Seconds</p>
            </div>
          </div>

          <div className="flex gap-7 flex-col bg-[rgba(0,0,0,0.7)] text-white mt-5 px-2">
            <div className="flex flex-row justify-between mx-3 pt-6 border-b-[1px] border-[rgba(0,0,0,0.7)] py-[10px]">
              <p>Men&apos;s Singles</p>
              <div className="flex justify-center items-center rounded-full bg-red-700 w-[25px] h-[25px] text-center">
                <span className="text-slate-100 p-1 text-xs ">MS</span>
              </div>
            </div>
            <div className="flex flex-row justify-between mx-3 border-b-[1px] border-[rgba(0,0,0,0.7)] py-[10px]">
              <p>Women&apos;s Singles</p>
              <div className="flex justify-center items-center rounded-full bg-red-700 w-[25px] h-[25px] text-center">
                <span className="text-slate-100 p-1 text-xs ">WS</span>
              </div>
            </div>
            <div className="flex flex-row justify-between mx-3 border-b-[1px] border-[rgba(0,0,0,0.7)] py-[10px]">
              <p>Men&apos;s Doubles</p>
              <div className="flex justify-center items-center rounded-full bg-red-700 w-[25px] h-[25px] text-center">
                <span className="text-slate-100 p-1 text-xs ">MD</span>
              </div>
            </div>
            <div className="flex flex-row justify-between mx-3 border-b-[1px] border-[rgba(0,0,0,0.7)] py-[10px]">
              <p>Women&apos;s Doubles</p>
              <div className="flex justify-center items-center rounded-full bg-red-700 w-[25px] h-[25px] text-center">
                <span className="text-slate-100 p-1 text-xs ">WD</span>
              </div>
            </div>
            <div className="flex flex-row justify-between mx-3 border-b-[1px] border-[rgba(0,0,0,0.7)] py-[10px]">
              <p>Mixed Doubles</p>
              <div className="flex justify-center items-center rounded-full bg-red-700 w-[25px] h-[25px] text-center">
                <span className=" text-slate-100 p-1 text-xs ">XD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
