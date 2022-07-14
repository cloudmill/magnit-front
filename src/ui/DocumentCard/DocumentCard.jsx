import styles from "./DocumentCard.module.scss";
import { ReactComponent as Download } from "../../assets/images/download.svg";
import classNames from "classnames";

export const DocumentCard = ({ title, date, href }) => (
  <div className={styles.card}>
    <div className={styles.txt}>
      <div className={classNames(styles.date, styles.onlyMobile)}>{date}</div>
      {title}
    </div>
    <div className={styles.col}>
      <div className={classNames(styles.date, styles.onlyDesktop)}>{date}</div>
      <a className={styles.download} href={href}>
        <Download />
      </a>
    </div>
  </div>
);
