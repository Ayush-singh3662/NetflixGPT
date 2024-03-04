import { useDispatch, useSelector } from "react-redux"
import { OPTIONS } from "../utils/contants";
import { addUpcomingMovies } from "../Redux/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcoming = useSelector(store => store.movies.UpcomingMovies);
    const upcomingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }
    useEffect(() => {
        !upcoming && upcomingMovies();
    }, []);
}

export default useUpcomingMovies;