"use client";

import { useMemo, useRef, useState } from "react";
import { useLinesFromText } from "../hooks/useLinesFromText";
import { TypedSymbolState } from "../types/TypedSymbolState";

const initialPositionsY = [0, 0, 0, 0, 0];

export function CurrentTextDisplay(props: {
  text: string;
  currentIndex: number;
  containerWidth: number;
  typedSymbolState: TypedSymbolState[];
}) {
  const [topEdge, setTopEdge] = useState(0);

  const [linePositionsY, setLinePositionsY] = useState(initialPositionsY);

  const [indicesToRender, setIndicesToRender] = useState([0, 1, 2, 3, 4]);

  const lines = useLinesFromText(props.text, props.containerWidth);

  const firstActiveLine = useRef(0);

  const currentLineOffset =
    lines[firstActiveLine.current + 1]?.offsetFromStart ?? 0;

  if (lines.length > 0 && props.currentIndex >= currentLineOffset) {
    firstActiveLine.current++;

    // Push all lines
    const newLinePositions = linePositionsY.map((item) => item - 2);

    setLinePositionsY(newLinePositions);

    setTimeout(() => {
      setTopEdge(topEdge + 1);

      const newIndexToRender =
        (indicesToRender[indicesToRender.length - 1] ?? 0) + 1;

      const newIndicesToRender = indicesToRender.slice();

      newIndicesToRender.push(newIndexToRender);

      newLinePositions.push(newLinePositions.at(-1) ?? 0);

      setLinePositionsY(newLinePositions);
      setIndicesToRender(newIndicesToRender);
    }, 500);
  }

  function renderLineAtIndex(index: number) {
    const lineData = lines[index];
    if (!lineData) {
      return null;
    }

    return (
      <Line
        topOffset={lineData.offsetFromStart}
        text={lineData.text}
        translateY={linePositionsY[index] ?? 0}
        typedSymbolState={props.typedSymbolState}
      />
    );
  }

  return (
    <div className="text-xl leading-loose text-white">
      <div className="h-[6em] overflow-hidden">
        {indicesToRender.map((index) => renderLineAtIndex(index))}
      </div>
    </div>
  );
}

function Line(props: {
  translateY: number;
  text: string;
  topOffset: number;
  typedSymbolState: TypedSymbolState[];
}) {
  const characters = useMemo(() => props.text.split(""), [props.text]);

  const style = useMemo(
    () => ({
      transform: `translateY(${props.translateY}em)`,
    }),
    [props.translateY],
  );

  return (
    <div style={style} className="transition duration-300 ease-in-out">
      {characters.map((char, index) => (
        <span
          key={`char-at-index-${index}`}
          className={`font-mono ${
            props.typedSymbolState[props.topOffset + index] === "incorrect"
              ? "text-[#f00]"
              : props.typedSymbolState[props.topOffset + index] === "pending"
              ? "text-slate-400"
              : "text-green-300"
          }`}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
