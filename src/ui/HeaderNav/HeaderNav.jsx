import styles from "./HeaderNav.module.scss";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow-down.svg";
import classNames from "classnames";

function HeaderNav(props) {
  return <nav className={classNames(styles.headerNav, {[styles.bottom] : props.bottom})}>
    <a className={styles.item} href="/">Закупки и реализация</a>
    <div className={classNames(styles.item, styles.drop)}>Документация <ArrowDown />
      <div className={styles.dropInner}>
        <a href="/">Предварительный квалификационный отбор</a>
        <a href="/">Положение о закупках</a>
      </div>
    </div>
    <a className={styles.item} href="/">Контакты</a>
  </nav>
};

export { HeaderNav };
