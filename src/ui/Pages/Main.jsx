import styles from "../Search/Search.module.scss";
import { Container } from "../Container/Container";
import { PageWrapper } from "../PageWrapper/PageWrapper";
import { Header } from "../Header/Header";
import { FirstScreen } from "../FirstScreen/FirstScreen";
import { Search } from "../Search/Search";
import { PurchaseList } from "../PurchaseList/PurchaseList";
import { PurchaseItem } from "../PurchaseItem/PurchaseItem";
import { InfoBlock } from "../InfoBlock/InfoBlock";
import { TermsBlock } from "../TermsBlock/TermsBlock";

export const MainPage = () => (
  <PageWrapper>
    <Header />

    <FirstScreen />

    <Container>
      <Search extraClass={styles.main} />

      <PurchaseList onMain={true}>
        <PurchaseItem />
        <PurchaseItem />
        <PurchaseItem />
        <PurchaseItem />
      </PurchaseList>

      <InfoBlock />

      <TermsBlock />
    </Container>

    <Header bottom />

  </PageWrapper>
);
