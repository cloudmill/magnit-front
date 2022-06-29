import classNames from "classnames";
import styles from "./PurchaseBanner.module.scss";

export const PurchaseBanner = ({ extraClass }) => (

  <div className={classNames(styles.bg, extraClass)}>
    <div className={styles.txt}>Данная процедура проводится <br/> в электронной форме на b2b-<br/>center.ru. Для участия <br/> перейдите на <a href="b2b-center.ru">b2b-center.ru</a></div>
  </div>

);