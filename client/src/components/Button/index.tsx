import cn from "classnames";
import { FC, HTMLAttributes, ReactNode, createElement,memo } from "react";

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  children: string | ReactNode;
  variant: "primary" | "outline";
  size: "small" | "normal" | "large";
  as: string;
  className?:string
}


const Button: FC<ButtonProps> = memo(({
  children,
  variant = "primary",
  size = "normal",
  as,
  className,
  ...props
}) => {
  return createElement(
    as,
    {
      ...props,
      className: cn(
        "font-semibold rounded-lg flex justify-center items-center hover:opacity-70 w-fit ",
        {
          "border border-black  ": variant === "outline",
          "bg-primary  text-white": variant === "primary",
          "px-3  h-8 text-sm": size === "small",
          "px-5  h-10 text-normal": size === "normal",
          "px-5  h-12 ": size === "large",
          [className]:!!className
        }
      ),
    },
    
    children
  );
}
);
export default Button;
