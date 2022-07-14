import styles from "./DocsSearch.module.scss";
import formStyles from "../ContactsForm/ContactsForm.module.scss";
import { BlackButton } from "../Buttons/Buttons";
import { ReactComponent as SearchIco } from "../../assets/images/search.svg";

export const DocsSearch = ({ q, handleChange }) => (
  <div className={styles.block}>
    <input
      className={formStyles.input}
      type="search"
      placeholder="Введите ключевое слово"
      value={q}
      onChange={(event) => handleChange(event.target.value)}
    />
    <BlackButton>
      <SearchIco /> Найти
    </BlackButton>
  </div>
);
