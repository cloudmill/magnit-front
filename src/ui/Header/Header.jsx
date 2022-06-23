import styles from "./Header.module.scss";
import { Container } from "../Container/Container";

import { ReactComponent as Logo } from "../../assets/images/main-logo.svg";
import { ReactComponent as Question } from "../../assets/images/question.svg";
import { HeaderNav } from "../HeaderNav/HeaderNav";
import { GreyButton } from "../Buttons/Buttons"; 


export const Header = ({ children }) => (
  <div className={styles.header}>
    <Container extraClass={styles.headerContainer}>

      <Logo />
      <HeaderNav />

      <GreyButton extraClass={styles.headerButton}><Question /> Задать вопрос</GreyButton>

    </Container>
    
  </div>
);