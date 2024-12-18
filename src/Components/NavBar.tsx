import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
const navLink = ["home", "about", "story", "contact"];

const NavBar = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { y: currScrollY } = useWindowScroll();

  useEffect(() => {
    if (navRef.current) {
      if (currScrollY === 0) {
        setIsNavVisible(true);
        navRef.current.classList.remove("floating-nav");
      } else if (currScrollY > scrollY) {
        setIsNavVisible(false);
        navRef.current.classList.add("floating-nav");
      } else if (currScrollY < scrollY) {
        setIsNavVisible(true);
        navRef.current.classList.add("floating-nav");
      }
    }

    setScrollY(currScrollY);
  }, [scrollY, currScrollY]);

  // gsap Animation to nav bar
  useEffect(() => {
    gsap.to(navRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const audioIndicator = () => {
    setIsPlay((pre) => !pre);
  };
  useEffect(() => {
    if (audioRef.current) {
      if (isPlay) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlay]);

  return (
    <div
      ref={navRef}
      className="fixed inset-x-0 sm:inset-x-6 z-[100] h-16 top-4 rounded-lg border-none transition-all duration-700"
    >
      <header className="absolute top-1/2 -translate-y-1/2 w-full">
        <nav className="flex justify-between items-center size-full p-4">
          <div className="flex items-center gap-2 ">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              title="Products"
              leftIcon={<TiLocationArrow />}
              containerClass=" md:flex hidden bg-blue-50"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navLink.map((link) => (
                <a
                  href={`#${link.toLowerCase()}`}
                  key={link}
                  className="nav-hover-btn"
                >
                  {link}
                </a>
              ))}
            </div>
            <button
              onClick={audioIndicator}
              className="ml-10 flex items-center gap-1"
            >
              <audio
                ref={audioRef}
                src="/audio/loop.mp3"
                className="hidden"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${isPlay ? "active" : ""}`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
