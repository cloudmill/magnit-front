import styles from "./Modals.module.scss";
import classNames from "classnames";
import AskModal from "./AskModal";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { open, close } from "../../store/index.ts";

const LoginModal = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(open('form'))}>to form</button>
}

const modals = {
  form: <AskModal />,
  login: <LoginModal />,
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
  }, []);

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
