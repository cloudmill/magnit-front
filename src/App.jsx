import { Button } from "./ui/Button/Button";
import { Container } from "./ui/Container/Container";

export const App = () => {
  return (
    <Container>
      <h1>hello, world</h1>
      <Button>123</Button>
      <Button isActive>123</Button>
      <Button>123</Button>
    </Container>
  );
};
