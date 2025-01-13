import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between m-4 mr-7">
      <div className="flex items-center">
        <Image src="/wtt-logo.png" width={140} height={46} alt="WTT logo" />
        <div className="hidden lg:flex pl-8 uppercase text-white gap-8 text-sm font-semibold">
          <Link
            href="#"
            className="hover:underline underline-offset-4 decoration-4 decoration-orange-600"
          >
            News
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-4 decoration-4 decoration-orange-600"
          >
            Videos
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-4 decoration-4 decoration-orange-600"
          >
            Players
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-4 decoration-4 decoration-orange-600"
          >
            Events
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-4 decoration-4 decoration-orange-600"
          >
            Matches
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-4 decoration-4 decoration-orange-600"
          >
            Rankings
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-4 decoration-4 decoration-orange-600"
          >
            Watch Live
          </Link>
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
          type="button"
          className="inline-flex items-center justify-center rounded-md text-white"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="size-8"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
