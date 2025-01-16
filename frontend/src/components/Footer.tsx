import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col text-white p-8 gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
        <div className="flex flex-col gap-2 pl-1">
          <Image src="/wtt-logo.png" width={140} height={46} alt="WTT logo" />
          <p className="text-xs uppercase tracking-widest">
            ITTF Group
            <span className="pl-1 tracking-tighest">
              ----------------------
            </span>
          </p>
          <div className="flex justify-start items-center gap-4">
            <Image
              src="/wtt-logo-white.png"
              width={48}
              height={48}
              alt="WTT logo"
            />
            <Image
              src="/ittf-small.png"
              width={42}
              height={42}
              alt="ITTF logo"
              className="aspect-auto grayscale"
            />
            <Image
              src="/ittf-foundation.png"
              width={36}
              height={36}
              alt="ITTF Foundation logo"
              className="aspect-auto grayscale"
            />
          </div>
        </div>
        <div className="flex flex-col uppercase text-white gap-4 text-sm font-semibold">
          {[
            ["What is WTT", "#"],
            ["Host a WTT event", "#"],
            ["Brand Partnerships", "#"],
            ["Contact Us", "#"],
          ].map(([title, href]) => (
            <Link key={title} href={href} className="link-primary">
              {title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col uppercase text-white gap-4 text-sm font-semibold">
          {[
            ["Team", "#"],
            ["Careers", "#"],
            ["Technical Documents", "#"],
          ].map(([title, href]) => (
            <Link key={title} href={href} className="link-primary">
              {title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col uppercase text-white gap-4 text-sm font-semibold">
          {[
            ["Terms and Conditions", "#"],
            ["Privacy Notice", "#"],
            ["Media Portal", "#"],
          ].map(([title, href]) => (
            <Link key={title} href={href} className="link-primary">
              {title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link href="https://www.facebook.com" target="_blank">
          <Image
            src="/facebook-logo.svg"
            alt="Facebook logo"
            unoptimized={true}
            className="invert"
            height={26}
            width={26}
          />
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
          <Image
            src="/instagram-logo.svg"
            alt="Instagram logo"
            unoptimized={true}
            className="invert"
            height={24}
            width={24}
          />
        </Link>
        <Link href="https://www.x.com" target="_blank">
          <Image
            src="/twitter-logo.svg"
            alt="Twitter logo"
            unoptimized={true}
            className="invert"
            height={24}
            width={24}
          />
        </Link>
      </div>
      <p className="text-center text-xs">
        Copyright 2024 World Table Tennis Pte. Ltd. All Rights Reserved
      </p>
    </footer>
  );
}
