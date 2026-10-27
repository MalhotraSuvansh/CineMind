import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    addTvAiringToday: (state, action) => {
      state.TvAiringToday = action.payload;
    },
    addPopularTvShows: (state, action) => {
      state.PopularTvShows = action.payload;
    },
    addTopRatedTvShows: (state, action) => {
      state.TopRatedTvShows = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTvAiringToday,
  addPopularTvShows,
  addTopRatedTvShows,
} = moviesSlice.actions;

export default moviesSlice.reducer;
