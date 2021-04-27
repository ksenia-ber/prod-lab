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
  ...context
}) => (
  <AuthContext.Provider value={context}>
    <IntroScreenPage timeOfDay={timeOfDay} />
  </AuthContext.Provider>
);

export const LoggedIn = IntroScreenPageStory.bind({});
LoggedIn.args = {
  status: "loggedIn",
  name: "Alex",
  timeOfDay: timeToTimeOfDay(new Date().getTime()),
};

export const LoggedOut = IntroScreenPageStory.bind({});
LoggedOut.args = {
  status: "loggedOut",
  timeOfDay: timeToTimeOfDay(new Date().getTime()),
};

export const Morning = IntroScreenPageStory.bind({});
Morning.args = {
  status: "loggedIn",
  name: "Alex",
  timeOfDay: "morning",
};

export const Afternoon = IntroScreenPageStory.bind({});
Afternoon.args = {
  status: "loggedIn",
  name: "Alex",
  timeOfDay: "afternoon",
};

export const Evening = IntroScreenPageStory.bind({});
Evening.args = {
  status: "loggedIn",
  name: "Alex",
  timeOfDay: "evening",
};

export const Night = IntroScreenPageStory.bind({});
Night.args = {
  status: "loggedIn",
  name: "Alex",
  timeOfDay: "night",
};
