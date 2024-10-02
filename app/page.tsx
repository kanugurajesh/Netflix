'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/loading.json";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
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

  return (
    <div className="">
      {loading ? (
        <div className="h-screen bg-black flex items-center justify-center">
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
      ):(
      <div>
        <div className="h-screen bg-anime bg-cover bg-center relative p-5 py-6">
          <div className="absolute inset-0 bg-black opacity-70"></div>{" "}
          <div className="relative z-10">
            <nav className="flex justify-between items-center">
              <Link
                href="/"
                className="text-[#e50914] text-xl md:text-2xl min-[947px]:text-3xl font-semibold font-[family-name:var(--font-geist-mono)] tracking-wide leading-5"
              >
                STREAM
              </Link>
              <div className="flex gap-2 items-center text-sm font-semibold">
                <select className="rounded-sm py-1 bg-black text-white border border-1 px-1">
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
                  className="bg-[#e50914] text-white p-1 px-3 rounded-sm hover:bg-[#c11119]"
                >
                  Sign in
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <div className="h-screen"></div>
      </div>
      )}
    </div>
  );
}
