import { useRef } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input id="name" label="name" type="text" ref={inputRef} />

      <Button disabled>My Button</Button>
      <Button href="http://youtube.com" target="_blank">
        My Link
      </Button>

      <Container as={"button"}>?</Container>
    </main>
  );
}

export default App;
