import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { OPTIONS } from "../utils/contants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popular = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }
    useEffect(() => {
        popular();
    }, []);
}

export default usePopularMovies;