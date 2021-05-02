import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react";
import { MenuSandwich, MenuSandwichProps } from ".";

export default {
  title: "components/atoms/MenuSandwich",
  component: MenuSandwich,
} as Meta<MenuSandwichProps>;

const MenuSandwichStory: Story<MenuSandwichProps> = (props) => (
  <MenuSandwich {...props} />
);

export const Real = MenuSandwichStory.bind({});
Real.args = {
  onClick: action("onClick"),
};
