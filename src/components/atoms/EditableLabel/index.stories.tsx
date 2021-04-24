import { Story, Meta } from "@storybook/react";
import { EditableLabel, EditableLabelProps } from ".";

export default {
  title: "components/atoms/EditableLabel",
  component: EditableLabel,
} as Meta<EditableLabelProps>;

const EditableLabelStory: Story<EditableLabelProps> = (args) => (
  <EditableLabel {...args} />
);

export const Label = EditableLabelStory.bind({});
Label.args = {
  title: "Task",
};
