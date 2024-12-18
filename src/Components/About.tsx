import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimateText from "./AnimateText";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <section className="min-h-screen w-screen relative " id="about">
      <div className="flex flex-col gap-4 items-center    py-6 relative">
        <h2 className="text-sm uppercase font-general">Welcome to Zentry</h2>

        <AnimateText
          title=" Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure "
          containerClass="!text-black text-center"
        />

        <div className="absolute bottom-[-80dvh] text-center text-sm max-w-md font-circular-web font-semibold   left-1/2 -translate-x-1/2 ">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>
      {/* image section */}
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image bg-blue-400">
          <img
            src="/img/Ahri.jpg"
            alt="background image"
            className="absolute left-0 right-0 size-full  object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
