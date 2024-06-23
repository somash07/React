import React from "react";
import userContext from "./userContext";

const userContextProvider = ({ children }) => {
  return <userContext.Provider>{children}</userContext.Provider>;
};
