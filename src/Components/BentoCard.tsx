import { FC } from "react";

interface BentoCardProps {
  src: string;
  title: string;
  desc: string;
}

const BentoCard: FC<BentoCardProps> = ({ src, title, desc }) => {
  return (
    <div>
      <div className="relative size-full">
        <video
          src={src}
          muted
          loop
          autoPlay
          className="absolute size-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default BentoCard;
