import styles from "./InfoBlock.module.scss";
import { BlackButton } from "../Buttons/Buttons";
import { ReactComponent as Success } from "../../assets/images/success.svg";
import { ReactComponent as Tel } from "../../assets/images/tel.svg";

export const InfoBlock = () => (
  <div className={styles.InfoBlock}>
    <h2 className={styles.ttl}>Для участия в процедурах B2B-center</h2>

    <div className={styles.top}>
      <div className={styles.item}>
        <Success/>
        Пройдите регистрацию на B2B-center <a href="/">по ссылке</a>
      </div>
      <div className={styles.item}>
        <Success/>
        Участие бесплатное
      </div>
      <div className={styles.item}>
        <Success/>
        ЭЦП не требуется
      </div>
    </div>

    <div className={styles.bottom}>
      <div className={styles.col}>
        <div className={styles.col__ttl}>Технические вопросы</div>
        <div className={styles.txt}>По всем техническим вопросам участия в процедуре обращаться к специалистам B2B-center по телефону</div>
        <div className={styles.tel}>
          <Tel />
          <div className={styles.tel__col}>
            <a className={styles.number} href="tel:+74959898519">8 (495) 989-85-19</a>
            <div className={styles.dop}>доб. 7610, 7620</div>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.col__ttl}>Участие в процедуре</div>
        <div className={styles.txt}>Запросы к Заказчику процедуры подаются через функционал В2В-center в разделе соответствующей процедуры</div>
      </div>
      <div className={styles.col}>
        <div className={styles.col__ttl}>Будьте в курсе</div>
        <div className={styles.txt}>Чтобы не пропустить процедуры АО Тандер, настройте подписку в личном кабинете B2B-center</div>
        <BlackButton extraClass={styles.btn}>Инструкция</BlackButton>
      </div>
    </div>

  </div>
);
