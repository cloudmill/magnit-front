import styles from "./ContactsRow.module.scss";
import { ReactComponent as ContactsTel } from "../../assets/images/contacts-tel.svg";

export const ContactsRow = ({ data }) =>
  data && (
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.ttl}>{data[0].NAME}</div>
        <div className={styles.item}>
          <ContactsTel />
          <a href={`tel:${data[0].PROPERTIES.PHONE.VALUE}`}>
            {data[0].PROPERTIES.PHONE.VALUE}
          </a>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.ttl}>{data[1].NAME}</div>
        {data[1].PROPERTIES.PHONE.VALUE.map((phone, index) => (
          <div key={phone + index} className={styles.item}>
            <ContactsTel />
            <div>
              <a
                href={`tel:${phone},${data[1].PROPERTIES.PHONE.DESCRIPTION[index]}`}
              >
                {phone}
              </a>
              <div className={styles.dop}>
                доб. {data[1].PROPERTIES.PHONE.DESCRIPTION[index]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
