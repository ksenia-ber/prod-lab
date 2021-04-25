import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react";
import { TaskLabel } from ".";
import { TaskContext, TaskContextType } from "../../../contexts/TaskContext";

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
  setTitle: action("setTitle"),
};
