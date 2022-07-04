import styles from "./Header.module.scss";
import classNames from "classnames";

import { Container } from "../Container/Container";

import { ReactComponent as Logo } from "../../assets/images/main-logo.svg";
import { ReactComponent as Question } from "../../assets/images/question.svg";
import { ReactComponent as Burger } from "../../assets/images/burger.svg";
import { HeaderNav } from "../HeaderNav/HeaderNav";
import { GreyButton } from "../Buttons/Buttons";

import { useDispatch } from "react-redux";
import { open } from "../../store/index.ts";

function Header(props) {
  const dispatch = useDispatch();

  return (
    <div
      className={classNames(styles.header, { [styles.bottom]: props.bottom })}
    >
      <Container extraClass={styles.headerContainer}>
        <a className={styles.logo} href="/">
          <Logo />
        </a>

        <HeaderNav bottom={props.bottom} />

        <GreyButton
          extraClass={styles.headerButton}
          onClick={() => dispatch(open('login'))}
        >
          <Question /> Задать вопрос
        </GreyButton>

        <button className={styles.burger}>
          <Burger />
        </button>
      </Container>
    </div>
  );
}

export { Header };
