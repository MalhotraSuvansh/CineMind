import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addPopularTvShows } from "../Utils/moviesSlice";
import { useEffect } from "react";

const usePopularTvShows = () => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getPopularTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addPopularTvShows(json.results));
  };

  useEffect(() => {
    getPopularTvShows();
  }, []);
};

export default usePopularTvShows;
