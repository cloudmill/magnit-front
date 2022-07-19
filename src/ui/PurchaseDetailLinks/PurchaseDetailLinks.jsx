import { RedButton } from "../Buttons/Buttons";
import styles from "./PurchaseDetailLinks.module.scss";
import { ReactComponent as ClockMark } from "../../assets/images/clock-mark.svg";
import classNames from "classnames";
import { useState } from "react";


export const PurchaseDetailLinks = ({ extraClass }) => {

  const [activePoint, setActive] = useState('description')

  return <div className={classNames(styles.purchaseLinks, extraClass)}>
    <div className={styles.top}>
      <div className={styles.status}>Прием заявок завершается</div>
      <div className={styles.info}>
        <ClockMark />
        <div className={styles.date}>03.06.2022</div>
        <div className={styles.time}>16:00 МСК</div>
      </div>
    </div>
    <div className={styles.items}>

      <div 
        className={classNames(styles.item, activePoint === 'description' ? styles.active : null)}
        onClick={() => {setActive('description')}}>
        Описание
      </div>
      <div 
        className={classNames(styles.item, activePoint === 'terms' ? styles.active : null)}
        onClick={() => {setActive('terms')}}>
        <a href="#terms">Условия</a>
      </div>
      <div 
        className={classNames(styles.item, activePoint === 'contacts' ? styles.active : null)}
        onClick={() => {setActive('contacts')}}>
        <a href="#contacts">Контакты</a>
      </div>
      <div 
        className={classNames(styles.item, activePoint === 'docs' ? styles.active : null)}
        onClick={() => {setActive('docs')}}>
        <a href="#docs">Документы</a>
      </div>

    </div>

    <div className={styles.bottom}>
      <a href="#form">
        <RedButton>Подать заявку</RedButton>
      </a>
    </div>
  </div>

};
