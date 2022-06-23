import styles from "./Search.module.scss";
import classNames from "classnames";

import { BlackButton, GreyButton } from "../Buttons/Buttons";
import { ReactComponent as Settings } from "../../assets/images/settings.svg";
import { ReactComponent as SearchIco } from "../../assets/images/search.svg";

export const Search = () => (

  <div className={styles.Search}>

    <div className={styles.buttons}>
      <button className={classNames(styles.label, styles.active)}>Закупки</button>
      <button  className={styles.label}>Реализация</button>
    </div>

    <div className={styles.row}>
      <input className={styles.input} type="text" placeholder="Введите ключевое слово" />
      <GreyButton extraClass={styles.button}><Settings/> Настроить поиск</GreyButton>
      <BlackButton extraClass={styles.button}><SearchIco/> Найти</BlackButton>
    </div>
    
  </div>

);
