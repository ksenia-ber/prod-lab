import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { reportWebVitals } from "./reportWebVitals";
import { ContextReducer } from "./contexts/ContextReducer";
import { TimeTrackerPage } from "./components/pages/TimeTrackerPage";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import { IntroScreenPage } from "./components/pages/IntroScreenPage";
import { timeToTimeOfDay } from "./functions/timeToTimeOfDay";
import { AffirmationsPage } from "./components/pages/AffirmationsPage";
import { Menu } from "./components/molecules/Menu";
import { TIME_TRACKER_PAGE } from "./constants/TIME_TRACKER_PAGE";
import { AFFIRMATIONS_PAGE } from "./constants/AFFIRMATIONS_PAGE";

const ConnectedIntroScreen = () => {
  const history = useHistory();
  const timeOfDay = timeToTimeOfDay(new Date().getTime());

  const goToTimeTrackerPage = useCallback(() => {
    history.push(TIME_TRACKER_PAGE);
  }, [history]);

  const goToAffirmationsPage = useCallback(() => {
    history.push(AFFIRMATIONS_PAGE);
  }, [history]);

  return (
    <IntroScreenPage
      timeOfDay={timeOfDay}
      goToAffirmationsPage={goToAffirmationsPage}
      goToTimeTrackerPage={goToTimeTrackerPage}
    />
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ContextReducer>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Menu />
            <ConnectedIntroScreen />
          </Route>
          <Route exact path={AFFIRMATIONS_PAGE}>
            <Menu />
            <AffirmationsPage />
          </Route>
          <Route exact path={TIME_TRACKER_PAGE}>
            <Menu />
            <TimeTrackerPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ContextReducer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
