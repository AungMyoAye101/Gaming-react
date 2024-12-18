import { FC, ReactNode } from "react";

interface ButtonProps {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  color?: string;
  containerClass?: string;
}

const Button: FC<ButtonProps> = ({
  title,
  leftIcon,
  rightIcon,
  color,
  containerClass,
}) => {
  return (
    <div
      className={`p-0.5 border border-${color} rounded-md bg-transparent w-fit hover:bg-gray-900 `}
    >
      <button
        className={`px-6 py-3 w-fit  rounded-md shadow flex items-center gap-1 text-black bg-${color} ${containerClass}`}
      >
        {leftIcon}
        <span className="font-general text-xs uppercase font-semibold ">
          {title}
        </span>
        {rightIcon}
      </button>
    </div>
  );
};

export default Button;
