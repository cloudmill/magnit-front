import styles from "./HeaderNav.module.scss";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow-down.svg"; 

export const HeaderNav = ({ children }) => (
  <nav className={styles.headerNav}>
    <a className={styles.headerNav__item} href="/">Закупки и реализация</a>
    <div className={styles.headerNav__item} href="/">Документация <ArrowDown /></div>
    <a className={styles.headerNav__item} href="/">Контакты</a>
  </nav>
);
