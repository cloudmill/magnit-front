import styles from "./PageHead.module.scss"

export const PageHead = ({ title }) => (

  <>
    <div className={styles.breadcrumbs}>
      <a href="/">Главная</a>
      <div>Закупки и реализация</div>
    </div>

    <h1 className={styles.ttl}> { title } </h1>
  </>

);
