import styles from "./ContactsRow.module.scss";
import { ReactComponent as ContactsTel } from "../../assets/images/contacts-tel.svg";

export const ContactsRow = ({ data }) =>
  data && (
    <div className={styles.row}>
      {data.map(({ NAME, PROPERTIES }, index) => (
        <div key={NAME + index} className={styles.col}>
          <div className={styles.ttl}>{NAME}</div>
          {PROPERTIES.PHONE.VALUE.map((value, index) => (
            <div key={value + index} className={styles.item}>
              <ContactsTel />
              <div>
                <a
                  href={`tel:${value}${
                    (PROPERTIES.PHONE.DESCRIPTION[index] &&
                      `,${PROPERTIES.PHONE.DESCRIPTION[index]}`) ||
                    ""
                  }`}
                >
                  {value}
                </a>
                {PROPERTIES.PHONE.DESCRIPTION[index] && (
                  <div className={styles.dop}>
                    доб. {PROPERTIES.PHONE.DESCRIPTION[index]}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
