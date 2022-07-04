import { ContactsForm } from "../ContactsForm/ContactsForm";
import { ContactsRow } from "../ContactsRow/ContactsRow";
import { Container } from "../Container/Container";
import { Header } from "../Header/Header";
import { PageHead } from "../PageHead/PageHead";
import { PageWrapper } from "../PageWrapper/PageWrapper";

export const ContactsPage = () => (
  <PageWrapper>
    <Header/>
    <Container>
      <PageHead title='Контакты' bc1='Главная' bc2='Контакты' />

      <ContactsRow/>

      <ContactsForm/>

    </Container>
    <Header bottom />
    
  </PageWrapper>
);