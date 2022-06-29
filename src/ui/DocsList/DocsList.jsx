import styles from "./DocsList.module.scss";

export const DocsList = ({ children }) => (

  <div className={styles.block}>
    <div className={styles.top}>
      <div className={styles.label}>Название</div>
      <div className={styles.label}>Дата публикации</div>
    </div>

    {children}

  </div>

)
