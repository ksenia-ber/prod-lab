import { Story, Meta } from "@storybook/react";
import { MenuSandwich } from ".";

export default {
  title: "components/atoms/MenuSandwich",
  component: MenuSandwich,
} as Meta<{}>;

const MenuSandwichStory: Story = () => <MenuSandwich />;

export const Real = MenuSandwichStory.bind({});
