// src/Components/Browse.js
import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTvAiringToday from "../Hooks/useTvAiringToday";
import usePopularTvShows from "../Hooks/usePopularTvShows";
import useTopRatedTvShows from "../Hooks/useTopRatedTvShows";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTvAiringToday();
  usePopularTvShows();
  useTopRatedTvShows();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
