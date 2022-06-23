import { DevGrids } from "./ui/DevGrids/DevGrids";

import { Button } from "./ui/Button/Button";
import { Container } from "./ui/Container/Container";
import { Header } from "./ui/Header/Header";
import { PageWrapper } from "./ui/PageWrapper/PageWrapper";

import { FirstScreen } from "./ui/FirstScreen/FirstScreen";
import { PurchaseItem } from "./ui/PurchaseItem/PurchaseItem";

export const App = () => {
  return (
    
    <PageWrapper>
      <Header />

      <FirstScreen />

      <Container>
        
        <PurchaseItem />
        <PurchaseItem />
        <PurchaseItem />
        
      </Container>
      
      <DevGrids />
    </PageWrapper>

  );
};
