import styles from "./PageHead.module.scss";
import { ReactComponent as BcArrow } from "../../assets/images/breadcrumbs-arrow.svg";

export const PageHead = ({ title, bc1, bc2 }) => (

  <>
    <div className={styles.breadcrumbs}>
      <a href="/" className={styles.item} > { bc1 } </a>
      <BcArrow />
      <div className={styles.item}> { bc2 } </div>
    </div>

    <h1 className={styles.ttl}> { title } </h1>
  </>

);
