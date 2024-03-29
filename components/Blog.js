import React, { useState } from "react";
import { useInfiniteQuery } from "react-query";

// Animation Imports
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Blog() {
  const fetchArticles = async (page) => {
    const res = await fetch(
      `https://dev.to/api/articles?&per_page=9?&page=${page}`
    );
    return res.json();
  };

  const [page, setPage] = useState(1);

  const {
    isLoading,
    error,
    data: articles,
    isError,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    "articles",
    ({ pageParam = 1 }) => fetchArticles(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return nextPage;
      },
    }
  );

  if (isLoading)
    return (
      <p className="font-bold text-center text-3xl mt-10 mb-10">Loading...</p>
    );

  if (isError)
    return (
      <p className="font-bold text-center text-3xl mt-10 mb-10">
        Error: {error.message}
      </p>
    );

  return (
    <>
      <div id="blogTop" className="text-center mt-28">
        <AnimationOnScroll animateIn="animate__backInRight" animateOnce={true}>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            Our Latest blogs !
          </h2>
        </AnimationOnScroll>
      </div>

      {isFetching && !isFetchingNextPage ? (
        <p className="font-bold text-center text-xl sm:3xl mt-10 mb-10">
          Fetching New Blogs...
        </p>
      ) : null}

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          duration={3}
          delay={300}
          animateOnce
        >
          <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {articles.pages.map((page) =>
              page.map((article) => (
                <div
                  key={article.id}
                  className="overflow-hidden transition-shadow duration-300 bg-white rounded"
                >
                  <a href={article.url} target="_blank" rel="noreferrer">
                    <img
                      src={article.social_image}
                      className="object-contain w-full h-64 rounded"
                      alt="IMG LOADING"
                    />
                  </a>

                  <div className="py-5">
                    <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                      {article.readable_publish_date}
                    </p>

                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Article"
                      className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                      <p className="text-2xl font-bold leading-[26px]">
                        {article.title}
                      </p>
                    </a>

                    <a href={article.url} target="_blank" rel="noreferrer">
                      <p className="mb-4 text-gray-700">
                        {article.description}
                      </p>
                    </a>

                    <div className="flex space-x-4">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
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
                      </a>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
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
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </AnimationOnScroll>
      </div>

      <div className="btn-container flex justify-center items-center mb-20">
        <button
          onClick={fetchNextPage}
          className=" cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 disabled:bg-indigo-400"
        >
          Load More
        </button>
      </div>
    </>
  );
}

export default Blog;
