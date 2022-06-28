import styles from "../Search/Search.module.scss";
import { Container } from "../Container/Container";
import { PageWrapper } from "../PageWrapper/PageWrapper";
import { Header } from "../Header/Header";
import { Search } from "../Search/Search";
import { PurchaseListTop } from "../PurchaseList/PurchaseListTop";
import { PurchaseList } from "../PurchaseList/PurchaseList";
import { PurchaseItem } from "../PurchaseItem/PurchaseItem";
import { PageHead } from "../PageHead/PageHead";

export const PurchasesPage = () => (
  <PageWrapper>
    <Header />

    <Container>

      <PageHead title='Закупки и реализация' bc1='Главная' bc2='Закупки и реализация' />

      <Search extraClass={styles.onPage} />

      <PurchaseListTop />

      <PurchaseList extraClass={styles.blockBottom}>
        <PurchaseItem />
        <PurchaseItem />
        <PurchaseItem />
      </PurchaseList>

    </Container>

    <Header bottom />

    {/* <DevGrids/> */}
  </PageWrapper>
);
