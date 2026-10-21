import React from "react";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black via-black/60 to-transparent z-10">
      {/* Movie Title */}
      <h1 className="text-2xl md:text-5xl font-extrabold drop-shadow-lg max-w-2xl">
        {title}
      </h1>

      {/* Movie Overview */}
      <p className="hidden md:inline-block py-6 text-base text-gray-200 w-1/3 leading-relaxed line-clamp-3 drop-shadow-md">
        {overview}
      </p>

      {/* Action Buttons */}
      <div className="my-4 md:m-0 flex items-center gap-4">
        <button className="w-36  h-11 md:h-12 bg-white text-black text-base md:text-lg font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-80 transition duration-200 shadow-md">
          <span className="text-xl leading-none">▶︎</span>
          <span>Play</span>
        </button>

        <button className="hidden md:flex w-36 h-11 md:h-12 bg-gray-500/70 text-white text-base md:text-lg font-bold rounded-lg items-center justify-center gap-2 hover:bg-gray-500/50 transition duration-200 backdrop-blur-sm shadow-md">
          <span className="text-xl leading-none">ⓘ</span>
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};
