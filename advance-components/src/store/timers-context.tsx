import { createContext, useContext, type ReactNode } from "react";

type Timer = {
  name: string;
  duration: string;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

type TimerContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({
  children,
}: TimerContextProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      //
    },
    startTimers() {
      //
    },
    stopTimers() {
      //
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}

export const useTimerContext = (): TimersContextValue => {
  const timersCtx = useContext(TimersContext);

  if (!timersCtx) {
    throw new Error("TimersContext is null - that should not be the case!");
  }

  return timersCtx;
};
