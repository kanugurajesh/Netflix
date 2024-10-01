export default function Home() {
  return (
    <div className="">
      <div className="h-screen bg-anime bg-cover bg-center relative p-5 py-6">
        <div className="absolute inset-0 bg-black opacity-70"></div>{" "}
        <div className="relative z-10">
          <nav className="flex justify-between items-center">
            <div className="text-[#e50914] text-xl font-semibold font-[family-name:var(--font-geist-sans)] tracking-wide">
              STREAM
            </div>
            <div className="flex gap-2 items-center">
              <select className="rounded-md py-1 bg-black text-white border border-1">
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
              <button className="bg-[#e50914] text-white p-1 px-2 rounded-md font-semibold">
                Sign in
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
