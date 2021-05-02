import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { reportWebVitals } from "./reportWebVitals";
import { ContextReducer } from "./contexts/ContextReducer";
import { TimeTrackerPage } from "./components/pages/TimeTrackerPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { IntroScreenPage } from "./components/pages/IntroScreenPage";
import { timeToTimeOfDay } from "./functions/timeToTimeOfDay";
import { AffirmationsPage } from "./components/pages/AffirmationsPage";
import { Menu } from "./components/molecules/Menu";

ReactDOM.render(
  <React.StrictMode>
    <ContextReducer>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Menu />
            <IntroScreenPage
              timeOfDay={timeToTimeOfDay(new Date().getTime())}
            />
          </Route>
          <Route exact path="/affirmations">
            <Menu />
            <AffirmationsPage />
          </Route>
          <Route exact path="/time-tracker">
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
