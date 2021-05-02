import { FC, HTMLAttributes } from "react";
import classes from "./index.module.css";

export type MenuSandwichProps = Pick<
  HTMLAttributes<HTMLDivElement>,
  "className" | "onClick"
>;

export const MenuSandwich: FC<MenuSandwichProps> = ({ className, onClick }) => (
  <div
    className={[classes.sandwich, className].filter(Boolean).join(" ")}
    onClick={onClick}
  >
    <div></div>
    <div></div>
    <div></div>
  </div>
);
