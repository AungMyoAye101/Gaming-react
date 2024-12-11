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
    <div>
      {title.split("<br />").map((l, i) => (
        <div key={i} className="flex items-center gap-1">
          {l.split(" ").map((w, idx) => (
            <span key={idx} className="about-text">
              {w}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimateText;
