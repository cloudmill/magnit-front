import styles from "../PurchaseDetail/PurchaseDetail.module.scss";
import { Container } from "../Container/Container";
import { PageWrapper } from "../PageWrapper/PageWrapper";
import { Header } from "../Header/Header";
import { PageHead } from "../PageHead/PageHead";
import { PurchaseDetailLinks } from "../PurchaseDetailLinks/PurchaseDetailLinks";
import { DevGrids } from "../DevGrids/DevGrids";
import { DocumentCard } from "../DocumentCard/DocumentCard";

export const DocsPage = () => (
  <PageWrapper>
    <Header />

    <Container extraClass={styles.page2col}>

      <div className={styles.col}>
        <PurchaseDetailLinks />
      </div>

      <div className={styles.col}>
        <PageHead title='Предварительный квалификационный отбор' bc1='Главная' bc2='Предварительный квалификационный отбор' />

        <DocumentCard>ПКО по видам работ, услуг №341: Техническое диагностирование, освидетельствование и мониторинг объектов организаций системы «Транснефть», расположенных на территории Российской Федерации</DocumentCard>
      </div>

    </Container>

    <Header bottom />

    <DevGrids/>
  </PageWrapper>
);
