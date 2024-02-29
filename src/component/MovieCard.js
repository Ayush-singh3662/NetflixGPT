import { CDN_IMG_URL } from "../utils/contants";

const MovieCard = ({path}) => {
  return (
    <div className="w-48 pr-2">
        <img alt="Movie card" src={CDN_IMG_URL+path} />
    </div>
  )
}

export default MovieCard;