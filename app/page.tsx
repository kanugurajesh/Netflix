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
                  <select className="rounded-md py-1 bg-black text-white border border-1 px-1 sm:px-3 border-gray-500">
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
                    className="bg-[#e50914] text-white p-1 px-3 rounded-md hover:bg-[#c11119] sm:px-4"
                  >
                    Sign In
                  </Link>
                </div>
              </nav>
              {/* <div className="text-white flex flex-col justify-center items-center h-[80vh]">
                <div>
                  <h1>Unlimited movies, TV shows and more</h1>
                  <p>Starts at ₹149. Cancel at any time.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Email address"
                      className="rounded-md px-4 "
                    />
                    <Link href="/signin" className="flex items-center justify-center p-2 bg-[#e50914] text-white font-bold pl-5 rounded-md">
                    <span>Get Started</span>
                    <Lottie options={rightArrowOptions} height={40} width={40} />
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="h-screen"></div>
        </div>
      )}
    </div>
  );
}
