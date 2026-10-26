import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMoviesVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS,
      );
      const json = await data.json();
      console.log("Trailer API response:", json);

      if (!json?.results || json.results.length === 0) return;

      const filterData = json.results.filter(
        (video) => video.type === "Trailer",
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];

      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Failed to fetch trailer:", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMoviesVideos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
};

export default useMovieTrailer;
