import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react";
import { EditableLabel, EditableLabelProps } from ".";

export default {
  title: "components/atoms/EditableLabel",
  component: EditableLabel,
} as Meta<EditableLabelProps>;

const EditableLabelStory: Story<EditableLabelProps> = (props) => (
  <EditableLabel {...props} />
);

export const Label = EditableLabelStory.bind({});
Label.args = {
  text: "Text",
  setText: action("setText"),
};
