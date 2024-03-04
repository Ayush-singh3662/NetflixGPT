import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { OPTIONS } from "../utils/contants";
import { addPopularMovies } from "../Redux/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.PopularMovies);
    const popular = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }
    useEffect(() => {
        !popularMovies && popular();
    }, []);
}

export default usePopularMovies;