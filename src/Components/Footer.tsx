import { FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-violet-300 text-blue-50 w-screen py-6">
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="font-general text-sm ">
          &copy; Nova 2024. All rights reserved
        </p>
        <div className="flex gap-2 items-center justify-center text-2xl">
          <FaGithub />
          <FaFacebook />
          <FaTwitch />
          <FaTwitter />
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
