import styles from "./404.module.scss";
import { GreyButtonLink } from "../Buttons/Buttons";

export const Block404 = () => (
  
  <div className={styles.container}>
    <div className={styles.block}>
      <div className={styles.big}>404</div>
      <div className={styles.txt}>Страница не найдена</div>

      <div className={styles.row}>
        <GreyButtonLink>Главная</GreyButtonLink>
        <GreyButtonLink>Закупочные процедуры</GreyButtonLink>
      </div>
    </div>
  </div>

);
