import styles from "./PageHead.module.scss";
import { ReactComponent as BcArrow } from "../../assets/images/breadcrumbs-arrow.svg";

function PageHead(props, {children}) {

  if (props.bc3) {
    return <>
      <div className={styles.breadcrumbs}>
        <a href="/" className={styles.item} > { props.bc1 } </a>
        <BcArrow />
        <div className={styles.item}> { props.bc2 } </div>
        <BcArrow />
        <div className={styles.item}> { props.bc3 } </div>
      </div>

      {children}

      <h1 className={styles.ttl}> { props.title } </h1>
    </>
  }

  return <>
          <div className={styles.breadcrumbs}>
            <a href="/" className={styles.item} > { props.bc1 } </a>
            <BcArrow />
            <div className={styles.item}> { props.bc2 } </div>
          </div>

          {children}

          <h1 className={styles.ttl}> { props.title } </h1>
        </>

};

export { PageHead };
