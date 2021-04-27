import { FC } from "react";
import { GRAY_COLOR } from "../../../constants/GRAY_COLOR";
import { useAuthContext } from "../../../contexts/AuthContext";
import { getIntroScreenBackgroundImage } from "../../../functions/getIntroScreenBackgroundImage";
import { noop } from "../../../functions/noop";
import { TimeOfDay } from "../../../functions/timeToTimeOfDay";
import { Button } from "../../atoms/Button";
import "./index.css";

export interface IntroScreenPageProps {
  timeOfDay: TimeOfDay;
}

export const IntroScreenPage: FC<IntroScreenPageProps> = ({ timeOfDay }) => {
  const authContext = useAuthContext();
  const backgroundImage = getIntroScreenBackgroundImage(timeOfDay);

  return (
    <div
      className={[
        "intro-screen",
        timeOfDay === "morning" ? "intro-screen--morning" : undefined,
        timeOfDay === "afternoon" ? "intro-screen--afternoon" : undefined,
        timeOfDay === "evening" ? "intro-screen--evening" : undefined,
        timeOfDay === "night" ? "intro-screen--night" : undefined,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ backgroundImage }}
    >
      {authContext.status === "loggedIn" && (
        <>
          <p className="intro-screen-title">
            Good {timeOfDay}, {authContext.name}
          </p>
          <p className="intro-screen-subtitle">What do you want to do today?</p>
          <div className="button-container">
            <Button
              primary
              label="Track time"
              backgroundColor={GRAY_COLOR}
              onClick={noop}
            />
            <Button
              primary
              label="Read affirmations"
              backgroundColor={GRAY_COLOR}
              onClick={noop}
            />
          </div>
        </>
      )}
      {authContext.status === "loggedOut" && (
        <>
          <p className="intro-screen-title">Good {timeOfDay}</p>
          <p className="intro-screen-subtitle">Welcome to ProdLab</p>
        </>
      )}
    </div>
  );
};
