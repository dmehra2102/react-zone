import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalType } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type Props = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: Props) {
  if (!goals.length) {
    return (
      <InfoBox mode="hint">You have no goals yet. Start adding some!</InfoBox>
    );
  }

  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
