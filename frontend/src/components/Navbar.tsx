import Image from "next/image";
import Link from "next/link";
import { NavLink } from "@/components/Link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";

function MobileNavbar() {
  return (
    <>
      <div className="flex items-center">
        <div className="flex flex-col pl-10 pb-4 uppercase text-white gap-4 text-sm font-semibold">
          <NavLink href="/news" label="News" />
          <NavLink href="/videos" label="Videos" />
          <NavLink href="/players" label="Players" />
          <NavLink href="/events" label="Events" />
          <NavLink href="/matches" label="Matches" />
          <NavLink href="/rankings" label="Rankings" />
          <NavLink href="/live" label="Watch Live" />
          <button
            type="button"
            className="bg-zinc-700 p-2 rounded font-bold text-xs text-white uppercase hover:scale-110"
          >
            Sign In
          </button>
          <button
            type="button"
            className="bg-gradient-to-r from-orange-500 to-orange-600 py-2 px-4 rounded font-bold text-xs text-white uppercase hover:scale-110"
          >
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  // reset mobile nav visibility when screen goes larger than lg screen size
  const isLgScreen = useMediaQuery("(min-width: 1024px)");
  useEffect(() => {
    if (isLgScreen) {
      setShowMobileNav(false);
    }
  }, [isLgScreen]);

  // reset mobile nav visibility when route changes
  const pathname = usePathname();
  useEffect(() => {
    setShowMobileNav(false);
  }, [pathname]);

  return (
    <nav className="flex items-center justify-between mx-5">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/wtt-logo.png" width={140} height={46} alt="WTT logo" />
        </Link>
        <div className="hidden lg:flex pl-8 uppercase text-white gap-6 text-sm font-semibold">
          <NavLink href="/news" label="News" />
          <NavLink href="/videos" label="Videos" />
          <NavLink href="/players" label="Players" />
          <NavLink href="/events" label="Events" />
          <NavLink href="/matches" label="Matches" />
          <NavLink href="/rankings" label="Rankings" />
          <NavLink href="/live" label="Watch Live" />
        </div>
      </div>
      <div className="hidden lg:block shrink-0">
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
          type="button"
          className="inline-flex items-center justify-center rounded-md text-white hover:scale-110"
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <Menu size={24} />
        </button>
      </div>
      {showMobileNav && (
        <div
          className={`absolute top-full left-0 bg-black w-full h-fit z-50 lg:hidden ${
            !showMobileNav && "hidden"
          }`}
        >
          <MobileNavbar />
        </div>
      )}
    </nav>
  );
}
