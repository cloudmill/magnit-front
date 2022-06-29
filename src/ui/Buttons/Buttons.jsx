import styles from "./Buttons.module.scss";
import classNames from "classnames";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow-down.svg";

const GreyButton = ({ children, isActive, extraClass }) => (
  <button
    className={classNames(styles.button, styles.grey, { [styles.active]: isActive }, extraClass)}
  >
  {children}
  </button>
);

const GreyButtonLink = ({ children, isActive, extraClass }) => (
  <a href="/"
    className={classNames(styles.button, styles.grey, { [styles.active]: isActive }, extraClass)}
  >
  {children}
  </a>
);

const BlackButton = ({ children, isActive, extraClass }) => (
  <button
    className={classNames(styles.button, styles.black, { [styles.active]: isActive }, extraClass)}
  >
  {children}
  </button>
);

const RedButton = ({ children, extraClass, isActive }) => (
  <button
    className={classNames(styles.button, styles.red, extraClass, { [styles.active]: isActive })}
  >
  {children}
  </button>
);

const ArrowDownButton = ({ children, extraClass, isActive }) => (
  <button
    className={classNames(styles.button, styles.arrowDown, extraClass, { [styles.active]: isActive })}
  >
  {children}
  <ArrowDown/>
  </button>
);

export { GreyButton, GreyButtonLink, BlackButton, RedButton, ArrowDownButton };
