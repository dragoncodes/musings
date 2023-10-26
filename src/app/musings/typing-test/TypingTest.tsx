"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { TypedSymbolState } from "./client/types/TypedSymbolState";
import { Timer } from "./client/components/Timer";
import { CurrentTextDisplay } from "./client/components/CurrentTextDisplay";
import { Commands } from "./client/types/Commands";
import { TextInput } from "./client/components/TextInput";
import { calculateAccuracy } from "./client/utils/calculateAccuracy";

export function TypingTest(props: { text: string }) {
  const [cursorIndex, setCursorIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

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

    // #maths
    wpm.current = Math.ceil(cursorIndex / 5);

    const symbolState =
      props.text[cursorIndex] === symbol ? "correct" : "incorrect";

    typedTextStateByIndex.current[cursorIndex] = symbolState;

    setCursorIndex(cursorIndex + 1);
  };

  const onTimeUp = useCallback(() => {
    setIsTimeUp(true);
  }, []);

  useEffect(() => {
    if (containerRef.current !== null) {
      const cs = getComputedStyle(containerRef.current);

      const paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);

      const borderX =
        parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);

      setContainerWidth(containerRef.current.offsetWidth - paddingX - borderX);
    }
  }, []);

  if (isTimeUp) {
    return (
      <div className="text-2xl text-white ">
        <div>Words per minute: {wpm.current}</div>

        <div>Accuracy: {calculateAccuracy(typedTextStateByIndex.current)}%</div>

        <div>{wpm.current < 60 ? "Noob" : "Pro"}</div>
      </div>
    );
  }

  return (
    <div
      className="w-[30em] rounded-md bg-white p-5 text-xl"
      ref={containerRef}
    >
      {containerWidth === 0 ? (
        <div>Loading ...</div>
      ) : (
        <>
          <Timer time={60 * 1000} onTimeUp={onTimeUp} />

          <CurrentTextDisplay
            currentIndex={cursorIndex}
            containerWidth={containerWidth}
            text={props.text}
            typedSymbolState={typedTextStateByIndex.current}
          />
          <TextInput onChange={onChange} />
        </>
      )}
    </div>
  );
}
