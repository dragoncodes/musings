"use client";

import React from "react";
import { createContext } from "react";

export const DepthContext = createContext<number | undefined>(undefined);

export const useDepthLevel = () => {
  const depthLevel = React.useContext(DepthContext);

  if (depthLevel === undefined) {
    return 0;
  }

  return depthLevel;
};
