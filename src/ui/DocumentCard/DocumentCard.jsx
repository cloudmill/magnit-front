import styles from "./DocumentCard.module.scss";
import { ReactComponent as Download } from "../../assets/images/download.svg";

export const DocumentCard = ({ children }) => (

  <div className={styles.card}>
    <div className={styles.txt}> {children} </div>

    <div className={styles.col}>
      <div className={styles.date}>28.05.2022</div>
      <button className={styles.download}><Download/></button>
    </div>
  </div>

);