import styles from "./DocsLinks.module.scss";
import classNames from "classnames";

export const DocsLinks = () => (
  <div className={styles.block}>
    <div className={classNames(styles.item, styles.active)}>Предварительный квалификационный отбор</div>
    <div className={styles.item}>Положение о закупках</div>
  </div>
);