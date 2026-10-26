import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 py-3 select-none">
      {/* Row Title */}
      <h1 className="text-lg md:text-2xl font-bold text-white py-3 drop-shadow-md">
        {title}
      </h1>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-scroll scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
