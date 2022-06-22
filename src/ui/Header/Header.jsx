import styles from "./Header.module.scss";
import { Container } from "../Container/Container";

import { ReactComponent as Logo } from "../../assets/images/main-logo.svg";
import { HeaderNav } from "../HeaderNav/HeaderNav";
import { ButtonGreyIcon } from "../ButtonGreyIcon/ButtonGreyIcon"; 


export const Header = ({ children }) => (
  <div className={styles.header}>
    <Container extraClass={styles.headerContainer}>

      <Logo />
      <HeaderNav />

      <ButtonGreyIcon extraClass={styles.headerButton}>Задать вопрос</ButtonGreyIcon>

    </Container>
    
  </div>
);