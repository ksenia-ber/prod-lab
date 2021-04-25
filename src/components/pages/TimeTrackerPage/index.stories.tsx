import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react";
import { TimeTrackerPage } from ".";
import { TimerContext, TimerContextType } from "../../../contexts/TimerContext";

export default {
  title: "components/pages/TimeTrackerPage",
  component: TimeTrackerPage,
} as Meta;

const TimeTrackerPageStory: Story<TimerContextType> = (context) => (
  <TimerContext.Provider value={context}>
    <TimeTrackerPage />
  </TimerContext.Provider>
);

export const Idle = TimeTrackerPageStory.bind({});
Idle.args = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  status: "idle",
  start: action("start"),
};

export const Started = TimeTrackerPageStory.bind({});
Started.args = {
  seconds: 1,
  minutes: 0,
  hours: 0,
  status: "started",
  pause: action("pause"),
  stop: action("stop"),
};

export const Paused = TimeTrackerPageStory.bind({});
Paused.args = {
  seconds: 2,
  minutes: 0,
  hours: 0,
  status: "paused",
  resume: action("resume"),
  stop: action("stop"),
};

export const Stopped = TimeTrackerPageStory.bind({});
Stopped.args = {
  seconds: 2,
  minutes: 0,
  hours: 0,
  status: "stopped",
  start: action("start"),
};
