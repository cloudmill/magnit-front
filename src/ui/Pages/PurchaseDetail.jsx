import styles from "../PurchaseDetail/PurchaseDetail.module.scss";
import { Container } from "../Container/Container";
import { PageWrapper } from "../PageWrapper/PageWrapper";
import { Header } from "../Header/Header";
import { DevGrids } from "../DevGrids/DevGrids";
import { PageHead } from "../PageHead/PageHead";
import { PurchaseDetailLinks } from "../PurchaseDetailLinks/PurchaseDetailLinks";
import { PurchaseDetailMain } from "../PurchaseDetailMain/PurchaseDetailMain";



export const PurchaseDetail = () => (
  <PageWrapper>
    <Header />

    <Container extraClass={styles.page2col}>

      <div className={styles.col}>
        <PurchaseDetailLinks />
      </div>

      <div className={styles.col}>
        <PageHead title='Запрос предложений № 3001592' bc1='Главная' bc2='Закупки и реализация' />

        <PurchaseDetailMain />
      </div>

    </Container>

    <Header bottom />

    {/* <DevGrids/> */}
  </PageWrapper>
);
