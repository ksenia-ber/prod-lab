import { useCallback, useState } from "react";
import { MenuSandwich } from "../../atoms/MenuSandwich";
import classes from "./index.module.css";

type MenuState = "opened" | "closed";

export interface MenuProps {}

export const Menu = () => {
  const [state, setState] = useState<MenuState>("closed");

  const handleClick = useCallback(() => {
    setState((previousState) =>
      previousState === "opened" ? "closed" : "opened"
    );
  }, []);

  return (
    <div
      className={[
        classes.menu,
        state === "opened" ? classes.opened : undefined,
        state === "closed" ? classes.closed : undefined,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <MenuSandwich className={classes.button} onClick={handleClick} />
      <div className={classes.slidingPanel}>
        <p>Intro Screen</p>
        <p>Time Tracker</p>
        <p>Affirmations</p>
      </div>
    </div>
  );
};
