import { BACKGROUND } from "../utils/contants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
            <img src={BACKGROUND} alt="background logo" />
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch;