import { useTaskContext } from "../../../contexts/TaskContext";
import { EditableLabel } from "../../atoms/EditableLabel";

export const TaskLabel = () => {
  const { title, setTitle } = useTaskContext();

  return <EditableLabel text={title} setText={setTitle} />;
};
