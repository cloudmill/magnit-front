import styles from "./PurchaseList.module.scss";
import classNames from "classnames";

import { GreyButton } from "../Buttons/Buttons";

export const PurchaseList = ({ children, extraClass }) => (
  <div className={classNames(styles.PurchaseList, extraClass)}>
    <div className={styles.top}>
      <div className={styles.col}>Тип и наименование</div>
      <div className={styles.col}>Площадка приема заявок</div>
      <div className={styles.col}>Прием заявок завершается</div>
    </div>

    {children}
    
    <GreyButton extraClass={styles.btn}>Смотреть все</GreyButton>
  </div>
);
