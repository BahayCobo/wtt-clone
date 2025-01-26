"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  console.log("pathname", pathname, href);
  return (
    <Link
      className={`shrink-0 hover:underline underline-offset-4 decoration-4 decoration-orange-600 ${
        pathname == href && "underline"
      }`}
      href={href}
    >
      {label}
    </Link>
  );
}
