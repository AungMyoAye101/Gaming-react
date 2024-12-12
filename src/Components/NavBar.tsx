import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const navLink = ["home", "about", "contact", "nexus"];

const NavBar = () => {
  const [isPlay, setIsPlay] = useState(false);
  const navRef = useRef(null);
  const audioRef = useRef<HTMLAudioElement>(null);

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
      className="fixed inset-x-0 sm:inset-x-6 z-[100] h-16 bg-green-100 top-4 rounded-lg border-none transition-all duration-700"
    >
      <header className="absolute top-1/2 -translate-y-1/2 w-full">
        <nav className="flex justify-between items-center size-full p-4 bg-violet-600">
          <div className="flex items-center gap-2 ">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              title="Products"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden"
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
