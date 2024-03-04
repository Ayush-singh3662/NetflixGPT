import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageContants";
import openai from "../utils/openAi";
import { useRef } from "react";
import { OPTIONS } from "../utils/contants";
import { addGptMovies } from "../Redux/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  const searchMovies = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&page=1', OPTIONS);
    const json = await data.json();
    return json.results;
  }
  const handleGptSearch = async () => {
    const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query : " + searchText.current.value + ". Only give me names of 5 movies, comma separated like the example ahead. Example: Dhol, Dhamaal, Hera Pheri, Entertainment, Welcome"
    const result = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(searchText.current.value);
    console.log(result.choices);
    const gptMovies = result?.choices[0]?.message?.content.split(", ");
    const data = gptMovies.map(movie => searchMovies(movie));
    const tmdbResults = await Promise.all(data);
    dispatch(addGptMovies({movieNames: result, movieResults: tmdbResults}));
  }
    return (
      <div className="pt-[8%] flex justify-center">
          <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
              <input ref={searchText} className="p-4 m-4 col-span-9" type="text" placeholder={lang[language].placeholder} />
              <button className="bg-red-700 text-white py-2 px-4 col-span-3 m-4" onClick={handleGptSearch}>{lang[language].search}</button>
          </form>
      </div>
    )
  };
  
  export default GptSearchBar;