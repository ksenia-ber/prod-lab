import { Meta, Story } from "@storybook/react";
import { AffirmationsPage, AffirmationsPageProps } from ".";

export default {
  title: "components/pages/AffirmationsPage",
  component: AffirmationsPage,
} as Meta;

type AffirmationsPageStoryProps = AffirmationsPageProps;

const AffirmationsPageStory: Story<AffirmationsPageStoryProps> = () => (
  <AffirmationsPage />
);

export const Real = AffirmationsPageStory.bind({});
Real.args = {};
