import { useEffect, useState } from "react";
import { TypedSymbolState } from "./types/TypedSymbolState";

const pageSize = 100;

export function CurrentTextDisplay(props: {
  text: string;
  typedSymbolState: TypedSymbolState[];
  currentIndex: number;
}) {
  const [shownTextPage, setShownTextPage] = useState(0);

  const rangeStart = shownTextPage * pageSize;
  const rangeEnd = (shownTextPage + 1) * pageSize;

  const text = props.text.substring(rangeStart, rangeEnd).split("");

  const isNextPage = props.currentIndex === rangeEnd;

  useEffect(() => {
    if (isNextPage) {
      setShownTextPage((page) => page + 1);
    }
  }, [isNextPage]);

  return (
    <div className="text-white ">
      {text.map((char, index) => (
        <span
          key={`char-at-index-${index}`}
          className={`${
            props.typedSymbolState[rangeStart + index] === "incorrect"
              ? "text-[#f00]"
              : props.typedSymbolState[rangeStart + index] === "pending"
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
