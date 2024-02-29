import { useEffect } from "react"
import { OPTIONS } from "../utils/contants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
    useEffect(() => {
        topRatedMovies();
    }, []);
}

export default useTopRatedMovies;