import { Button } from "./ui/Button/Button";
import { Container } from "./ui/Container/Container";
import { Header } from "./ui/Header/Header";
import { PageWrapper } from "./ui/PageWrapper/PageWrapper";
import { DevGrids } from "./ui/DevGrids/DevGrids";
import { FirstScreen } from "./ui/FirstScreen/FirstScreen";

export const App = () => {
  return (
    
    <PageWrapper>
      <Header />

      <FirstScreen />

      <Container>

      </Container>
      
      <DevGrids />
    </PageWrapper>

  );
};
