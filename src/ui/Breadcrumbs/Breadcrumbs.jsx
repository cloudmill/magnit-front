import styles from "../PageHead/PageHead.module.scss";
import { ReactComponent as BcArrow } from "../../assets/images/breadcrumbs-arrow.svg";

function Breadcrumbs(props) {

  if (props.bc3) {
    return <div className={styles.breadcrumbs}>
            <a href="/" className={styles.item} > { props.bc1 } </a>
            <BcArrow />
            <a href="/" className={styles.item}> { props.bc2 } </a>
            <BcArrow />
            <div className={styles.item}> { props.bc3 } </div>
          </div>
  }

  return <div className={styles.breadcrumbs}>
            <a href="/" className={styles.item} > { props.bc1 } </a>
            <BcArrow />
            <div className={styles.item}> { props.bc2 } </div>
          </div>

}

export { Breadcrumbs };
