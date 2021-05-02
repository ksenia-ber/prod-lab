import { FC } from "react";
import { GRAY_COLOR } from "../../../constants/GRAY_COLOR";
import { useAuthContext } from "../../../contexts/AuthContext";
import { getIntroScreenBackgroundImage } from "../../../functions/getIntroScreenBackgroundImage";
import { TimeOfDay } from "../../../functions/timeToTimeOfDay";
import { Button } from "../../atoms/Button";
import classes from "./index.module.css";

export interface IntroScreenPageProps {
  timeOfDay: TimeOfDay;
  goToTimeTrackerPage: VoidFunction;
  goToAffirmationsPage: VoidFunction;
}

export const IntroScreenPage: FC<IntroScreenPageProps> = ({
  timeOfDay,
  goToTimeTrackerPage,
  goToAffirmationsPage,
}) => {
  const authContext = useAuthContext();
  const backgroundImage = getIntroScreenBackgroundImage(timeOfDay);

  return (
    <div
      className={[
        classes.introScreen,
        timeOfDay === "morning" ? classes.morning : undefined,
        timeOfDay === "afternoon" ? classes.afternoon : undefined,
        timeOfDay === "evening" ? classes.evening : undefined,
        timeOfDay === "night" ? classes.night : undefined,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ backgroundImage }}
    >
      {authContext.status === "loggedIn" && (
        <>
          <p className={classes.title}>
            Good {timeOfDay}, {authContext.name}
          </p>
          <p className={classes.subtitle}>What do you want to do today?</p>
          <div className={classes.buttonContainer}>
            <Button
              primary
              label="Track time"
              backgroundColor={GRAY_COLOR}
              onClick={goToTimeTrackerPage}
            />
            <Button
              primary
              label="Read affirmations"
              backgroundColor={GRAY_COLOR}
              onClick={goToAffirmationsPage}
            />
          </div>
        </>
      )}
      {authContext.status === "loggedOut" && (
        <>
          <p className={classes.title}>Good {timeOfDay}</p>
          <p className={classes.subtitle}>Welcome to ProdLab</p>
        </>
      )}
    </div>
  );
};
