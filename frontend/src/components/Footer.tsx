import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col text-white p-8 gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
        <div className="flex flex-col gap-2 pl-1">
          <img
            className="w-[140px]"
            src="https://wttwebcmsprod.blob.core.windows.net/articledetailimages/WTT-Logo-New_d1b87297-2826-41e9-b469-7db1ac940ef2.png"
          />
          <p className="text-xs uppercase tracking-widest">
            ITTF Group
            <span className="tracking-tighest">----------------------</span>
          </p>
          <div className="flex justify-start items-center gap-4">
            <img
              className="h-5 aspect-auto grayscale"
              src="https://wttprod.blob.core.windows.net/images/logo/wtt_w_full_white_logo.png"
            />
            <img
              className="h-9 aspect-auto grayscale brightness-200"
              src="https://wttwebcmsprod.blob.core.windows.net/websitefiles/assets/general/ITTF_small.png"
            />
            <img
              className="h-10 aspect-auto grayscale"
              src="https://wttprod.blob.core.windows.net/images/logo/ittf_found_white.png"
            />
          </div>
        </div>
        <div className="flex flex-col uppercase text-white gap-4 text-sm font-semibold">
          <Link
            href="#"
            className="hover:underline underline-offset-4 decoration-4 decoration-orange-600"
          >
            What is WTT
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-4 decoration-4 decoration-orange-600"
          >
            Host a WTT Event
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-4 decoration-4 decoration-orange-600"
          >
            Brand Partnerships
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-4 decoration-4 decoration-orange-600"
          >
            Contact Us
          </Link>
        </div>
        <ul className="flex flex-col uppercase text-white list-none gap-4 text-sm font-semibold">
          <li>Team</li>
          <li>Careers</li>
          <li>Technical Documents</li>
        </ul>
        <ul className="flex flex-col uppercase text-white list-none gap-4 text-sm font-semibold">
          <li>Terms and Conditions</li>
          <li>Privacy Notice</li>
          <li>Media Portal</li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-4">
        <span>
          <a
            href="https://www.facebook.com/WTT"
            target="_blank"
            title="Visit our WTT facebook page"
          >
            <svg
              className="w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-square"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"
              ></path>
            </svg>
          </a>
        </span>
        <span>
          <a
            href="https://www.instagram.com/wtt"
            target="_blank"
            title="Visit our WTT instagram page"
          >
            <svg
              className="w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>
        </span>
        <span>
          <a
            href="https://twitter.com/WTTGlobal"
            target="_blank"
            title="Visit our official WTT Twitter Page"
          >
            <svg
              className="w-4"
              viewBox="0 0 512 512"
              width="0.89em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </span>
      </div>
      <p className="text-center text-xs">
        Copyright 2024 World Table Tennis Pte. Ltd. All Rights Reserved
      </p>
    </footer>
  );
}
