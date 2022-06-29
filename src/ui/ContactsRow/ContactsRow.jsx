import styles from "./ContactsRow.module.scss";
import { ReactComponent as ContactsTel } from "../../assets/images/contacts-tel.svg";

export const ContactsRow = () => (
  <div className={styles.row}>

    <div className={styles.col}>
      <div className={styles.ttl}>Группа компаний «Магнит»</div>
      <div className={styles.item}>
        <ContactsTel/>
        <a href="tel:+78002009002">8 800 200-90-02</a>
      </div>
    </div>

    <div className={styles.col}>

      <div className={styles.ttl}>Специалисты B2B-Center</div>
      <div className={styles.item}>
        <ContactsTel/>
        <div>
          <a href="tel:+74959898519">8 (495) 989-85-19</a>
          <div className={styles.dop}>доб. 7610</div>
        </div>
      </div>
      <div className={styles.item}>
        <ContactsTel/>
        <div>
          <a href="tel:+74959898519">8 (495) 989-85-19</a>
          <div className={styles.dop}>доб. 7620</div>
        </div>
      </div>

    </div>
  </div>
);
