import { useSelector } from "react-redux";
import lang from "../utils/languageContants";

const GptSearchBar = () => {
  const language = useSelector(store => store.config.lang);
    return (
      <div className="pt-[8%] flex justify-center">
          <form className="w-1/2 bg-black grid grid-cols-12">
              <input className="p-4 m-4 col-span-9" type="text" placeholder={lang[language].placeholder} />
              <button className="bg-red-700 text-white py-2 px-4 col-span-3 m-4">{lang[language].search}</button>
          </form>
      </div>
    )
  }
  
  export default GptSearchBar;