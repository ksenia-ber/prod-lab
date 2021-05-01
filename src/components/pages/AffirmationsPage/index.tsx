import { FC } from "react";
import classes from "./index.module.css";

export interface AffirmationsPageProps {}

export const AffirmationsPage: FC<AffirmationsPageProps> = () => {
  return <div className={classes.affirmations}></div>;
};
