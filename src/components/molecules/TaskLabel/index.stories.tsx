import { Story, Meta } from "@storybook/react";
import { TaskLabel } from ".";
import { TaskContext, TaskContextType } from "../../../contexts/TaskContext";
import { noop } from "../../../functions/noop";

export default {
  title: "components/molecules/TaskLabel",
  component: TaskLabel,
} as Meta;

const TaskLabelStory: Story<TaskContextType> = ({ title, setTitle }) => (
  <TaskContext.Provider value={{ title, setTitle }}>
    <TaskLabel />
  </TaskContext.Provider>
);

export const Example = TaskLabelStory.bind({});
Example.args = {
  title: "Task",
  setTitle: noop,
};
