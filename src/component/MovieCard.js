import { CDN_IMG_URL } from "../utils/contants";

const MovieCard = ({path}) => {
  if(!path) return  null;
  return (
    <div className=" w-36 md:w-48 pr-2">
        <img alt="Movie card" src={CDN_IMG_URL+path} />
    </div>
  )
}

export default MovieCard;