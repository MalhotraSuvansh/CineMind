import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const [showVideo, setShowVideo] = useState(false);

  useMovieTrailer(movieId);

  useEffect(() => {
    setShowVideo(false);
  }, [trailerVideo?.key]);

  if (!trailerVideo?.key) return null;

  const handleVideoLoad = () => {
    setTimeout(() => {
      setShowVideo(true);
    }, 3000);
  };

  return (
    <div className="relative w-screen aspect-video overflow-hidden bg-black">
      <iframe
        onLoad={handleVideoLoad}
        className={`w-screen aspect-video scale-125 pointer-events-none select-none transition-opacity duration-1000 ${
          showVideo ? "opacity-100" : "opacity-0"
        }`}
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&disablekb=1&modestbranding=1&rel=0&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      {/* Netflix Bottom Vignette: smoothly blends trailer into the black movie section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
    </div>
  );
};

export default VideoBackground;
