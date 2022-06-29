import styles from "./DocsSearch.module.scss";
import formStyles from "../ContactsForm/ContactsForm.module.scss";
import { BlackButton } from "../Buttons/Buttons";
import { ReactComponent as SearchIco } from "../../assets/images/search.svg";

export const DocsSearch = () => (

  <div className={styles.block}>
    <input className={formStyles.input} type="search" placeholder="Введите ключевое слово"/>
    <BlackButton><SearchIco/> Найти</BlackButton>
  </div>

);