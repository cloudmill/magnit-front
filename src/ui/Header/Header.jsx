import styles from "./Header.module.scss";
import classNames from "classnames";

import { Container } from "../Container/Container";

import { ReactComponent as Logo } from "../../assets/images/main-logo.svg";
import { ReactComponent as Question } from "../../assets/images/question.svg";
import { ReactComponent as Burger } from "../../assets/images/burger.svg";
import { HeaderNav } from "../HeaderNav/HeaderNav";
import { GreyButton } from "../Buttons/Buttons"; 


export const Header = ({ bottom }) => (
  <div className={classNames(styles.header, {[styles.bottom] : bottom})}>
  
    <Container extraClass={styles.headerContainer}>

      <Logo />
      <HeaderNav />

      <GreyButton extraClass={styles.headerButton}><Question /> Задать вопрос</GreyButton>

      <button className={styles.burger}><Burger/></button>

    </Container>
    
  </div>
);
