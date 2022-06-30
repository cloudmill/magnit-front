import styles from "./DocumentCard.module.scss";
import { ReactComponent as Download } from "../../assets/images/download.svg";
import classNames from "classnames";

export const DocumentCard = ({ children }) => (

  <div className={styles.card}>
    <div className={styles.txt}> 
      <div className={classNames(styles.date, styles.onlyMobile)}>28.05.2022</div>
      {children}
    </div>

    <div className={styles.col}>
      <div className={classNames(styles.date, styles.onlyDesktop)}>28.05.2022</div>
      <button className={styles.download}><Download/></button>
    </div>
  </div>

);