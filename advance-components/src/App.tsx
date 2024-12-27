import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" label="name" type="text" />
      <Input id="email" label="email" type="email" />
      <Input id="age" label="age" type="number" />
    </main>
  );
}

export default App;
