import { useAuthContext } from "../../../contexts/AuthContext";
import { timeToTimeOfDay } from "../../../functions/timeToTimeOfDay";
import { Button } from "../../atoms/Button";

export const IntroScreenPage = () => {
  const time = new Date().getTime();
  const timeOfDay = timeToTimeOfDay(time);
  const authContext = useAuthContext();

  return (
    <div>
      {authContext.status === "loggedIn" && (
        <>
          <p>
            Good {timeOfDay}, {authContext.name}
          </p>
          <p>What do you want to do today?</p>
          <div className="button-container">
            <Button label="Track time" />
            <Button label="Read affirmations" />
          </div>
        </>
      )}
      {authContext.status === "loggedOut" && (
        <>
          <p>Good {timeOfDay}</p>
          <p>Welcome to ProdLab</p>
        </>
      )}
    </div>
  );
};
