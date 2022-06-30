import styles from "./ContactsForm.module.scss";
import classNames from "classnames";
import { ReactComponent as Clip } from "../../assets/images/clip.svg";
import { GreyButton, RedButton } from "../Buttons/Buttons";

export const ContactsForm = () => (
  <div className={classNames(styles.blockBottom, styles.block)}>
    <div className={classNames(styles.ttl, styles.onlyDesktop)}>Вы можете обратиться по вопросам сотрудничества <br/> с ПАО «Магнит», заполнив форму ниже</div>
    <div className={classNames(styles.ttl, styles.onlyMobile)}>Вы можете обратиться по вопросам сотрудничества с ПАО «Магнит», заполнив форму ниже</div>

    <form className={styles.form}>
      <input className={styles.input} type='text' placeholder="Название организации*"/>
      <input className={styles.input} type='number' placeholder="ИНН"/>
      <input className={styles.input} type='email' placeholder="E-mail*"/>
      <input className={styles.input} type='text' placeholder="ФИО*"/>
      <input className={classNames(styles.input, styles.fullWidth)} type='tel' placeholder="Телефон"/>
      <textarea className={styles.textarea} placeholder="Текст обращения*"/>

      <div className={styles.bottom}>
        <div className={styles.col}>
          <GreyButton type="file"><Clip/> Прикерпить файл</GreyButton>
          <div className={styles.note}>Допустимое расширение файлов: .ppt, .pptx, .doc, .docx, .xls, <br/> .xlsx, .pdf, .jpg, .jpeg, .png</div>
        </div>
        <div className={styles.col}>
          <div className={styles.checkbox}>
            <input className={styles.box} type="checkbox"/>
            <div className={styles.txt}>Согласен с условиями обработки <a href="/">персональных данных</a></div>
          </div>
          <RedButton type="submit">Отправить</RedButton>
        </div>
      </div>
    </form>
  </div>
);
