import { useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const [currIndex, setCurrIndex] = useState(1);
  const [loadedVideo, setLoadedVideo] = useState(0);
  const [hasclicked, sethasclicked] = useState(false);

  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const totalVideos = 3;

  const handleclick = () => {
    sethasclicked(true);
    setCurrIndex((pre) => (pre % totalVideos) + 1);
  };
  const handleVideoLoad = () => {
    setLoadedVideo((pre) => pre + 1);
  };
  const getVideosSource = (index: number) => `/videos/hero-${index}.mp4`;

  // use gsap animation

  useGSAP(
    () => {
      if (hasclicked) {
        gsap.set("#next-video", {
          visibility: "visible",
        });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            if (nextVideoRef.current) {
              nextVideoRef.current.play();
            }
          },
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currIndex],
      revertOnUpdate: true,
    }
  );

  return (
    <section className="hero-container">
      <div id="video-frame" className="hero-container">
        <div className="mask-clip-path  absolute-center z-40 rounded-lg overflow-hidden cursor-pointer">
          <div
            className=" rounded-lg  origin-center scale-30  transition-all opacity-0 hover:scale-100 hover:opacity-100 duration-500 ease-out cursor-pointer"
            onClick={handleclick}
          >
            <div>
              <video
                ref={nextVideoRef}
                id="current-video"
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
          ref={nextVideoRef}
          id="next-video"
          loop
          muted
          autoPlay
          src={getVideosSource(currIndex)}
          onLoadedData={handleVideoLoad}
          className="absolute-center invisible size-64 z-10 object-cover object-center  "
        />
        <video
          loop
          muted
          autoPlay
          src={getVideosSource(currIndex === totalVideos - 1 ? 1 : currIndex)}
          onLoadedData={handleVideoLoad}
          className="absolute-center z-0 absolute top-0 left-0 object-cover object-center size-full"
        />
      </div>
      {/* Text section */}
      <div className="absolute top-0 left-0 size-full z-30">
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
