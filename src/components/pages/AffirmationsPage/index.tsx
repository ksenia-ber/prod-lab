import { FC, useCallback, useState } from "react";
import { AFFIRMATION_LIST } from "../../../constants/AFFIRMATION_LIST";
import { randomiser } from "../../../functions/randomiser";
import classes from "./index.module.css";

export interface AffirmationsPageProps {}

export const AffirmationsPage: FC<AffirmationsPageProps> = () => {
  const [{ getCurrent, next }] = useState(randomiser(AFFIRMATION_LIST));
  const [text, setText] = useState(getCurrent());

  const handleClick = useCallback(() => {
    next();
    setText(getCurrent());
  }, []);

  return (
    <div className={classes.affirmations}>
      <div className={classes.background}></div>
      <p>{text}</p>
      <input type="button" value="Show new" onClick={handleClick} />
    </div>
  );
};
