import { DevGrids } from "./ui/DevGrids/DevGrids";

import { Container } from "./ui/Container/Container";
import { Header } from "./ui/Header/Header";
import { PageWrapper } from "./ui/PageWrapper/PageWrapper";

import { FirstScreen } from "./ui/FirstScreen/FirstScreen";
import { PurchaseList } from "./ui/PurchaseList/PurchaseList";
import { PurchaseItem } from "./ui/PurchaseItem/PurchaseItem";

export const App = () => {
  return (
    
    <PageWrapper>
      <Header />

      <FirstScreen />

      <Container>
        
        <PurchaseList>

          <PurchaseItem />
          <PurchaseItem />
          <PurchaseItem />
        
        </PurchaseList>

      </Container>
      
      <DevGrids />
    </PageWrapper>

  );
};
