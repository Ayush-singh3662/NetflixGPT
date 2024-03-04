import { useState } from "react";

const VideoTitle = ({title, overview}) => {
  const [mouse, setMouse] = useState(false);
  return (
    <div className="pt-[25%] px-4 md:px-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        {mouse && <p onMouseLeave={() => setMouse(false)} className="text-lg w-1/4 py-6">{overview}</p>}
        <div className="my-2">
            <button className="bg-white text-black p-2 md:p-4 px-4 md:px-12 text-xl rounded-lg hover:bg-opacity-80">▶️ Play</button>
            <button onClick={() => setMouse(true)}  className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;