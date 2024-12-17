import { FC } from "react";

interface ImgProps {
  source: string;
  imgStyle: string;
}
const ImageClipBox: FC<ImgProps> = ({ source, imgStyle }) => {
  return (
    <div className={imgStyle}>
      <img src={source} alt="contact image" />;
    </div>
  );
};

export default ImageClipBox;
