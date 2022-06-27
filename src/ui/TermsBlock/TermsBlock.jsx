import styles from "./TermsBlock.module.scss";
import { BlackButton } from "../Buttons/Buttons";

export const TermsBlock = () => (

  <div className={styles.TermsBlock}>

    <h2 className={styles.ttl}>Надеемся на дальнейшее плодотворное <br/> и взаимовыгодное сотрудничество</h2>

    <BlackButton extraClass={styles.btn}>Процедуры закупки и реализации ПАО Магнит</BlackButton>

  </div>

);
