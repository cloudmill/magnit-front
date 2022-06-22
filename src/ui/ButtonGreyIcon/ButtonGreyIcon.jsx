import styles from "./ButtonGreyIcon.module.scss";
import classNames from "classnames";

export const ButtonGreyIcon = ({ children, isActive, extraClass }) => (
  <button
    className={classNames([styles.buttonGreyIcon], { [styles.active]: isActive }, extraClass)}
  >
    <span className={styles.text}>{children}</span>
  </button>
);
