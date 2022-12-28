import React, { useState } from "react";
import Image from "next/image";
import blogLogo from "../public/blog.png";
import Link from "next/link";

import { Link as Link1 } from "react-scroll";

export default function Example() {
  //StickyNavbar
  const [navFix, setnavFix] = useState(false);

  const navCheckToFix = () => {
    if (window.scrollY > 0) {
      setnavFix(true);
    } else {
      setnavFix(false);
    }
  };

  window.addEventListener("scroll", navCheckToFix);

  const navStyle = "mx-auto px-4 sm:px-6";

  const spacerNavFix = <div className="h-[114px]"></div>;

  return (
    <>
      {navFix && spacerNavFix}
      <div
        className={
          navFix
            ? `fixed w-full bg-gray-100 top-0 z-50 ${navStyle}`
            : `${navStyle}`
        }
      >
        <div
          className={
            navFix
              ? "flex items-center justify-between py-2 md:justify-start md:space-x-10"
              : "flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
          }
        >
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Image className="h-8 w-auto sm:h-10" src={blogLogo} alt="" />
            </Link>
          </div>

          <Link href="/">
            <a className="cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </a>
          </Link>

          <Link1
            spy={true}
            smooth={true}
            offset={-90}
            duration={1000}
            to="blogTop"
            className="cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Blog
          </Link1>

          <Link href="/contact">
            <a className="cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900">
              Contact
            </a>
          </Link>

          <Link href="/about">
            <a className="cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </a>
          </Link>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link href="#">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Sign In
              </a>
            </Link>
            <Link href="#">
              <a className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
