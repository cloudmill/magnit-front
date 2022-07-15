import { useEffect } from "react";
import { useState } from "react";
import { ContactsForm } from "../ContactsForm/ContactsForm";
import { ContactsRow } from "../ContactsRow/ContactsRow";
import { Container } from "../Container/Container";
import { Header } from "../Header/Header";
import { PageHead } from "../PageHead/PageHead";
import { PageWrapper } from "../PageWrapper/PageWrapper";

export const ContactsPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      fetch("https://nkz.devmill.ru/contacts/").then((response) => {
        response.json().then((json) => {
          const { data } = json;
          console.log(data);
          setData(data);
        });
      });
    } catch (error) {
      console.error("contacts", error);
    }
  }, []);

  return (
    <PageWrapper>
      <Header />
      <Container>
        <PageHead title="Контакты" bc1="Главная" bc2="Контакты" />

        <ContactsRow {...{ data }} />

        <ContactsForm />
      </Container>
      <Header bottom />
    </PageWrapper>
  );
};
