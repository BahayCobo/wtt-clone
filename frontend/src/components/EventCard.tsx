function CountdownUnit({ number, label }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-6xl md:text-slate-300">{number}</p>
      <p className="font-bold text-md text-rose-500 ">{label}</p>
    </div>
  );
}

function Categories({ player, abbreviation }) {
  return (
    <div className="border-b-[1px] border-slate-700 flex gap-2 justify-between items-center p-2  md:text-slate-200">
      <p className="font-bold text-md">{player}</p>
      <p className="font-bold text-md rounded-full bg-red-500 text-white size-8 flex justify-center items-center shrink-0">
        {abbreviation}
      </p>
    </div>
  );
}

export default function EventCard() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="p-4 flex flex-col gap-5 ml-8">
        <img
          className="w-[280px] aspect-auto"
          src="/events/Singapore_Smash_Logo_2025.png"
          alt=""
        />
        <div className="flex gap-2">
          <img className="aspect-auto w-[40px]" src="/events/sg.png" alt="" />
          <p className="font-bold text-md">30 Jan - 9 Feb 2025</p>
        </div>
        <p className="font-bold text-4xl">Singapore Smash 2025</p>
        <div>
          <p className="font-bold text-lg">Singapore Sports Hub</p>
          <p className="font-bold text-lg">Singapore, Singapore</p>
        </div>
        <button className="bg-white text-black font-bold text-sm border-2 py-2 rounded-md w-fit px-4">
          VISIT SINGAPORESMASH.COM
        </button>
        <div className="flex gap-4 mt-0">
          <button className="bg-white text-black text-sm font-bold border-2 py-2 px-4 rounded-md">
            EVENT INFO
          </button>
          <button className="bg-white text-black text-sm font-bold border-2 p-2 rounded-md">
            TICKETS
          </button>
        </div>
        <p className="font-bold text-xl mt-5 mb-4">
          PRIZE MONEY : USD 1,500,000
        </p>
      </div>
      <div>
        <div className="flex justify-between bg-slate-50 text-slate-800 p-4 rounded-md mx-4 md:bg-slate-800">
          <CountdownUnit number={5} label="Days" />
          <CountdownUnit number={13} label="Hours" />
          <CountdownUnit number={50} label="Minutes" />
          <CountdownUnit number={30} label="Seconds" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  p-4 gap-0 bg-white text-black mx-3 mt-16 md:bg-slate-800">
          <Categories player="Men's Singles" abbreviation="MS" />
          <Categories player="Women's Singles" abbreviation="WS" />
          <Categories player="Men's Doubles" abbreviation="MD" />
          <Categories player="Women's Doubles" abbreviation="WD" />
          <Categories player="Mixed Doubles" abbreviation="XD" />
        </div>
      </div>
    </div>
  );
}
