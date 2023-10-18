"use client";

import React, { useCallback, useRef, useState } from "react";
import { CurrentTextDisplay } from "./client/CurrentTextDisplay";
import { TextInput } from "./client/TextInput";
import { Commands } from "./client/Commands";
import { TypedSymbolState } from "./client/types/TypedSymbolState";
import { Timer } from "./client/Timer";

export function TypingTest(props: { text: string }) {
  const [cursorIndex, setCursorIndex] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const wpm = useRef(0);

  const typedTextStateByIndex = useRef<TypedSymbolState[]>(
    Array.from(props.text).map(() => "pending"),
  );

  const onChange = (symbol: string) => {
    if (symbol === Commands.backspace.valueOf()) {
      if (cursorIndex === 0) {
        return;
      }

      typedTextStateByIndex.current[cursorIndex - 1] = "pending";

      setCursorIndex(cursorIndex - 1);

      return;
    }

    wpm.current = Math.ceil(cursorIndex / 5);

    const symbolState =
      props.text[cursorIndex] === symbol ? "correct" : "incorrect";

    typedTextStateByIndex.current[cursorIndex] = symbolState;

    setCursorIndex(cursorIndex + 1);
  };

  const onTimeUp = useCallback(() => {
    setIsTimeUp(true);
  }, []);

  if (isTimeUp) {
    return (
      <div className="text-2xl text-white ">RIP... WPM: {wpm.current}</div>
    );
  }

  return (
    <div className="h-[200px] w-[500px] rounded-md bg-white p-5 text-xl">
      <div>WPM: {wpm.current}</div>

      <Timer time={60 * 1000} onTimeUp={onTimeUp} />

      <CurrentTextDisplay
        currentIndex={cursorIndex}
        text={props.text}
        typedSymbolState={typedTextStateByIndex.current}
      />

      <TextInput onChange={onChange} />
    </div>
  );
}
