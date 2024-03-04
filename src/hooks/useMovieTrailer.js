import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../utils/contants";
import { addTrailerVideos } from "../Redux/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const movieTrailer = useSelector(store => store.movies.trailervideos);
    const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideos(trailer));
  };

  useEffect(() => {
    !movieTrailer && getMovieVideos();
  }, []);
}

export default useMovieTrailer;