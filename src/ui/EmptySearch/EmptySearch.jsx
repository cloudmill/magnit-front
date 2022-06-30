import styles from "./EmptySearch.module.scss";

function EmptySearch() {

  return <div className={styles.block}>
    По запросу <span>«офисные кресла»</span> подходящих процедур нет. <br/>
    Поробуйте изменить критерий поиска.
  </div>
  
}

export { EmptySearch };
