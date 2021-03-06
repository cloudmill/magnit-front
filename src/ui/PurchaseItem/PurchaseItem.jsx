import styles from "./PurchaseItem.module.scss";
import { ReactComponent as GeoMark } from "../../assets/images/geo-mark.svg";
import { ReactComponent as ClockMark } from "../../assets/images/clock-mark.svg";

export const PurchaseItem = () => (

  <a href="/" className={styles.PurchaseItem}>

    <div className={styles.col1}>
      <div className={styles.ttl}>Запрос предложений № 3001592</div>
      <div className={styles.txt}>Поставка контейнеров для мусора на колесах с педалью, 120 л, RAL 6020 (заказ) по потребности ТБ ГМ Магнит в 3 квартале 2022 года. Поставка контейнеров для мусора на колесах с педалью, 120 л, RAL 6020 (заказ) по потребности ТБ ГМ Магнит в 3 квартале 2022 года.</div>
    </div>

    <div className={styles.info}>

      <div className={styles.col2}>
        <div className={styles.mob_ttl}>Площадка приема заявок</div>
        <GeoMark />
        <div className={styles.txt}>ЭТП B2B-Center</div>
      </div>

      <div className={styles.col3}>
        <div className={styles.mob_ttl}>Прием заявок завершается</div>
        <ClockMark />
        <div className={styles.txt}>03.06.2022</div>
        <div className={styles.txt}>16:00 МСК</div>
      </div>

    </div>

  </a>

);
