import { Container } from "../Container/Container";
import { Header } from "../Header/Header";
import { PageHead } from "../PageHead/PageHead";
import { PageWrapper } from "../PageWrapper/PageWrapper";

export const ContactsPage = () => (
  <PageWrapper>
    <Header/>
    <Container>
      <PageHead title='Контакты' bc1='Главная' bc2='Контакты' />
    </Container>
    <Header bottom />
  </PageWrapper>
);