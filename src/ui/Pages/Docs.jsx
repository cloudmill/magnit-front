import styles from "../PurchaseDetail/PurchaseDetail.module.scss";
import { Container } from "../Container/Container";
import { PageWrapper } from "../PageWrapper/PageWrapper";
import { Header } from "../Header/Header";
import { PageHead } from "../PageHead/PageHead";
import { DevGrids } from "../DevGrids/DevGrids";
import { DocumentCard } from "../DocumentCard/DocumentCard";
import { DocsLinks } from "../DocsLinks/DocsLinks";
import { DocsSearch } from "../DocsSearch/DocsSearch";
import { DocsList } from "../DocsList/DocsList";
import { EmptySearch } from "../EmptySearch/EmptySearch";

export const DocsPage = () => (
  <PageWrapper>
    <Header />

    <Container extraClass={styles.page2col}>

      <div className={styles.col}>
        <DocsLinks/>
      </div>

      <div className={styles.col}>
        <PageHead title='Предварительный квалификационный отбор' bc1='Главная' bc2='Предварительный квалификационный отбор' />

        <DocsLinks extraClass={styles.onlyMobile} />

        <div className={styles.docsAbout}>ПКО по видам работ, услуг №340: Комплекс работ, услуг по совершенствованию сметно-нормативной базы, в том числе разработка государственных элементных сметных норм, федеральных единичных расценок, индексов, методик и т.д.</div>

        <DocsSearch/>

        <DocsList>

          <DocumentCard>ПКО по видам работ, услуг №341: Техническое диагностирование, освидетельствование и мониторинг объектов организаций системы «Транснефть», расположенных на территории Российской Федерации</DocumentCard>
          <DocumentCard>ПКО по видам работ, услуг №341: Техническое диагностирование, освидетельствование и мониторинг объектов организаций системы «Транснефть», расположенных на территории Российской Федерации</DocumentCard>

          <DocumentCard>ПКО по видам работ, услуг №339: Производство и наладка комплектов для доработки программного обеспечения и расширения систем автоматики технологических процессов и систем автоматики пожаротушения (СА ТП и СА ПТ) на объектах организаций системы «Транснефть»</DocumentCard>
          <DocumentCard>ПКО по видам работ, услуг №339: Производство и наладка комплектов для доработки программного обеспечения и расширения систем автоматики технологических процессов и систем автоматики пожаротушения (СА ТП и СА ПТ) на объектах организаций системы «Транснефть»</DocumentCard>

          <DocumentCard>ПКО по видам работ, услуг №341: Техническое диагностирование, освидетельствование и мониторинг объектов организаций системы «Транснефть», расположенных на территории Российской Федерации</DocumentCard>
          <DocumentCard>ПКО по видам работ, услуг №341: Техническое диагностирование, освидетельствование и мониторинг объектов организаций системы «Транснефть», расположенных на территории Российской Федерации</DocumentCard>
          
          <DocumentCard>ПКО по видам работ, услуг №339: Производство и наладка комплектов для доработки программного обеспечения и расширения систем автоматики технологических процессов и систем автоматики пожаротушения (СА ТП и СА ПТ) на объектах организаций системы «Транснефть»</DocumentCard>
          <DocumentCard>ПКО по видам работ, услуг №339: Производство и наладка комплектов для доработки программного обеспечения и расширения систем автоматики технологических процессов и систем автоматики пожаротушения (СА ТП и СА ПТ) на объектах организаций системы «Транснефть»</DocumentCard>

        </DocsList>

        <EmptySearch/>
        
      </div>

    </Container>

    <Header bottom />

    {/* <DevGrids/> */}
  </PageWrapper>
);
