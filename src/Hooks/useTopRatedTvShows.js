import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTopRatedTvShows } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedTvShows = () => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getTopRatedTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addTopRatedTvShows(json.results));
  };

  useEffect(() => {
    getTopRatedTvShows();
  }, []);
};

export default useTopRatedTvShows;
