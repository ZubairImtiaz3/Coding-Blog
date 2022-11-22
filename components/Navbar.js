import Image from "next/image";
import blogLogo from "../public/blog.png";
import Link from "next/link";

export default function Example() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <Image className="h-8 w-auto sm:h-10" src={blogLogo} alt="" />
            </a>
          </div>

          <Link
            href="/"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </a>
          </Link>

          <Link
            href="/"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Blog
            </a>
          </Link>

          <Link
            href="/"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact
            </a>
          </Link>

          <Link href="/about">
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </a>
          </Link>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Sign In
              </a>
            </Link>
            <Link
              href="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
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
