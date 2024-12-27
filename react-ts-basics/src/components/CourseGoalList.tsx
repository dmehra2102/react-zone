import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalType } from "../App";

type Props = {
  goals: CourseGoalType[];
};

export default function CourseGoalList({ goals }: Props) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
