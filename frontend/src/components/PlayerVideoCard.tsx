export default function PlayerVideoCard() {
  return (
    <div className="w-full shadow-md border-[0.5px] border-gray-200 rounded-sm flex flex-col justify-center overflow-hidden">
      <iframe
        className="w-auto h-[200px]"
        src="https://www.youtube.com/embed/1ISctOqIurk?si=rhKhqk8eLC7p_uFO"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="flex flex-col px-3 py-3 gap-10">
        <p className="font-bold text-sm">
          Wang Chuqin vs Tomokazu Harimoto | MS F | WTT Finals Fukuoka 2024
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
  );
}
