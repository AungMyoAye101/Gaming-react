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
      className={`px-6 py-3 w-fit  rounded-md shadow flex items-center gap-1 text-black  ${containerClass}`}
    >
      {leftIcon}
      <span className="font-general text-xs uppercase font-semibold ">
        {title}
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
