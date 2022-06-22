import styles from "./Button.module.scss";
import classNames from "classnames";

export const Button = ({ children, isActive }) => (
  <button
    className={classNames([styles.button], { [styles.active]: isActive })}
  >
    <span className={styles.text}>{children}</span>
  </button>
);
