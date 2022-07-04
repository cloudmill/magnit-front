import styles from "./Search.module.scss";
import classNames from "classnames";

import { useState } from "react";
import { BlackButton, GreyButton } from "../Buttons/Buttons";
import { ReactComponent as Settings } from "../../assets/images/settings.svg";
import { ReactComponent as SearchIco } from "../../assets/images/search.svg";

function Search({ extraClass }) {

  const [isActive, setActive] = useState('purchases');

  return <div className={classNames(styles.Search, extraClass)}>

    <div className={styles.buttons}>

      <button 
        className={classNames(styles.label, isActive === 'purchases' ? [styles.active] : null)} 
        onClick={() => { setActive('purchases') }}>

        Закупки

      </button>

      <button 
        className={classNames(styles.label, isActive === 'sales' ? [styles.active] : null)} 
        onClick={() => { setActive('sales') }}>

        Реализация

      </button>
      
    </div>

    <div className={styles.row}>
      <input className={styles.input} type="text" placeholder="Введите ключевое слово" />
      <GreyButton extraClass={styles.button}><Settings/> Настроить поиск</GreyButton>
      <BlackButton extraClass={styles.button}><SearchIco/> Найти</BlackButton>
    </div>
    
  </div>

};

export { Search };
