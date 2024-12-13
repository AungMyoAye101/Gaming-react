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

        <div>
          <BentoCard src="videos/feature-1.mp4" />
        </div>
      </div>
    </section>
  );
};

export default Features;
