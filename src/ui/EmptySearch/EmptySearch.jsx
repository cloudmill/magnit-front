import styles from "./EmptySearch.module.scss";

function EmptySearch({ q }) {
  return (
    <div className={styles.block}>
      По запросу <span>{q}</span> подходящих процедур нет. <br />
      Поробуйте изменить критерий поиска.
    </div>
  );
}

export { EmptySearch };
