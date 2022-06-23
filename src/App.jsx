import { DevGrids } from "./ui/DevGrids/DevGrids";

import { Container } from "./ui/Container/Container";
import { PageWrapper } from "./ui/PageWrapper/PageWrapper";
import { Header } from "./ui/Header/Header";

import { FirstScreen } from "./ui/FirstScreen/FirstScreen";
import { PurchaseList } from "./ui/PurchaseList/PurchaseList";
import { PurchaseItem } from "./ui/PurchaseItem/PurchaseItem";
import { InfoBlock } from "./ui/InfoBlock/InfoBlock";

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

        <InfoBlock/>

      </Container>
      
      <DevGrids />
    </PageWrapper>

  );
};
