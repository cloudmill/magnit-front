import styles from "./Modals.module.scss";
import classNames from "classnames";
import AskModal from "./AskModal";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { close } from "../../store/index.ts";

function ModalsContainer(props) {
  const dispatch = useDispatch();

  const rootEl = useRef(null);

  const isOpen = useSelector((state) => state.isOpen);

  useEffect(() => {
    rootEl.current.addEventListener("click", (event) => {
      if (event.target.classList.contains("qweqweqwe")) {
        dispatch(close());
      }
    });
  }, []);

  return (
    <div
      ref={rootEl}
      className={classNames("qweqweqwe", styles.modalsContainer, {
        [styles.active]: isOpen,
      })}
    >
      {isOpen && <AskModal />}
    </div>
  );
}

export default ModalsContainer;
