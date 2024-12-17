import { FC } from "react";

interface BentoCardProps {
  src: string;
  title: any;
  desc: string;
}

const BentoCard: FC<BentoCardProps> = ({ src, title, desc }) => {
  return (
    <div className="relative size-full border border-white/20 rounded-lg overflow-hidden">
      <video
        src={src}
        muted
        loop
        autoPlay
        className="absolute top-0 left-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex flex-col justify-between size-full text-blue-50 p-5">
        <div>
          <h1 className="special-font bento-title">{title}</h1>
          <p className="max-w-64 text-xs md:text-base mt-3">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default BentoCard;
