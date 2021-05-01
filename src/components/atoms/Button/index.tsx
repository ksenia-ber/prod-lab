import { FC } from "react";
import "./index.css";

export interface ButtonProps {
  className?: string;
  primary?: boolean;
  backgroundColor?: string;
  label: string;
  onClick?: VoidFunction;
}

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
  primary = false,
  backgroundColor,
  label,
  className,
  ...props
}) => (
  <button
    type="button"
    className={[
      "button",
      primary ? "button--primary" : "button--secondary",
      className,
    ].join(" ")}
    style={{ backgroundColor }}
    {...props}
  >
    {label}
  </button>
);
