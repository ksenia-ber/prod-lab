import { FC } from "react";
import "./index.css";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: VoidFunction;
}

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
  primary = false,
  backgroundColor,
  label,
  ...props
}) => (
  <button
    type="button"
    className={[
      "button",
      primary ? "button--primary" : "button--secondary",
    ].join(" ")}
    style={{ backgroundColor }}
    {...props}
  >
    {label}
  </button>
);
