import * as React from "react";
import { diff } from "deep-object-diff";

const useLogger = (reducer) => {
  const reducerWithLogger = React.useCallback(
    (state, action) => {
      const nextState = reducer(state, action);
      const { type: actionType, ...payload } = action;
      console.groupCollapsed(`%c${actionType}`, "color: #166882; font-weight: 700;", payload);
      console.log("%cPrev:", "color: #9E9E9E; font-weight: 700;", state);
      console.log("%cNext:", "color: #47B04B; font-weight: 700;", nextState);
      console.log("%cDiff:", "color: #ee639a; font-weight: 700;", diff(state, nextState));
      console.groupEnd();
      return nextState;
    },
    [reducer]
  );
  return reducerWithLogger;
};

export default useLogger;
