import Form, { type FormHandler } from "./components/UI/Form";
import Input from "./components/UI/Input";
import Button from "./components/UI/Button";
import { useRef } from "react";

function App() {
  const ref = useRef<FormHandler>(null);
  const handleSave = (value: unknown) => {
    const extractedValue = value as { name: string; age: string };
    console.log("Form Detail : ", extractedValue);
    ref.current?.clear();
  };
  return (
    <main>
      <Form onSave={handleSave} ref={ref}>
        <Input type="text" id="name" label="name" />
        <Input type="number" id="age" label="age" />

        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
