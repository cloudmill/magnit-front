import styles from "./DevGrids.module.scss"
import { Container } from "../Container/Container";

export const DevGrids = () => (
  <div className={styles.devGrids}>
    <Container>
      <div className={styles.devGrids__row}>
        <div className={styles.devGrids__col}></div>
        <div className={styles.devGrids__col}></div>
        <div className={styles.devGrids__col}></div>
        <div className={styles.devGrids__col}></div>
        <div className={styles.devGrids__col}></div>
        <div className={styles.devGrids__col}></div>
        <div className={styles.devGrids__col}></div>
        <div className={styles.devGrids__col}></div>
        <div className={styles.devGrids__col}></div>
        <div className={styles.devGrids__col}></div>
        <div className={styles.devGrids__col}></div>
        <div className={styles.devGrids__col}></div>
      </div>
    </Container>
  </div>
)
