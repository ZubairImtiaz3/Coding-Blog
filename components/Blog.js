import React, { useState } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import Link from "next/link";

// Animation
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Blog() {
  //State for next,prev Page
  const [page, setpage] = useState(1);

  const fetchArticles = (page = 1) =>
    fetch("https://dev.to/api/articles?&per_page=9?&page=" + page).then((res) =>
      res.json()
    );

  const {
    isLoading,
    error,
    data: articles,
    isError,
    isFetching,
    isPreviousData,
  } = useQuery(["articles", page], () => fetchArticles(page), {
    keepPreviousData: true,
  });

  return (
    <>
      <div>
        <div id="blogTop" className="text-center mt-28">
          <AnimationOnScroll
            animateIn="animate__backInRight"
            duration={1.5}
            animateOnce
          >
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Our Latest blogs !
            </h2>
          </AnimationOnScroll>
        </div>

        <div>
          {isFetching ? (
            <p className="font-bold text-center text-3xl mt-10 mb-10">
              Fetching New Blogs...
            </p>
          ) : null}
        </div>

        <div>
          {isLoading ? (
            <p className="font-bold text-center text-3xl mt-10 mb-10">
              Loading...
            </p>
          ) : isError ? (
            <p className="font-bold text-center text-3xl mt-10 mb-10">
              Error: {error.message}
            </p>
          ) : (
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                duration={3}
                delay={500}
                animateOnce
              >
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                  {articles.map((article) => (
                    <>
                      <div
                        key={article.id}
                        className="overflow-hidden transition-shadow duration-300 bg-white rounded"
                      >
                        <Link
                          href={article.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Article"
                        >
                          <Image
                            src={article.social_image}
                            className="object-contain w-full h-64 rounded"
                            alt="IMG LOADING"
                          />
                        </Link>
                        <div className="py-5">
                          <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                            {article.readable_publish_date}
                          </p>
                          <Link
                            href={article.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Article"
                            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                          >
                            <p className="text-2xl font-bold leading-[26px]">
                              {article.title}
                            </p>
                          </Link>
                          <p className="mb-4 text-gray-700">
                            {article.description}
                          </p>
                          <div className="flex space-x-4">
                            <Link
                              href="/"
                              aria-label="Likes"
                              className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                            >
                              <div className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                >
                                  <polyline
                                    points="6 23 1 23 1 12 6 12"
                                    fill="none"
                                    strokeMiterlimit="10"
                                  />
                                  <path
                                    d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit="10"
                                  />
                                </svg>
                              </div>
                              <p className="font-semibold">
                                {article.public_reactions_count}
                              </p>
                            </Link>
                            <Link
                              href="/"
                              aria-label="Comments"
                              className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                            >
                              <div className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                >
                                  <polyline
                                    points="23 5 23 18 19 18 19 22 13 18 12 18"
                                    fill="none"
                                    strokeMiterlimit="10"
                                  />
                                  <polygon
                                    points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit="10"
                                  />
                                </svg>
                              </div>
                              <p className="font-semibold">
                                {article.comments_count}
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </AnimationOnScroll>
            </div>
          )}
        </div>

        <div className="nav btn-container flex justify-between items-center max-w-[90%] mx-auto mb-20">
          <div>
            <a
              href="#blogTop"
              onClick={() => setpage((prevState) => Math.max(prevState - 1, 0))}
            >
              <button
                disabled={page === 1}
                className=" cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 disabled:bg-indigo-400"
              >
                Prev Page
              </button>
            </a>
          </div>

          <div>
            <a
              href="#blogTop"
              onClick={() => setpage((prevState) => prevState + 1)}
              className="cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Next Page
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
