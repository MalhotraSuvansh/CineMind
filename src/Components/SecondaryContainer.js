import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies?.nowPlayingMovies) return null;

  return (
    <div className="bg-black w-screen pb-16">
      <div className="mt-0 md:-mt-60 pl-4 md:pl-12 relative z-20">
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies} />
        <MovieList
          title={"TV Shows Airing Today"}
          movies={movies.TvAiringToday}
        />
        <MovieList title={"Popular TV Shows"} movies={movies.PopularTvShows} />
        <MovieList
          title={"Top Rated TV shows"}
          movies={movies.TopRatedTvShows}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
