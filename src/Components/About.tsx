const About = () => {
  return (
    <section className="min-h-screen w-screen " id="about">
      <div className="flex flex-col gap-4 items-center  py-10 relative">
        <h2 className="text-sm uppercase font-general">Welcome to Zentry</h2>
        <h1 className="font-zentry uppercase text-4xl text-center spiceal-font leading-[0.8]">
          Disc<b>o</b>ver the <br />
          world's <br /> largest shared <b>a</b>dventure
        </h1>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center font-circular-web">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>
      {/* image section */}
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img src="/img/about.webp" alt="background image" />
        </div>
      </div>
    </section>
  );
};

export default About;
