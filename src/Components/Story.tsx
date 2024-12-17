import { useRef } from "react";
import AnimateText from "./AnimateText";
import RoundedConer from "./RoundedConer";
import gsap from "gsap";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef<HTMLImageElement | null>(null);

  const handleMouseMove = (e: any) => {
    if (!frameRef.current) return;
    const { clientX, clientY } = e;

    const rect = frameRef.current.getBoundingClientRect();
    const xPosition = clientX - rect.left;
    const yPosition = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPosition - centerY) / centerY) * -10;

    const rotateY = ((xPosition - centerX) / centerX) * 10;

    gsap.to(frameRef.current, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMoveLeave = () => {
    if (frameRef.current) {
      gsap.to(frameRef.current, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black  ">
      <div className="flex flex-col gap-4 items-center py-10 pb-24">
        <p className="text-xs md:text-sm font-general text-blue-50 uppercase ">
          {" "}
          the multiversal ip world
        </p>

        <div className="size-full relative">
          <AnimateText
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="text-blue-50 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container ">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  src="/img/entrance.webp"
                  alt="entrace"
                  className="object-contain"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMoveLeave}
                  onMouseLeave={handleMoveLeave}
                  onMouseUp={handleMoveLeave}
                />
                <RoundedConer />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center md:justify-end -mt:60 md:-mt-64 md:me-44">
          <div className="flex h-full w-fit flex-col items-center md:items-start gap-4">
            <p className="text-violet-50 mt-3 max-w-sm text-center md:text-start font-circular-web">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>
            <Button title="discover prologue" containerClass="bg-violet-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
