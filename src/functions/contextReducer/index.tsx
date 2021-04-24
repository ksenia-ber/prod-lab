import { FC, Fragment } from "react";
import { ContextReducerParams } from "../../contexts/ContextReducer";

export const createContextReducer = (
  contextComposition: FC<ContextReducerParams>[]
): FC<ContextReducerParams> => (props) => (
  <Fragment>
    {contextComposition.reduce((children, applyCompositionElement) => {
      const wrap = applyCompositionElement({ ...props, children });

      if (wrap !== null) {
        return wrap;
      }

      return children;
    }, props.children)}
  </Fragment>
);
