import {
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "./index.css";

export interface EditableLabelProps {
  text: string;
  setText: (title: string) => void;
}

export const EditableLabel: FC<EditableLabelProps> = ({ text, setText }) => {
  const [mode, setMode] = useState<"view" | "edit">("view");
  const divElementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Enter") {
        event.preventDefault();
      }
    };

    divElementRef.current?.addEventListener("keydown", handleKeyDown);

    return () => {
      divElementRef.current?.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClick = useCallback(() => {
    if (mode === "view") {
      setMode("edit");
    }
  }, [mode]);

  const finishEditing = useCallback(() => {
    setMode("view");

    if (!divElementRef.current) {
      return;
    }

    const { innerText } = divElementRef.current;
    if (innerText === "") {
      divElementRef.current.innerText = text;
    } else {
      setText(innerText);
    }
  }, [text, setText]);

  const handleKeyUp = useCallback<KeyboardEventHandler<HTMLDivElement>>(
    (event) => {
      if (event.code === "Enter") {
        event.preventDefault();
        setMode("view");
        finishEditing();
      }
    },
    [finishEditing]
  );

  const handleBlur = useCallback<FocusEventHandler<HTMLDivElement>>(
    finishEditing,
    [finishEditing]
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
      suppressContentEditableWarning
      ref={divElementRef}
    >
      {text}
    </div>
  );
};
