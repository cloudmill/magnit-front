import styles from "./Modals.module.scss";
import classNames from "classnames";
import AskModal from "./AskModal";

function ModalsContainer(props) {

  return <div className={classNames(styles.modalsContainer)}>

    <AskModal/>

  </div>
  
}

export default ModalsContainer;