import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../utils/contants";
import { addnowPlayingMovies } from "../Redux/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
  const dispatch = useDispatch();
  const nowPlaying = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS);
    const json = await data.json();
    dispatch(addnowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && nowPlaying();
  }, []);
}

export default useNowPlayingMovies;