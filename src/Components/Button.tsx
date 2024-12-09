import { FC, ReactNode } from "react";

interface ButtonProps {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClass?: string;
}

const Button: FC<ButtonProps> = ({
  title,
  leftIcon,
  rightIcon,
  containerClass,
}) => {
  return (
    <button
      className={`px-6 py-2 w-fit  rounded-full shadow flex items-center gap-1 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="font-general text-xs uppercase">{title}</span>
      {rightIcon}
    </button>
  );
};

export default Button;
