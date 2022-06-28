import styles from "./PurchaseList.module.scss";
import classNames from "classnames";

export const PurchaseListTop = () => (

  <div className={styles.PurchaseListTop}>

    <div className={styles.count}><span className={styles.txt}>Процедур найдено: </span> <span>116</span></div>

    <div className={styles.pages}>
      <span className={styles.txt}>Показывать по:</span>
      <button className={classNames(styles.num, styles.active)}>10</button>
      <button className={styles.num}>30</button>
      <button className={styles.num}>50</button>
    </div>

  </div>

);