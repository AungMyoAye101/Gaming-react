import { TiLocationArrow } from "react-icons/ti";
import BentoCard from "./BentoCard";

const BentoGrid = () => {
  return (
    <section className="grid grid-cols-2 gap-4 md:gap-7 h-[135vh] grid-rows-3 w-full  ">
      <div className=" special-font  bento-tilt_1 row-span-1 md:row-span-2 md:col-span-1">
        <BentoCard
          src="videos/feature-2.mp4"
          title={
            <>
              sig<b>m</b>a
            </>
          }
          desc="An anime and gaming-inspired NFT collection - the IP primed for expansion."
        />
      </div>

      <div className="bento-tilt_1 ms-12 md:ms-0 row-span-1 md:col-span-1">
        <BentoCard
          src="videos/feature-3.mp4"
          title={
            <>
              n<b>e</b>xus
            </>
          }
          desc="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
        />
      </div>
      <div className="bento-tilt_1 me-12 md:me-0  md:col-span-1">
        <BentoCard
          src="videos/feature-4.mp4"
          title={
            <>
              az<b>u</b>l
            </>
          }
          desc="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
        />
      </div>
      <div className=" bento-tilt_2 ">
        <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
          <h1 className="bento-title special-font max-w-64 text-black">
            M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
          </h1>

          <TiLocationArrow className="m-5 scale-[5] self-end" />
        </div>
      </div>

      <div className=" bento-tilt_2  ">
        <video
          src="videos/feature-5.mp4"
          loop
          muted
          autoPlay
          className="size-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default BentoGrid;
