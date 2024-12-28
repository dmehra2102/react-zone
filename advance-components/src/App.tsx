import Form from "./components/Form";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const handleSave = (value: unknown) => {
    value as { name: string; age: string };
  };
  return (
    <main>
      <Form onSave={handleSave}>
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
