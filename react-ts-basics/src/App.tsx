import { useState } from "react";
import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";
import CourseGoal from "./components/CourseGoal";
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth!",
      };

      return [...prevGoals, newGoal];
    });
  };
  return (
    <main>
      <Header image={{ src: goalsImage, alt: "header goal image" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>

      <CourseGoalList goals={goals} />
    </main>
  );
}
