import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import { IntroScreenPage, IntroScreenPageProps } from ".";
import { AuthContext, AuthContextType } from "../../../contexts/AuthContext";
import { timeToTimeOfDay } from "../../../functions/timeToTimeOfDay";

export default {
  title: "components/pages/IntroScreenPage",
  component: IntroScreenPage,
} as Meta;

type IntroScreenPageStoryProps = AuthContextType & IntroScreenPageProps;

const IntroScreenPageStory: Story<IntroScreenPageStoryProps> = ({
  timeOfDay,
  goToAffirmationsPage,
  goToTimeTrackerPage,
  ...context
}) => (
  <AuthContext.Provider value={context}>
    <IntroScreenPage
      timeOfDay={timeOfDay}
      goToAffirmationsPage={goToAffirmationsPage}
      goToTimeTrackerPage={goToTimeTrackerPage}
    />
  </AuthContext.Provider>
);

export const LoggedIn = IntroScreenPageStory.bind({});
LoggedIn.args = {
  status: "loggedIn",
  name: "Alex",
  timeOfDay: timeToTimeOfDay(new Date().getTime()),
  goToAffirmationsPage: action("goToAffirmationsPage"),
  goToTimeTrackerPage: action("goToTimeTrackerPage"),
};

export const LoggedOut = IntroScreenPageStory.bind({});
LoggedOut.args = {
  status: "loggedOut",
  timeOfDay: timeToTimeOfDay(new Date().getTime()),
  goToAffirmationsPage: action("goToAffirmationsPage"),
  goToTimeTrackerPage: action("goToTimeTrackerPage"),
};

export const Morning = IntroScreenPageStory.bind({});
Morning.args = {
  status: "loggedIn",
  name: "Alex",
  timeOfDay: "morning",
  goToAffirmationsPage: action("goToAffirmationsPage"),
  goToTimeTrackerPage: action("goToTimeTrackerPage"),
};

export const Afternoon = IntroScreenPageStory.bind({});
Afternoon.args = {
  status: "loggedIn",
  name: "Alex",
  timeOfDay: "afternoon",
  goToAffirmationsPage: action("goToAffirmationsPage"),
  goToTimeTrackerPage: action("goToTimeTrackerPage"),
};

export const Evening = IntroScreenPageStory.bind({});
Evening.args = {
  status: "loggedIn",
  name: "Alex",
  timeOfDay: "evening",
  goToAffirmationsPage: action("goToAffirmationsPage"),
  goToTimeTrackerPage: action("goToTimeTrackerPage"),
};

export const Night = IntroScreenPageStory.bind({});
Night.args = {
  status: "loggedIn",
  name: "Alex",
  timeOfDay: "night",
  goToAffirmationsPage: action("goToAffirmationsPage"),
  goToTimeTrackerPage: action("goToTimeTrackerPage"),
};

export const Real = IntroScreenPageStory.bind({});
Real.args = {
  status: "loggedOut",
  timeOfDay: timeToTimeOfDay(new Date().getTime()),
  goToAffirmationsPage: action("goToAffirmationsPage"),
  goToTimeTrackerPage: action("goToTimeTrackerPage"),
};
