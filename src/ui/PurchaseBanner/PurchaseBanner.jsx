import classNames from "classnames";
import styles from "./PurchaseBanner.module.scss";

export const PurchaseBanner = ({ extraClass }) => (

  <div className={classNames(styles.bg, extraClass)}>

    <div className={classNames(styles.txt, styles.onlyDesktop)}>Данная процедура проводится <br/> в электронной форме на b2b-<br/>center.ru. Для участия и <br/> уточнения информации <br/> перейдите на <a href="b2b-center.ru">b2b-center.ru</a></div>

    <div className={classNames(styles.txt, styles.onlyMobile)}>Данная процедура проводится в <br/> электронной форме на b2b-center.ru. <br/> Для участия и уточнения информации <br/> перейдите на <a href="b2b-center.ru">b2b-center.ru</a></div>

  </div>

);

