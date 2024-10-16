"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/loading.json";
import rightArrow from "../lotties/right-arrow.json";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  // The below code is used for splash screen
  useEffect(() => {
    setTimeout(() => {
      if (loading) {
        toast.dismiss();
        toast.success("Enjoy the platform");
      }
      setLoading(false);
    }, 3000);
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const rightArrowOptions = {
    loop: true,
    autoplay: true,
    animationData: rightArrow,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="">
      <Toaster />
      {loading ? (
        <div className="h-screen bg-black flex items-center justify-center">
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
      ) : (
        <div>
          <div className="h-screen bg-anime bg-cover bg-center relative p-5 py-6 sm:p-7 min-[956px]:px-20">
            <div className="absolute inset-0 bg-black opacity-70"></div>{" "}
            <div className="relative z-10">
              <nav className="flex justify-between items-center">
                <Link
                  href="/"
                  className="text-[#e50914] text-2xl sm:text-3xl min-[947px]:text-3xl font-black font-[family-name:var(--font-geist-mono)] min-[956px]:text-[40px]"
                >
                  NETFLIX
                </Link>
                <div className="flex gap-3 items-center text-sm sm:text-base font-semibold">
                  <select className="rounded-md py-2 bg-black text-white border border-1 px-1 sm:px-3 border-gray-500">
                    <option value="Home" className="bg-white text-black">
                      Home
                    </option>
                    <option value="TVShows" className="bg-white text-black">
                      TV Shows
                    </option>
                    <option value="Movies" className="bg-white text-black">
                      Movies
                    </option>
                    <option value="Latest" className="bg-white text-black">
                      Latest
                    </option>
                  </select>
                  <Link
                    href="/signin"
                    className="bg-[#e50914] text-white p-2 px-4 rounded-md hover:bg-[#c11119] sm:px-4"
                  >
                    Sign In
                  </Link>
                </div>
              </nav>
              <div className="text-white flex flex-col justify-center items-center h-[80vh]">
                <div className="text-center">
                  <h1 className="text-[2rem] text-center font-[700] mb-[0.5rem]">
                    Unlimited movies, TV shows and more
                  </h1>
                  <p className="text-[1rem] font-[400] mb-[1rem]">
                    Starts at ₹149. Cancel at any time.
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  <h3 className="text-center text-[1rem] font-[400] leading-[1.5]">
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </h3>
                  <div className="flex gap-2 flex-col min-[600px]:flex-row max-[599px]:w-full">
                    {/* <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Email address"
                        className="rounded-md text-[1rem] leading-[1.5] p-3 px-4 bg-black border border-1 border-white opacity-60"
                      />
                      <label htmlFor=""></label>
                    </div> */}
                    <div className="relative w-full">
                      <input
                        type="text"
                        id="email"
                        required
                        className="peer w-full p-4 bg-black text-white border border-white rounded-md opacity-60 focus:outline-none"
                        placeholder=" "
                        aria-required
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 top-1/2 -translate-y-[15px] text-white opacity-60 text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-60 peer-focus:top-[14px] peer-focus:text-sm peer-focus:opacity-100"
                      >
                        Email address
                      </label>
                    </div>

                    <Link
                      href="/signin"
                      className="flex items-center p-1 bg-[#e50914] text-white font-semibold pl-5 rounded-md w-40 mx-auto"
                    >
                      <span className="text-[1.125rem]">Get Started</span>
                      <Lottie
                        options={rightArrowOptions}
                        height={40}
                        width={40}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-screen"></div>
        </div>
      )}
    </div>
  );
}
