import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isActive, setIsactive] = useState(false);
  const clickHandler = () => {
    setIsactive((prev) => !prev);
  };
  return (
    <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 dark:bg-gray-900">
      <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <button>
            <div className="flex items-center space-x-2">
              <h2 className="text-black dark:text-white font-bold text-2xl text-bold font-lale  ">
                شرکت
              </h2>
            </div>
          </button>
          <div className="hidden lg:block">
            <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <Link to="/">خانه</Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex lg:items-center gap-x-2">
            <Link to="/signup">
              <button className="flex font-vazir items-center text-black dark:text-white justify-center px-6 py-2.5 font-semibold">
                ثبت نام
              </button>
            </Link>

            <Link to="/login">
              <button className="flex font-vazir items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                ورود
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center lg:hidden">
            <button
              onClick={clickHandler}
              className="focus:outline-none text-slate-200 dark:text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        className={` ${
          isActive ? "show" : "hidden"
        } fixed transition-all delay-1000 top-0 backdrop-blur-3xl w-full z-10  h-full flex  items-center flex-col gap-11`}>
        <svg
          onClick={() => {
            setIsactive(false);
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 mt-10 cursor-pointer">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <div className="">
          <ul className="p-6 text-white">
            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
              <Link to="/" className="text-xl font-lale">
                خانه
              </Link>
            </li>
          </ul>
        </div>
        <div className=" lg:flex items-center gap-x-2">
          <Link to="/signup">
            <button className="flex font-vazir items-center text-black  justify-center px-6 py-2.5 font-semibold">
              ثبت نام
            </button>
          </Link>

          <Link to="/login">
            <button className="flex font-vazir items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
              ورود
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
