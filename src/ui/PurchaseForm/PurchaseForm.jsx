import styles from "../ContactsForm/ContactsForm.module.scss";
import styles2 from "./PurchaseForm.module.scss";
import classNames from "classnames";
import { GreyButton, RedButton } from "../Buttons/Buttons";
import { ReactComponent as Clip } from "../../assets/images/clip.svg";

function PurchaseForm(props) {
  return <div className={styles2.block}>

    <h2 className={styles2.ttl}>Данная процедура проводится через электронную почту.<br/>
      Для участия заполните форму заявки ниже.</h2>

      <form className={classNames(styles.form, styles2.form)}>
        <input className={classNames(styles.input, styles2.input)} type='text' placeholder="Название организации*"/>
        <input className={classNames(styles.input, styles2.input)} type='number' placeholder="ИНН"/>
        <input className={classNames(styles.input, styles2.input)} type='text' placeholder="ФИО*"/>
        <input className={classNames(styles.input, styles2.input)} type='email' placeholder="E-mail*"/>
        <input className={classNames(styles.input, styles2.input)} type='tel' placeholder="Телефон"/>
        <textarea className={styles.textarea} placeholder="Текст обращения*"/>

        <div className={classNames(styles.bottom, styles2.bottom)}>
          <div className={classNames(styles.col, styles2.col)}>
            <GreyButton type="file"><Clip/> Прикерпить файл</GreyButton>
            <div className={classNames(styles.note, styles2.note, styles.onlyDesktop)}>Допустимое расширение файлов: .ppt, .pptx, .doc, .docx, .xls, <br/> .xlsx, .pdf, .jpg, .jpeg, .png</div>
            <div className={classNames(styles.note, styles2.note, styles.onlyMobile)}>Допустимое расширение файлов: .ppt, .pptx, .doc, .docx, .xls, .xlsx, .pdf, .jpg, .jpeg, .png</div>
          </div>
          <div className={classNames(styles.col, styles2.col2)}>
            <div className={styles.checkbox}>
              <input className={styles.box} type="checkbox"/>
              <div className={styles.txt}>Согласен с условиями обработки <a href="/">персональных данных</a></div>
            </div>
            <RedButton type="submit">Отправить</RedButton>
          </div>
        </div>
      </form>

  </div>
}

export { PurchaseForm };
