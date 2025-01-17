export default function Page() {
  return (
    <div className="bg-white">
      <div className=" flex gap-2 text-center text-xs p-2 pl-10 font-semibold border-b-2 md:text-lg pr-20  xl:text:2xl  ">
        {/* <button className="md:hidden lg:hidden">
            < </button> */}
        <p className="hover:text-blue-300 ">Overview</p>
        <p className="hover:text-blue-300 ">Matches</p>
        <p className="hover:text-blue-300 ">Draws</p>
        <p className="hover:text-blue-300 ">Groups</p>
        <p className="hover:text-blue-300 ">Player List</p>
        <p className="hover:text-blue-300 ">Event Info</p>
        {/* <button className="md:hidden lg:hidden"> > </button> */}
      </div>
      <div className="font-bold text-3xl pl-5 pt-10 pb-10">
        <p>WHO IS PLAYING</p>
      </div>

      <div className="text-xl gap-10 md:flex lg:flex ">
        <div className="flex flex-col gap-4 border-dotted border-r-4">
          <p className="tab pl-20 pr-20 pt-5 pb-5 text-center hover:text-white hover:bg-gray-500 ">
            Men&apos;s Singles
          </p>
          <p className="tab p-15 pt-5 pb-5 text-center hover:text-white hover:bg-gray-500 ">
            Women&apos;s Singles
          </p>
          <p className="tab p-15 pt-5 pb-5 text-center hover:text-white hover:bg-gray-500 ">
            Men&apos;s Doubles
          </p>
          <p className="tab p-15 pt-5 pb-5 text-center hover:text-white hover:bg-gray-500 ">
            Womens Doubles
          </p>
          <p className="tab p-15 pt-5 pb-5 text-center hover:text-white hover:bg-gray-500 ">
            Mixed Doubles
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div id="mens" className="tab-content">
            <div className="flex justify-between p-5 border-2 drop-shadow">
              <div className="font-bold text-lg ">
                <div className="cursor-pointer	">
                  <img
                    alt="Avatar"
                    className="rounded-full size-20 p-0.5 object-cover object-top"
                    src="./event/123980_HEADSHOT_R_Tomokazu_HARIMOTO.png"
                  />
                </div>
                <p> Tomokazu</p>
                <p>HARIMOTO</p>
                <div className="flex align-middle gap-2">
                  <img
                    className="w-8 h-6"
                    src="https://documentstore.ittf.com/websitefiles/assets/flags_normal/jp.png"
                  />
                  JPN
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p>WR</p>
                <p className="text-5xl font-bold">#3</p>
                <div className="flex gap-2">
                  <p className="font-bold">4405 </p>
                  <p>Points </p>
                </div>
                <div className="flex gap-2 pt-2 text-end">
                  <p>Seed</p>
                  <p className="font-bold">#1</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between p-5 border-2 drop-shadow">
              <div className="font-bold text-lg ">
                <div className="cursor-pointer	">
                  <img
                    alt="Avatar"
                    className="rounded-full size-20 p-0.5 object-cover object-top"
                    src="./event/107028_Headshot_R_Dimitrij_OVTCHAROV.png"
                  />
                </div>
                <p> Dimitrij</p>
                <p>OVTCHAROV</p>
                <div className="flex align-middle gap-2">
                  <img
                    className="w-8 h-6"
                    src="https://documentstore.ittf.com/websitefiles/assets/flags_normal/de.png"
                  />
                  GER
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p>WR</p>
                <p className="text-5xl font-bold">#17</p>
                <div className="flex gap-2">
                  <p className="font-bold">1420 </p>
                  <p>Points </p>
                </div>
                <div className="flex gap-2 pt-2 text-end">
                  <p>Seed</p>
                  <p className="font-bold">#2</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between p-5 border-2 drop-shadow">
              <div className="font-bold text-lg ">
                <div className="cursor-pointer	">
                  <img
                    alt="Avatar"
                    className="rounded-full size-20 p-0.5 object-cover object-top"
                    src="./event/112092_Headshot_R_ARUNA_Quadri.png"
                  />
                </div>
                <p> Quadri</p>
                <p>ARUNA</p>
                <div className="flex align-middle gap-2">
                  <img
                    className="w-8 h-6"
                    src="https://documentstore.ittf.com/websitefiles/assets/flags_normal/ng.png"
                  />
                  NGR
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p>WR</p>
                <p className="text-5xl font-bold">#21</p>
                <div className="flex gap-2">
                  <p className="font-bold">1185 </p>
                  <p>Points </p>
                </div>
                <div className="flex gap-2 pt-2 text-end">
                  <p>Seed</p>
                  <p className="font-bold">#3</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between p-5 border-2 drop-shadow">
              <div className="font-bold text-lg ">
                <div className="cursor-pointer	">
                  <img
                    alt="Avatar"
                    className="rounded-full size-20 p-0.5 object-cover object-top"
                    src="./event/Headshot_R_XIANG_Peng.png"
                  />
                </div>
                <p> XIANG</p>
                <p>Peng</p>
                <div className="flex align-middle gap-2">
                  <img
                    className="w-8 h-6"
                    src="https://documentstore.ittf.com/websitefiles/assets/flags_normal/cn.png"
                  />
                  CHN
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p>WR</p>
                <p className="text-5xl font-bold">#22</p>
                <div className="flex gap-2">
                  <p className="font-bold">1139 </p>
                  <p>Points </p>
                </div>
                <div className="flex gap-2 pt-2 text-end">
                  <p>Seed</p>
                  <p className="font-bold">#4</p>
                </div>
              </div>
            </div>
          </div>
          <div id="womens" className="tab-content hidden">
            <div className="flex justify-between p-5 border-2 drop-shadow">
              <div className="font-bold text-lg ">
                <div className="cursor-pointer">
                  <img
                    alt="Avatar"
                    className="rounded-full size-20 p-0.5 object-cover object-top"
                    src="./event/133405_Headshot_R_ODO_Satsuki.png"
                  />
                </div>
                <p> Satsuki</p>
                <p>ODO</p>
                <div className="flex align-middle gap-2">
                  <img
                    className="w-8 h-6"
                    src="https://documentstore.ittf.com/websitefiles/assets/flags_normal/jp.png"
                  />
                  JPN
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p>WR</p>
                <p className="text-5xl font-bold">#7</p>
                <div className="flex gap-2">
                  <p className="font-bold">2518 </p>
                  <p>Points </p>
                </div>
                <div className="flex gap-2 pt-2 text-end">
                  <p>Seed</p>
                  <p className="font-bold">#1</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between p-5 border-2 drop-shadow">
              <div className="font-bold text-lg ">
                <div className="cursor-pointer	">
                  <img
                    alt="Avatar"
                    className="rounded-full size-20 p-0.5 object-cover object-top"
                    src="./event/117820_Headshot_R_ HIRANO_Miu.png"
                  />
                </div>
                <p> Miu</p>
                <p>HIRANO</p>
                <div className="flex align-middle gap-2">
                  <img
                    className="w-8 h-6"
                    src="https://documentstore.ittf.com/websitefiles/assets/flags_normal/jp.png"
                  />
                  JPN
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p>WR</p>
                <p className="text-5xl font-bold">#12</p>
                <div className="flex gap-2">
                  <p className="font-bold">1753 </p>
                  <p>Points </p>
                </div>
                <div className="flex gap-2 pt-2 text-end">
                  <p>Seed</p>
                  <p className="font-bold">#2</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between p-5 border-2 drop-shadow">
              <div className="font-bold text-lg ">
                <div className="cursor-pointer">
                  <img
                    alt="Avatar"
                    className="rounded-full size-20 p-0.5 object-cover object-top"
                    src="./event/121623_Headshot_R_TAKAHASHI_Bruna.png"
                  />
                </div>
                <p> Bruna</p>
                <p>TAKAHASHI</p>
                <div className="flex align-middle gap-2">
                  <img
                    className="w-8 h-6"
                    src="https://documentstore.ittf.com/websitefiles/assets/flags_normal/br.png"
                  />
                  BRA
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p>WR</p>
                <p className="text-5xl font-bold">#18</p>
                <div className="flex gap-2">
                  <p className="font-bold">1167 </p>
                  <p>Points </p>
                </div>
                <div className="flex gap-2 pt-2 text-end">
                  <p>Seed</p>
                  <p className="font-bold">#3</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between p-5 border-2 drop-shadow">
              <div className="font-bold text-lg ">
                <div className="cursor-pointer	">
                  <img
                    alt="Avatar"
                    className="rounded-full size-20 p-0.5 object-cover object-top"
                    src="./event/131100_HEADSHOT_R_PAVADE_Prithika.png"
                  />
                </div>
                <p> Prithika</p>
                <p>PAVADE</p>
                <div className="flex align-middle gap-2">
                  <img
                    className="w-8 h-6"
                    src="https://documentstore.ittf.com/websitefiles/assets/flags_normal/fr.png"
                  />
                  FRA
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p>WR</p>
                <p className="text-5xl font-bold">#19</p>
                <div className="flex gap-2">
                  <p className="font-bold">1162 </p>
                  <p>Points </p>
                </div>
                <div className="flex gap-2 pt-2 text-end">
                  <p>Seed</p>
                  <p className="font-bold">#4</p>
                </div>
              </div>
            </div>
          </div>

          <div id="mensd" className="tab-content hidden">
            <div className="flex p-5 gap-20 justify-between border-2 drop-shadow">
              <div className="flex gap-2 font-bold text-lg ">
                <div>
                  <img
                    alt="Avatar"
                    className="rounded-full size-20 p-0.5 object-cover object-top"
                    src="https://wttsimfiles.blob.core.windows.net/wtt-media/photos/400px/112620_Headshot_R_WONG_Chun_Ting.png"
                  />
                  <p>WONG Chun</p>
                  <p>Ting</p>
                  <div className="flex align-middle gap-2">
                    <img
                      className="w-8 h-6"
                      src="https://documentstore.ittf.com/websitefiles/assets/flags_normal/hkg.png"
                    />
                    HKG
                  </div>
                </div>
                <div>
                  <img
                    alt="Avatar"
                    className="rounded-full size-20 p-0.5 object-cover object-top"
                    src="https://wttsimfiles.blob.core.windows.net/wtt-media/photos/400px/115543_Headshot_R_ DOO_Hoi_Kem.png"
                  />
                  <p>DOO Hoi</p>
                  <p>Kem</p>
                  <div className="flex align-middle gap-2">
                    <img
                      className="w-8 h-6"
                      src="https://documentstore.ittf.com/websitefiles/assets/flags_normal/hkg.png"
                    />
                    HKG
                  </div>
                </div>
                <div className="flex flex-col pt-12 items-end">
                  <div className="flex gap-1">
                    <p className="">CPR</p>
                    <p>19</p>
                  </div>
                  <div className="flex gap-2 text-end">
                    <p>Seed</p>
                    <p className="font-bold">#1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
