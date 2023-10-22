"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";

export const Timer = React.memo(function Timer(props: {
  time: number;
  onTimeUp: () => void;
}) {
  const [timeLeft, setTimeLeft] = useState(props.time);
  const lastTick = useRef(Date.now());

  function loop() {
    if (Date.now() - lastTick.current >= 1000) {
      setTimeLeft((timeLeft) => timeLeft - 1000);

      lastTick.current = Date.now();
    } else if (timeLeft > 0) {
      requestAnimationFrame(loop);
    }
  }

  useEffect(() => {
    if (timeLeft <= 0) {
      props.onTimeUp();

      return;
    }

    const animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [timeLeft, props.onTimeUp]);

  return <div>{formatMillisToMinSec(timeLeft)}</div>;
});

function formatMillisToMinSec(millis: number): string {
  const totalSeconds = Math.floor(millis / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}
