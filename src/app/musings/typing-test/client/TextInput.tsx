"use client";

import React, { useCallback, useEffect } from "react";
import { Commands } from "./Commands";

export const TextInput = React.memo(function TextInput(props: {
  onChange: (typedSymbol: string) => void;
}) {
  const onChange = useCallback(
    (e: KeyboardEvent) => {
      const typedSymbol = keyEventToString(e);

      if (typedSymbol) {
        props.onChange(typedSymbol);
      }
    },
    [props.onChange],
  );

  useEffect(() => {
    document.addEventListener("keydown", onChange);

    return () => {
      document.removeEventListener("keydown", onChange);
    };
  }, [onChange]);

  return null;
});

function keyEventToString(event: KeyboardEvent): string | null {
  const key = event.key;

  // If the key is a single character and not a control character, return it
  if (key.length === 1) {
    return key;
  }

  // Handle special cases
  switch (key) {
    case "Enter":
      return "\n";
    case "Tab":
      return "\t";
    case "Space":
    case " ":
      return " ";
    case "Backspace":
      return Commands.backspace;
    case "Delete":
      return Commands.delete;
    default:
      return null;
  }
}
