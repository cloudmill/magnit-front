import styles from "./Modals.module.scss";
import classNames from "classnames";
import AskModal from "./AskModal";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { close } from "../../store/index.ts";
import { BlackButton } from "../Buttons/Buttons";

const AskSuccessModal = () => {
  const dispatch = useDispatch();

  return <div className={styles.smallModal}>
    <h2 className={styles.ttl}>Заявка отправлена</h2>
    <div className={styles.txt}>Обратную связь вы получите <br/> на указанную электронную почту</div>
    <BlackButton 
      onClick={() => {
        dispatch(close());
        document.querySelector('body').style.overflow = '';
        }}>
      
      Ок
      
    </BlackButton>
  </div>
}

const PurchaseSuccessModal = () => {
  const dispatch = useDispatch();

  return <div className={styles.smallModal}>

      <h2 className={classNames(styles.ttl, styles.single)}>Сообщение отправлено</h2>

      <BlackButton 
        onClick={() => {
          dispatch(close());
          document.querySelector('body').style.overflow = '';
          }}>
        
        Ок
        
      </BlackButton>

    </div>
}

const modals = {
  form: <AskModal />,
  askSuccess: <AskSuccessModal />,
  purchaseSuccess: <PurchaseSuccessModal />,
};

function ModalsContainer(props) {
  const dispatch = useDispatch();

  const rootEl = useRef(null);

  const openModal = useSelector((state) => state.openModal);

  useEffect(() => {
    rootEl.current.addEventListener("click", (event) => {
      if (event.target.classList.contains("qweqweqwe")) {
        dispatch(close());
        document.querySelector('body').style.overflow = '';
      }
    });
  });

  return (
    <div
      ref={rootEl}
      className={classNames("qweqweqwe", styles.modalsContainer, {
        [styles.active]: openModal,
      })}
    >
      {openModal && modals[openModal]}
    </div>
  );
}

export default ModalsContainer;
