import { useState } from "react";

const Hero = () => {
  const [currIndex, setCurrIndex] = useState(1);
  const [loadedVideo, setLoadedVideo] = useState(1);
  const totalVideos = 4;

  const handleclick = () => {
    setCurrIndex((pre) => (pre % totalVideos) + 1);
  };

  const getVideosSource = (index: number) => `/videos/hero-${index}.mp4`;

  return (
    <section className="container">
      <div className="absolute-center ">
        <div
          className=" rounded-lg z-10 bg-blue-50 origin-center scale-50  transition-all opacity-80 hover:scale-100 hover:opacity-100 duration-500 ease-out cursor-pointer"
          onClick={handleclick}
        >
          <div>
            <video
              loop
              muted
              src={getVideosSource(currIndex)}
              className="size-64 rounded-lg origin-center object-cover object-center scale-150 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
