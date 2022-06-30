import { RedButton } from "../Buttons/Buttons";
import styles from "./PurchaseDetailLinks.module.scss";
import { ReactComponent as ClockMark } from "../../assets/images/clock-mark.svg";
import classNames from "classnames";


export const PurchaseDetailLinks = ({ extraClass }) => (

  <div className={classNames(styles.purchaseLinks, extraClass)}>
    <div className={styles.top}>
      <div className={styles.status}>Прием заявок завершается</div>
      <div className={styles.info}>
        <ClockMark />
        <div className={styles.date}>03.06.2022</div>
        <div className={styles.time}>16:00 МСК</div>
      </div>
    </div>
    <div className={styles.items}>

      <div className={classNames(styles.item, styles.active)}>
        Описание
      </div>
      <div className={styles.item}>
        Условия
      </div>
      <div className={styles.item}>
        Контакты
      </div>
      <div className={styles.item}>
        Документы
      </div>

    </div>

    <div className={styles.bottom}>
      <RedButton>Подать заявку</RedButton>
    </div>
  </div>

);
