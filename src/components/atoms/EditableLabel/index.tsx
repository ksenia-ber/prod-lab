import {
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "./index.css";

export interface EditableLabelProps {
  title: string;
}

export const EditableLabel: FC<EditableLabelProps> = ({
  title: initialTitle,
}) => {
  const [mode, setMode] = useState<"view" | "edit">("view");
  const [title, setTitle] = useState(initialTitle);
  const divElementRef = useRef<HTMLDivElement>(
    (null as unknown) as HTMLDivElement
  );

  useLayoutEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Enter") {
        event.preventDefault();
      }
    };

    divElementRef.current.addEventListener("keydown", handleKeyDown);

    return () => {
      divElementRef.current.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClick = useCallback(() => {
    if (mode === "view") {
      setMode("edit");
    }
  }, [mode]);

  const finishEditing = useCallback(() => {
    setMode("view");
    const { innerText } = divElementRef.current;
    if (innerText === "") {
      divElementRef.current.innerText = title;
    } else {
      setTitle(innerText);
    }
  }, [title]);

  const handleKeyUp = useCallback<KeyboardEventHandler<HTMLDivElement>>(
    (event) => {
      if (event.code === "Enter") {
        event.preventDefault();
        setMode("view");
        finishEditing();
      }
    },
    [title]
  );

  const handleBlur = useCallback<FocusEventHandler<HTMLDivElement>>(
    finishEditing,
    []
  );

  return (
    <div
      className={[
        "editable-label",
        mode === "edit" ? "editable-label--edit" : "editable-label--view",
      ].join(" ")}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      onBlur={handleBlur}
      contentEditable={mode === "edit"}
      ref={divElementRef}
    >
      {title}
    </div>
  );
};
