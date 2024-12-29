import { type FormHandler } from "./components/UI/Form";
import { useRef } from "react";
import AddTimer from "./components/AddTimer";
import Header from "./components/Header";
import Timers from "./components/Timers";

function App() {
  const ref = useRef<FormHandler>(null);
  const handleSave = (value: unknown) => {
    const extractedValue = value as { name: string; age: string };
    console.log("Form Detail : ", extractedValue);
    ref.current?.clear();
  };
  return (
    <>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </>
  );
}

export default App;
