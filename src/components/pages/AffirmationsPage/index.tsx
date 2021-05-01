import { FC, useCallback, useState } from "react";
import { AFFIRMATION_LIST } from "../../../constants/AFFIRMATION_LIST";
import { randomiser } from "../../../functions/randomiser";
import { Button } from "../../atoms/Button";
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
      <div className={classes.generator}>
        <div className={classes.content}>
          <p className={classes.text}>{text}</p>
          <Button
            className={classes.button}
            primary
            label="Show new"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
