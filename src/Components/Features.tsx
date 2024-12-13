import { TiLocationArrow } from "react-icons/ti";
import BentoCard from "./BentoCard";

const Features = () => {
  return (
    <section className="pb-32 bg-black">
      <div className="px-3 md:px-10 container">
        <div className="py-32 px-5 font-circular-web text-blue-50">
          <p className="text-lg "> Into the Metagame Layer</p>
          <p className="text-lg max-w-md opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        <div className="w-full h-96 overflow-hidden rounded-lg md:h-[65vh] relative border border-gray-100 mb-7">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radie<b>n</b>t
              </>
            }
            desc="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </div>

        <div className="h-[135vh] grid grid-cols-2 grid-rows-3 gap-7">
          <div className="row-span-1 md:col-span-2 md:row-span-2">
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
          <div className="row-span-1 ms-32 md:col-span-1 md:ms-0">
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

          <div className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
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
          <div className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>

          <div className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
