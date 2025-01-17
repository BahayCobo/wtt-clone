export default function Page() {
  return (
    <main className="bg-white py-5 px-3">
      {/* Title */}
      <div className="text-3xl font-extrabold">WORLD TABLE TENNIS PLAYERS</div>
      {/* Start Filters */}
      <div className="bg-stone-300 rounded flex flex-col md:flex-row">
        {/* Start Searchbox */}
        <form className="max-w-lg pl-4 py-3 flex-1">
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by Player Name or Flag ..."
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-orange-600 rounded-e-lg"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    // stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
        {/* End Searchbox */}
        {/* Start Gender filter */}
        <div className="flex-1 ml-7 my-auto pb-4 md:pb-0 flex gap-2">
          <span>
            <input type="radio" defaultChecked /> Men{" "}
          </span>
          <span>
            <input type="radio" /> Women
          </span>
        </div>
        {/* End Gender filter */}
      </div>
      {/* End Filters */}

      {/* Start Player List */}
      <div>
        <table className="table-fixed w-full mt-8 ml-5">
          <thead>
            <tr className="uppercase text-sm border-b-2 border-stone-100">
              <th className="w-1 pb-3">#</th>
              <th className="w-12">Player Name</th>
              <th className="w-12">&nbsp;</th>
              <th className="w-12">World Ranking</th>
              <th className="w-12">Gender</th>
              <th className="w-12">Age</th>
              <th className="w-12">Favourite</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className=" py-4">1</td>
              <td className="py-4">WANG Chuqin</td>
              <td className="py-4">China</td>
              <td className="py-4">1</td>
              <td className="py-4">M</td>
              <td className="py-4">24</td>
              <td className="py-4">11976</td>
            </tr>
            <tr>
              <td className="py-4">2</td>
              <td className="py-4">Felix LEBRUN</td>
              <td className="py-4">France</td>
              <td className="py-4">4</td>
              <td className="py-4">M</td>
              <td className="py-4">18</td>
              <td className="py-4">4621</td>
            </tr>
            <tr>
              <td className="py-4">3</td>
              <td className="py-4">Alexis LEBRUN</td>
              <td className="py-4">France</td>
              <td className="py-4">14</td>
              <td className="py-4">M</td>
              <td className="py-4">21</td>
              <td className="py-4">3540</td>
            </tr>
            <tr>
              <td className="py-4">4</td>
              <td className="py-4">LIN Yun-Ju</td>
              <td className="py-4">Chinese Taipei</td>
              <td className="py-4">12</td>
              <td className="py-4">M</td>
              <td className="py-4">23</td>
              <td className="py-4">3482</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
