import styles from "./HeaderNav.module.scss";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow-down.svg";
import classNames from "classnames";
import { useState, useEffect, useRef } from "react";

export function HeaderNav(props) {

  const [isDropActive, setActiveDrop] = useState(false);

  const rootEl = useRef(null);

  useEffect(() => {
    window.addEventListener("click", ({ target }) => {
      const clickedDrop = target.closest(".drop");

      if (!(clickedDrop && clickedDrop === rootEl.current)) {
        setActiveDrop(false);
      }
      
    });
  }, []);

  return <nav className={classNames(styles.headerNav, {[styles.bottom] : props.bottom})}>

    <a className={styles.item} href="/"><span>Закупки и реализация</span></a>

    <div
      className={classNames(styles.item, styles.drop, 'drop', isDropActive === true ? [styles.active] : null)} 
      onClick={() => {isDropActive === false ? setActiveDrop(true) : setActiveDrop(false)}} 
      ref={rootEl} >
      
      <span>Документация</span> <ArrowDown />

      <div className={styles.dropInner}>
        <a href="/">Предварительный квалификационный отбор</a>
        <a href="/">Положение о закупках</a>
      </div>

    </div>

    <a className={styles.item} href="/"><span>Контакты</span></a>

  </nav>
};
