import styles from "./Container.module.scss";
import classNames from "classnames";

export const Container = ({ children, extraClass }) => (
  <div className={classNames([styles.container], extraClass )}>{children}</div>
);
