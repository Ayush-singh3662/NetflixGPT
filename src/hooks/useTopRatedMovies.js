import { useEffect } from "react"
import { OPTIONS } from "../utils/contants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../Redux/movieSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topMovies = useSelector(store => store.movies.TopRatedMovies);
    const topRatedMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
    useEffect(() => {
        !topMovies && topRatedMovies();
    }, []);
}

export default useTopRatedMovies;