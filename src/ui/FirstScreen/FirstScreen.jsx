import styles from "./FirstScreen.module.scss";
import { Container } from "../Container/Container";
import { ReactComponent as Success } from "../../assets/images/success.svg";

export const FirstScreen = () => (
  <section className={styles.firstScreen}>
    <Container extraClass={styles.firstScreen__container}>
      <div className={styles.firstScreen__col}>
        <h1 className={styles.firstScreen__ttl}>Некоммерческие закупки <br /> и реализация</h1>
        <p className={styles.firstScreen__txt}>Приглашаем принять участие в процедурах выбора контрагента на закупку  товаров, работ и услуг для собственных нужд Компании, а также в процедурах реализации вторсырья, оборудования, транспорта ПАО Магнит</p>
      </div>
      <div className={styles.firstScreen__col}>
        <ul className={styles.firstScreen__list}>
          <li><Success /> Участие бесплатное</li>
          <li><Success /> ЭЦП не требуется</li>
          <li><Success /> Процедуры проводятся на площадке B2B-Center.ru</li>
        </ul>
      </div>
    </Container>
  </section>
);
