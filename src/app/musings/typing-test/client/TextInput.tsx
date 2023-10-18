"use client";

import React, { KeyboardEvent, useCallback, useEffect } from "react";
import { Command, Commands } from "./Commands";

export const TextInput = React.memo(function TextInput(props: {
  onChange: (typedSymbol: Command | string) => void;
}) {
  const onChange = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const typedSymbol = keyEventToString(e);

      if (typedSymbol) {
        props.onChange(typedSymbol);
      }
    },
    [props.onChange],
  );

  useEffect(() => {
    document.addEventListener("keydown", onChange as any);

    return () => {
      document.removeEventListener("keydown", onChange as any);
    };
  }, [onChange]);

  return <div></div>;
});

function keyEventToString(event: KeyboardEvent<any>): Command | string | null {
  const key = event.key;
  const shiftKey = event.shiftKey;

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
