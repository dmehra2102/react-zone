import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalType } from "../App";

type Props = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: Props) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
