import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Loading from "./Loading";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currIndex, setCurrIndex] = useState(1);
  const [loadedVideo, setLoadedVideo] = useState(0);
  const [hasclicked, sethasclicked] = useState(true);
  const [loading, setLoading] = useState(false);

  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const totalVideos = 4;

  const handleclick = () => {
    sethasclicked(true);
    setCurrIndex((pre) => (pre % totalVideos) + 1);
  };
  const handleVideoLoad = () => {
    setLoadedVideo((pre) => pre + 1);
  };

  useEffect(() => {
    if (loadedVideo === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideo]);

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

  // for video frames scroll animation
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <section className="hero-container" id="home">
      {loading && <Loading />}

      <main id="video-frame" className="hero-container">
        <div>
          {/* mini video player */}

          <div className="mask-clip-path size-56 md:size-64  absolute-center z-40 rounded-lg overflow-hidden cursor-pointer">
            <div
              className=" rounded-lg  origin-center scale-30  transition-all opacity-0 hover:scale-100 hover:opacity-100 duration-500 ease-out cursor-pointer"
              onClick={handleclick}
            >
              <video
                ref={nextVideoRef}
                id="current-video"
                loop
                muted
                src={getVideosSource((currIndex % totalVideos) + 1)}
                onLoadedData={handleVideoLoad}
                className=" size-56 md:size-64 rounded-lg origin-center object-cover object-center scale-100 md:scale-150 "
              />
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
            className="absolute-center invisible  size-56 md:size-64 z-10 object-cover object-center  "
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
        <div className="absolute top-0 left-0 z-40">
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

        <h1 className="special-font heading absolute bottom-5 right-5 z-40 text-blue-100">
          G<b>a</b>ming
        </h1>
      </main>
      <h1 className="special-font heading absolute bottom-5 right-5 -z-10">
        G<b>a</b>ming
      </h1>
    </section>
  );
};

export default Hero;
