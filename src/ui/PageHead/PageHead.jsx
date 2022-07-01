import styles from "./PageHead.module.scss";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";

function PageHead(props) {

  if (props.bc3) {
    return <>

      <Breadcrumbs bc1={props.bc1} bc2={props.bc2} bc3={props.bc3} />

      <h1 className={styles.ttl}> { props.title } </h1>
    </>
  }

  return <>

          <Breadcrumbs bc1={props.bc1} bc2={props.bc2} />

          <h1 className={styles.ttl}> { props.title } </h1>
        </>

};

export { PageHead };
