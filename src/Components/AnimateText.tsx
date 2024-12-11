import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const AnimateText = ({
  title,
  containerClass,
}: {
  title: any;
  containerClass?: string;
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
      textAnimation.to(
        ".animate-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.02,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col gap-1 text-7xl uppercase leading-[.8] text-white sm:px-32 md:text-[6rem] ${containerClass}`}
    >
      {title.split("<br/>").map((line, i) => {
        <div key={i} className="flex gap-1 items-center w-full ">
          {line.split(" ").map((w, index) => {
            <span
              key={index}
              className="animate-word"
              dangerouslySetInnerHTML={{ __html: w }}
            />;
          })}
        </div>;
      })}
    </div>
  );
};

export default AnimateText;
