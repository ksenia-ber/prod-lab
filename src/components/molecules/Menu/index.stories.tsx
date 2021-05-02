import { Story, Meta } from "@storybook/react";
import { Menu, MenuProps } from ".";

export default {
  title: "components/molecules/Menu",
  component: Menu,
} as Meta<MenuProps>;

const MenuStory: Story<MenuProps> = (props: MenuProps) => <Menu {...props} />;

export const Real = MenuStory.bind({});
Real.args = {};
