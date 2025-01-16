"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/wtt-logo.png";
import { useEffect, useState } from "react";
import { cn } from "@/utils";
import { useWindowSize } from "usehooks-ts";

const links = [
  {
    name: "News",
    href: "#",
  },
  {
    name: "Players",
    href: "#",
  },
  {
    name: "Events",
    href: "#",
  },
  {
    name: "Matches",
    href: "#",
  },
  {
    name: "Rankings",
    href: "#",
  },
  {
    name: "Watch Live",
    href: "#",
  },
];

export default function Navbar() {
  const [show, setShow] = useState(false);
  const { width = 0 } = useWindowSize();

  useEffect(() => {
    console.log(width);
    if (width > 1024) {
      setShow(false);
    }
  }, [width]);

  return (
    <div>
      <nav className="relative flex items-center justify-between p-4 mr-7 border-b-[1px] border-gray-600">
        <div className="flex items-center">
          <Image
            src={logo}
            width={120}
            height={40}
            alt="WTT logo"
            className="lg:w-[140px]"
          />
          <div className="hidden lg:flex pl-8 uppercase text-white gap-8 text-sm font-semibold">
            {links.map((item) => (
              <Link key={item.name} href={item.href} className="link-primary">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            className="bg-zinc-700 p-2 rounded font-bold text-xs text-white uppercase mr-2"
          >
            Sign In
          </button>
          <button
            type="button"
            className="bg-gradient-to-r from-orange-500 to-orange-600 py-2 px-4 rounded font-bold text-xs text-white uppercase"
          >
            Subscribe
          </button>
        </div>

        <div className="flex lg:hidden">
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="inline-flex items-center justify-center rounded-md text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Menu />
          </button>
        </div>
      </nav>
      <nav
        className={cn(
          "lg:hidden absolute bg-slate-950 w-full z-10 flex flex-col pl-8 py-4 uppercase text-white gap-4 text-sm font-semibold",
          show ? "flex" : "hidden"
        )}
      >
        {links.map((item) => (
          <Link key={item.name} href={item.href} className="link-primary">
            {item.name}
          </Link>
        ))}
        <div className="pt-4">
          <button
            type="button"
            className="bg-zinc-700 p-2 rounded font-bold text-xs text-white uppercase mr-2"
          >
            Sign In
          </button>
          <button
            type="button"
            className="bg-gradient-to-r from-orange-500 to-orange-600 py-2 px-4 rounded font-bold text-xs text-white uppercase"
          >
            Subscribe
          </button>
        </div>
      </nav>
    </div>
  );
}
