import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/contants";
import { addnowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
  const nowPlaying = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addnowPlayingMovies(json.results));
  };

  useEffect(() => {
    nowPlaying();
  }, []);
}

export default useNowPlayingMovies;