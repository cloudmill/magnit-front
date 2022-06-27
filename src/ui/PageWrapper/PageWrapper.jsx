import styles from "./PageWrapper.module.scss";

export const PageWrapper = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);