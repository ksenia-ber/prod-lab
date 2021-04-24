import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from ".";

export default {
  title: "components/atoms/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const ButtonStory: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = ButtonStory.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = ButtonStory.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = ButtonStory.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = ButtonStory.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
