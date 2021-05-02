import { Story, Meta } from "@storybook/react";
import { Menu, MenuProps } from ".";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "components/molecules/Menu",
  component: Menu,
} as Meta<MenuProps>;

const MenuStory: Story<MenuProps> = (props: MenuProps) => (
  <BrowserRouter>
    <Menu {...props} />
  </BrowserRouter>
);

export const Real = MenuStory.bind({});
Real.args = {};
