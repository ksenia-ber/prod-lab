import { Story, Meta } from "@storybook/react";
import { EditableLabel, EditableLabelProps } from ".";
import { noop } from "../../../functions/noop";

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
  setText: noop,
};
