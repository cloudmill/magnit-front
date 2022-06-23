import styles from "./Buttons.module.scss";
import classNames from "classnames";

const GreyButton = ({ children, isActive, extraClass }) => (
  <button
    className={classNames([styles.button], [styles.grey], { [styles.active]: isActive }, extraClass)}
  >
  {children}
  </button>
);

const BlackButton = ({ children, isActive, extraClass }) => (
  <button
    className={classNames([styles.button], [styles.black], { [styles.active]: isActive }, extraClass)}
  >
  {children}
  </button>
);

export { GreyButton, BlackButton };
