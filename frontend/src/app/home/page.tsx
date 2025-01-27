import Image from "next/image";
import { IN, TW, JP } from "country-flag-icons/react/3x2";
import { ChevronRight } from "lucide-react";

export default function Page() {
  return (
    <div className="h-[120vh] max-h-[calc(100vh-185px)] bg-cover bg-center bg-[url('https://wttwebcmsprod.blob.core.windows.net/articledetailimages/Sreeja-AKULA_WTT-Star-Contender-Doha-2025_Day-2_CA2_0455_0b43b5ec-f6de-4add-954a-31c082d71c0e.png')] bg-black/50 bg-blend-overlay">
      <div className="flex flex-col items-left gap-4 p-4 absolute bottom-0  sm:mx-8">
        <div>
          <span className="bg-gradient-to-r from-sky-400 via-sky-400 to-blue-800 rounded-sm text py-[5px] px-[15px] text-xs text-white">
            WTT Star Contender
          </span>
        </div>
        <div>
          <h2 className="text-4xl text-white font-bold">
            Akula Saves Match Points In Muscat Nail-Biter
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 h-9 box-border">
          <div className="flex gap-2 items-center">
            <span className="rounded-full size-7 overflow-hidden border-sky-400 border-2">
              <Image
                src="https://wttsimfiles.blob.core.windows.net/wtt-media/photos/400px/122718_Headshot_R_AKULA_Sreeja.png"
                width={28}
                height={28}
                className="object-contain object-top"
                alt="WTT logo"
              />
            </span>
            <IN title="India" className="h-5 w-7 border border-white" />
            <span className="text-xs font-bold text-sky-400">
              Sreeja AKULA
              <ChevronRight size={16} className="inline" />
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="rounded-full size-7 overflow-hidden border-sky-400 border-2">
              <Image
                src="https://wttsimfiles.blob.core.windows.net/wtt-media/photos/400px/124572_Headshot_R_HUANG_Yan-Cheng.png"
                width={28}
                height={28}
                className="object-contain object-top"
                alt="WTT logo"
              />
            </span>
            <TW title="Taiwan" className="h-5 w-7 border border-white" />
            <span className="text-xs font-bold text-sky-400">
              HUANG Yan-Cheng
              <ChevronRight size={16} className="inline" />
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <span className="rounded-full size-7 overflow-hidden border-sky-400 border-2">
              <Image
                src="https://wttsimfiles.blob.core.windows.net/wtt-media/photos/400px/135935_Headshot_R_Sakura%20YOKOI.png"
                width={28}
                height={28}
                className="object-contain object-top"
                alt="WTT logo"
              />
            </span>
            <JP title="Japan" className="h-5 w-7 border border-white" />
            <span className="text-xs font-bold text-sky-400">
              Sakura YOKOI
              <ChevronRight size={16} className="inline" />
            </span>
          </div>
        </div>
        <div className="mt-8 mb-4">
          <h3 className="text-sm text-white font-normal">
            The main draw is in full swing at WTT Contender Muscat 2025 , and
            it&apos;s been an eventful start. One player whose performance
            reflected the hectic nature of Tuesday&apos;s opening round drama
            was Sreeja Akula . Seeded at No.6 heading into the week, Akula found
            herself in a nail-biting tussle with N...
          </h3>
        </div>
      </div>
    </div>
  );
}
