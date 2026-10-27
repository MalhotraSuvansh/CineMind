import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTvAiringToday } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useTvAiringToday = () => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getTvAiringToday = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addTvAiringToday(json.results));
  };

  useEffect(() => {
    getTvAiringToday();
  }, []);
};

export default useTvAiringToday;
