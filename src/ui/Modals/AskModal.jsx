import styles from "./Modals.module.scss";
import classNames from "classnames";
import { PurchaseForm } from "../PurchaseForm/PurchaseForm";

function AskModal(props) {

  return <div className={classNames(styles.askModal)}>

    <PurchaseForm inModal="true" ttl="Задать вопрос"/>

  </div>
  
}

export default AskModal;

