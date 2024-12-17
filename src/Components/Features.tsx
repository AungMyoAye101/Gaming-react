import BentoCard from "./BentoCard";
import BentoGrid from "./BentoGrid";
import BentoTilt from "./BentoTilt";

const Features = () => {
  return (
    <section className="pb-32 bg-black px-4 md:px-12">
      <div>
        <div className="py-32 px-5 font-circular-web text-blue-50">
          <p className="text-lg "> Into the Metagame Layer</p>
          <p className="text-lg max-w-md opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        <BentoTilt className="w-full h-96 overflow-hidden rounded-lg md:h-[65vh] relative border border-white/20 mb-7">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radie<b>n</b>t
              </>
            }
            desc="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </BentoTilt>
        <BentoGrid />
      </div>
    </section>
  );
};

export default Features;
