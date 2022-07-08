import styles from "./Modals.module.scss";
import classNames from "classnames";
import { PurchaseForm } from "../PurchaseForm/PurchaseForm";
import { useDispatch } from "react-redux";
import { close } from "../../store/index.ts";

function AskModal(props) {
  const dispatch = useDispatch();

  return <div className={classNames(styles.askModal)}>

    <PurchaseForm inModal="true" ttl="Задать вопрос"/>

    <button className={styles.close} onClick={() => {
      dispatch(close());
      document.querySelector('body').style.overflow = '';
    }}></button>

  </div>
  
}

export default AskModal;

