"use client";

import { useCallback, useMemo } from "react";

type Line = { text: string; offsetFromStart: number };

export function useLinesFromText(text: string, containerWidth: number): Line[] {
  const canvasContext = useMemo(() => {
    if (typeof document === "undefined") {
      return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    ctx!.font =
      '20px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

    return ctx;
  }, [typeof document]);

  const measureTextWidth = useCallback(
    (text: string) => {
      return canvasContext?.measureText(text)?.width ?? 0;
    },
    [canvasContext],
  );

  const lines = useMemo(() => {
    if (containerWidth === 0) {
      return [];
    }

    const words = text.split(" ");

    const lines: { text: string; offsetFromStart: number }[] = [];

    let accText = "";

    let offsetFromStart = 0;

    for (const word of words) {
      const preText = accText + word + " ";

      const textWidth = measureTextWidth(preText);

      if (textWidth > containerWidth) {
        lines.push({ text: accText, offsetFromStart });

        offsetFromStart += accText.length;

        accText = "";
      }

      accText += word + " ";
    }

    return lines;
  }, [containerWidth, text]);

  return lines;
}
