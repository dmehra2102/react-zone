import { createContext, useContext, useReducer, type ReactNode } from "react";

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

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

const TimersContext = createContext<TimersContextValue | null>(null);

type TimerContextProviderProps = {
  children: ReactNode;
};

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};
type StopTimerAction = {
  type: "STOP_TIMERS";
};
type StartTimerAction = {
  type: "START_TIMERS";
};

type Action = AddTimerAction | StopTimerAction | StartTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState {
  switch (action.type) {
    case "ADD_TIMER":
      return {
        ...state,
        timers: [...state.timers, action.payload],
      };
    case "START_TIMERS":
      return {
        ...state,
        isRunning: true,
      };
    case "STOP_TIMERS":
      return {
        ...state,
        isRunning: false,
      };
    default:
      return state;
  }
}

export default function TimersContextProvider({
  children,
}: TimerContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);
  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimers() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMERS" });
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
