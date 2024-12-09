import { useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Hero = () => {
  const [currIndex, setCurrIndex] = useState(1);
  const [loadedVideo, setLoadedVideo] = useState(0);
  const totalVideos = 4;

  const handleclick = () => {
    setCurrIndex((pre) => (pre % totalVideos) + 1);
  };
  const handleVideoLoad = () => {
    setLoadedVideo((pre) => pre + 1);
  };
  const getVideosSource = (index: number) => `/videos/hero-${index}.mp4`;

  return (
    <section className="hero-container">
      <div id="video-frame" className="hero-container">
        <div className="mask-clip-path  absolute-center z-20 rounded-lg overflow-hidden cursor-pointer">
          <div
            className=" rounded-lg z-10 bg-blue-50 origin-center scale-50  transition-all opacity-0 hover:scale-100 hover:opacity-100 duration-500 ease-out cursor-pointer"
            onClick={handleclick}
          >
            <div>
              <video
                loop
                muted
                src={getVideosSource((currIndex % totalVideos) + 1)}
                onLoadedData={handleVideoLoad}
                className="size-64 rounded-lg origin-center object-cover object-center scale-150 "
              />
            </div>
          </div>
        </div>
        <video
          loop
          muted
          autoPlay
          src={getVideosSource(currIndex)}
          onLoadedData={handleVideoLoad}
          className="absolute-center invisible size-64 z-20 object-cover object-center  "
        />
        <video
          loop
          muted
          autoPlay
          src={getVideosSource(currIndex)}
          onLoadedData={handleVideoLoad}
          className="absolute-center absolute top-0 left-0 object-cover object-center size-full"
        />
      </div>
      {/* Text section */}
      <div className="absolute top-0 left-0 size-full">
        <div className="mt-24 px-4 sm:px-10 ">
          <h1 className="special-font heading text-blue-100">
            Redefi<b>n</b>e
          </h1>
          <p className=" font-robert-regular text-blue-100 mb-5">
            Enter the Metagame Layer <br /> Unleash the Play Economy
          </p>
          <Button
            title="Watch Trailer"
            containerClass="bg-yellow-300"
            leftIcon={<TiLocationArrow />}
          />
        </div>
      </div>

      <h1 className="special-font heading absolute bottom-5 right-5 z-20 text-blue-100">
        G<b>a</b>ming
      </h1>
      <h1 className="special-font heading absolute bottom-5 right-5 z-10">
        G<b>a</b>ming
      </h1>
    </section>
  );
};

export default Hero;
