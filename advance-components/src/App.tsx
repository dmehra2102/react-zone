import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" label="name" type="text" />
      <Input id="email" label="email" type="email" />
      <Input id="age" label="age" type="number" />

      <Button disabled>My Button</Button>
      <Button href="http://youtube.com" target="_blank">
        My Link
      </Button>

      <Container as={"button"}>?</Container>
    </main>
  );
}

export default App;
