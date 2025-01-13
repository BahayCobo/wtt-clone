import { JP, CN } from "country-flag-icons/react/3x2";
import { Trophy } from "lucide-react";

export default function HeaderMatchCard() {
  return (
    <div className="flex w-72 p-2 rounded bg-white flex-col">
      <p className="text-xs font-semibold">Men&apos;s Doubles - Final</p>
      <p className="text-xxs">Lusail Sports Arena | Table 1</p>
      <div className="grid grid-cols-2 grid-rows-2 p-2 pl-1 pb-0 gap-y-2">
        <span className="flex items-center gap-2">
          <span className="size-3"></span>
          <span className="border border-slate-300">
            <JP className="w-3 l-2" />
          </span>
          <p className="text-xxs text-ellipsis overflow-hidden uppercase">
            Harimoto/Matsushima
          </p>
        </span>
        <div className="flex items-center gap-1 pl-2">
          <p className="text-sm pr-1">2</p>
          <p className="text-xxs tabular-nums w-3 text-center">13</p>
          <p className="text-xxs tabular-nums w-3 text-center">11</p>
          <p className="text-xxs tabular-nums w-3 text-center">8</p>
          <p className="text-xxs tabular-nums w-3 text-center">13</p>
          <p className="text-xxs tabular-nums w-3 text-center">6</p>
        </div>
        <span className="flex items-center gap-2">
          <Trophy size={12} color="#FFD700" />
          <CN className="w-3 l-2" />
          <p className="text-xxs text-ellipsis overflow-hidden uppercase">
            Xu/Xiang
          </p>
        </span>
        <div className="flex items-center gap-1 pl-2">
          <p className="text-sm pr-1 text-blue-600">3</p>
          <p className="text-xxs tabular-nums w-3 text-center">15</p>
          <p className="text-xxs tabular-nums w-3 text-center">4</p>
          <p className="text-xxs tabular-nums w-3 text-center">11</p>
          <p className="text-xxs tabular-nums w-3 text-center">13</p>
          <p className="text-xxs tabular-nums w-3 text-center">11</p>
        </div>
      </div>
    </div>
  );
}
