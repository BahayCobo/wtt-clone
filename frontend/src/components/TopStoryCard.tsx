import Image from "next/image";
export default function TopStoryCard({ imageLink, title, category }) {
  return (
    <div className="flex flex-col h-[320px] bg-white hover:scale-105 transition-transform duration-400 my-[10px]">
      <Image
        src={imageLink}
        style={{ width: "100%", height: "200px" }}
        height={200}
        width={400}
        className="mb-[10px] object-cover"
        alt=""
      />
      <div className="px-5">
        <div className="mb-1 ">
          <span className="bg-gradient-to-r from-orange-500  via-orange-700 to-red-500 rounded-sm text py-[5px] px-[15px] text-xs text-white">
            {category}
          </span>
        </div>
        <div className="p5">
          <span className="text-base font-black">{title}</span>
        </div>
      </div>
    </div>
  );
}
