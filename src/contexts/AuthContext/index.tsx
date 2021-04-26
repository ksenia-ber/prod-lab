/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useState } from "react";
import { ContextReducerParams } from "../ContextReducer";

export type AuthContextType =
  | {
      status: "loggedIn";
      name: string;
    }
  | {
      status: "loggedOut";
    };

export const DEFAULT_AUTH_CONTEXT_VALUE: AuthContextType = {
  status: "loggedOut",
};

export const AuthContext = createContext<AuthContextType>(
  DEFAULT_AUTH_CONTEXT_VALUE
);

export const reduceAuthContext = (_: ContextReducerParams) => {
  // TODO add authentication with setState
  const [state] = useState<AuthContextType>(DEFAULT_AUTH_CONTEXT_VALUE);

  return state;
};

export const useAuthContext = () => useContext(AuthContext);
