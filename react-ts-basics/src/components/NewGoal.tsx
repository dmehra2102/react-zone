import { useRef, type FormEvent } from "react";

type Props = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: Props) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
    // const formData = new FormData(event.currentTarget)
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} required />
      </p>
      <p>
        <label htmlFor="summary">Goal summary</label>
        <input id="summary" type="text" ref={summary} required />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
