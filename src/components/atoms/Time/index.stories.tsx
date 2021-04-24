import { Story, Meta } from "@storybook/react";
import { Time, TimeProps } from ".";

export default {
  title: "components/atoms/Time",
  component: Time,
} as Meta<TimeProps>;

const TimeStory: Story<TimeProps> = (args) => <Time {...args} />;

export const OnlySeconds = TimeStory.bind({});
OnlySeconds.args = {
  seconds: 10,
  minutes: 0,
  hours: 0,
};

export const OnlyMinutes = TimeStory.bind({});
OnlyMinutes.args = {
  seconds: 0,
  minutes: 10,
  hours: 0,
};

export const OnlyHours = TimeStory.bind({});
OnlyHours.args = {
  seconds: 0,
  minutes: 0,
  hours: 10,
};
