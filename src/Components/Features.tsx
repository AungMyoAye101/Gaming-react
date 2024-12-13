import BentoCard from "./BentoCard";

const Features = () => {
  return (
    <section className="py-10 bg-black">
      <div className="px-4 md:px-10 container">
        <div className="py-32 px-4 font-circular-web text-blue-50">
          <p className="text-lg "> Into the Metagame Layer</p>
          <p className="text-lg max-w-md opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>
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
    </section>
  );
};

export default Features;
