import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";
import CourseGoal from "./components/CourseGoal";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImage, alt: "header goal image" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="My Dream Goals">
        <p>This is the description for my goal.</p>
      </CourseGoal>
    </main>
  );
}
