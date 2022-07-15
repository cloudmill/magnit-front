import styles from "../PurchaseDetail/PurchaseDetail.module.scss";
import { Container } from "../Container/Container";
import { PageWrapper } from "../PageWrapper/PageWrapper";
import { Header } from "../Header/Header";
import ttlStyle from "../PageHead/PageHead.module.scss";
import { DocumentCard } from "../DocumentCard/DocumentCard";
import { DocsLinks } from "../DocsLinks/DocsLinks";
import { DocsSearch } from "../DocsSearch/DocsSearch";
import { DocsList } from "../DocsList/DocsList";
import { EmptySearch } from "../EmptySearch/EmptySearch";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";

import { useState, useEffect, useCallback } from "react";

export const DocsPage = () => {
  const [q, setQ] = useState("");
  const [docs, setDocs] = useState([]);

  const handleChange = useCallback((q) => setQ(q), []);

  useEffect(() => {
    (async () => {
      try {
        console.log(q.length ? "qwe" : "ewq");

        const response = await fetch(
          `https://nkz.devmill.ru/docs/predvaritelnyy-kvalifikatsionnyy-otbor/${
            (q && `?q=${q}`) || ""
          }`
        );
        const json = await response.json();

        setDocs(
          json.data.map(({ DATE_ACTIVE_FROM, FILE, NAME }) => ({
            title: NAME,
            href: FILE,
            date: DATE_ACTIVE_FROM,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [q]);

  return (
    <PageWrapper>
      <Header />

      <Container extraClass={styles.page2col}>
        <div className={styles.col}>
          <DocsLinks />
        </div>

        <div className={styles.col}>
          <Breadcrumbs
            bc1="Главная"
            bc2="Предварительный квалификационный отбор"
          />

          <DocsLinks extraClass={styles.onlyMobile} />

          <h1 className={ttlStyle.ttl}>
            {" "}
            Предварительный квалификационный отбор{" "}
          </h1>

          <div className={styles.docsAbout}>
            ПКО по видам работ, услуг №340: Комплекс работ, услуг по
            совершенствованию сметно-нормативной базы, в том числе разработка
            государственных элементных сметных норм, федеральных единичных
            расценок, индексов, методик и т.д.
          </div>

          <DocsSearch {...{ q, handleChange }} />

          {(docs.length && (
            <DocsList>
              {docs.map((doc) => (
                <DocumentCard key={doc.title} {...doc} />
              ))}
            </DocsList>
          )) || <EmptySearch q={q} />}
        </div>
      </Container>

      <Header bottom />
    </PageWrapper>
  );
};
