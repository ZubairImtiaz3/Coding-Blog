import React from "react";
import Image from "next/image";
import blogLogo from "../public/blog.png";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <a className="flex items-center mb-4 sm:mb-0">
              <Image
                src={blogLogo}
                className="h-8 w-auto sm:h-10"
                alt="Flowbite Logo"
              />
            </a>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-base font-medium text-gray-500 space-x-4">
            <li>
              <Link href="/">
                <a className="mr-4 hover:text-gray-900 md:mr-6">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="mr-4 hover:text-gray-900 md:mr-6">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="mr-4 hover:text-gray-900 md:mr-6">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="mr-4 hover:text-gray-900 md:mr-6">About</a>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022
          <a href="https://flowbite.com/" className="hover:text-gray-900">
            Dubi™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
}

export default Footer;
