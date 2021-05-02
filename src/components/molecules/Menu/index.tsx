import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
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
        <p>
          <Link className={classes.link} to="/" onClick={handleClick}>
            Intro Screen
          </Link>
        </p>
        <p>
          <Link
            className={classes.link}
            to="/time-tracker"
            onClick={handleClick}
          >
            Time Tracker
          </Link>
        </p>
        <p>
          <Link
            className={classes.link}
            to="/affirmations"
            onClick={handleClick}
          >
            Affirmations
          </Link>
        </p>
      </div>
    </div>
  );
};
