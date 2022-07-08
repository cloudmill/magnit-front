import styles from "./PurchaseList.module.scss";
import classNames from "classnames";

import { GreyButton } from "../Buttons/Buttons";

export function PurchaseList(props) {

  if (props.onMain === true) {

    return <div className={classNames(styles.PurchaseList, props.extraClass)}>
    <div className={styles.top}>
      <div className={styles.col}>Тип и наименование</div>
      <div className={styles.col}>Площадка приема заявок</div>
      <div className={styles.col}>Прием заявок завершается</div>
    </div>

    {props.children}
    
    <GreyButton extraClass={styles.btn}>Смотреть все</GreyButton>

    </div>
    
  }

  return <div className={classNames(styles.PurchaseList, props.extraClass)}>
    <div className={styles.top}>
      <div className={styles.col}>Тип и наименование</div>
      <div className={styles.col}>Площадка приема заявок</div>
      <div className={styles.col}>Прием заявок завершается</div>
    </div>

    {props.children}

  </div>
};
