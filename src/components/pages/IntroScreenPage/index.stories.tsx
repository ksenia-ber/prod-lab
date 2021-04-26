import { Meta, Story } from "@storybook/react";
import { IntroScreenPage } from ".";
import { AuthContext, AuthContextType } from "../../../contexts/AuthContext";

export default {
  title: "components/pages/IntroScreenPage",
  component: IntroScreenPage,
} as Meta;

const IntroScreenPageStory: Story<AuthContextType> = (context) => (
  <AuthContext.Provider value={context}>
    <IntroScreenPage />
  </AuthContext.Provider>
);

export const LoggedIn = IntroScreenPageStory.bind({});
LoggedIn.args = {
  status: "loggedIn",
  name: "Alex",
};

export const LoggedOut = IntroScreenPageStory.bind({});
LoggedOut.args = {
  status: "loggedOut",
};
