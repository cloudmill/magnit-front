import styles from "./Search.module.scss";
import classNames from "classnames";

import { useState } from "react";
import { BlackButton, GreyButton } from "../Buttons/Buttons";
import { ReactComponent as Settings } from "../../assets/images/settings.svg";
import { ReactComponent as SearchIco } from "../../assets/images/search.svg";

import { SearchFilters } from "./SearchFilters";


function Search({ extraClass }) {

  const [isActive, setActive] = useState('purchases');
  const [isFilterOpen, setOpen] = useState('close');

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

    <div className={styles.inner}>
      <input className={styles.input} type="text" placeholder="Введите ключевое слово" />

      <GreyButton extraClass={styles.button} onClick={() => {isFilterOpen === 'open' ? setOpen('close') : setOpen('open')}}><Settings/> Настроить поиск</GreyButton>

      <BlackButton extraClass={styles.button}><SearchIco/> Найти</BlackButton>
    </div>

    <SearchFilters state={isFilterOpen} />
    

    </div>
  </div>

};

export { Search };
