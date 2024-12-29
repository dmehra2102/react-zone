import { useEffect, useRef, useState } from "react";
import {
  useTimerContext,
  type Timer as TimerProps,
} from "../store/timers-context.tsx";
import Container from "./UI/Container.tsx";

export default function Timer({ duration, name }: TimerProps) {
  const { isRunning } = useTimerContext();
  const intervalRef = useRef<number | null>(null);
  const [remainingState, setRemainingState] = useState<number>(duration * 1000);

  if (remainingState <= 0 && intervalRef.current) {
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setRemainingState((prevTime) => {
          if (prevTime <= 0) return prevTime;

          return prevTime - 50;
        });
      }, 50);
      intervalRef.current = timer;
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedTimeRemainin = (remainingState / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingState} />
      </p>
      <p>{formattedTimeRemainin}</p>
    </Container>
  );
}
