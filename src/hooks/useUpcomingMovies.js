import { useDispatch } from "react-redux"
import { OPTIONS } from "../utils/contants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }
    useEffect(() => {
        upcomingMovies();
    }, []);
}

export default useUpcomingMovies;