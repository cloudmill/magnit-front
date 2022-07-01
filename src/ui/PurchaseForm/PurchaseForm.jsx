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

        <label className={classNames(styles2.label)}>
          <input className={classNames(styles.input, styles2.input)} type='text' placeholder="Название организации*"/>
        </label>

        <label className={classNames(styles2.label)}>
          <input className={classNames(styles.input, styles2.input)} type='number' placeholder="ИНН"/>
        </label>

        <label className={classNames(styles2.label)}>
          <input className={classNames(styles.input, styles2.input)} type='text' placeholder="ФИО*"/>
        </label>

        <label className={classNames(styles2.label)}>
          <input className={classNames(styles.input, styles2.input)} type='email' placeholder="E-mail*"/>
        </label>

        <label className={classNames(styles2.label)}>
          <input className={classNames(styles.input, styles2.input, styles.error)} type='tel' placeholder="Телефон" value='7900'/>
          <div className={classNames(styles.inputError)}>Error text</div>
        </label>

        <textarea className={styles.textarea} placeholder="Текст обращения*"/>

        <div className={classNames(styles.bottom, styles2.bottom)}>
          <div className={classNames(styles.col, styles2.col)}>
            <GreyButton type="file"><Clip/> Прикерпить файл</GreyButton>
            <div className={classNames(styles.note, styles2.note, styles.onlyDesktop)}>Допустимое расширение файлов: .ppt, .pptx, .doc, .docx, .xls, <br/> .xlsx, .pdf, .jpg, .jpeg, .png</div>
            <div className={classNames(styles.note, styles2.note, styles.onlyMobile)}>Допустимое расширение файлов: .ppt, .pptx, .doc, .docx, .xls, .xlsx, .pdf, .jpg, .jpeg, .png</div>
          </div>

          <div className={classNames(styles.col, styles2.col2)}>
            <div className={styles.checkbox}>
            <label className={styles.boxLabel}>
              <input type="checkbox"/>

              <div className={styles.box}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 1L5 1C3.11438 1 2.17157 1 1.58579 1.58579C1 2.17157 1 3.11438 1 5V15C1 16.8856 1 17.8284 1.58579 18.4142C2.17157 19 3.11438 19 5 19H15C16.8856 19 17.8284 19 18.4142 18.4142C19 17.8284 19 16.8856 19 15V5C19 3.11438 19 2.17157 18.4142 1.58579C17.8284 1 16.8856 1 15 1Z" fill="#ED0E00" stroke="#ED0E00" stroke-width="2"/>
                  <path d="M6 10L9 13L14 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </label>
            <div className={styles.txt}>Согласен с условиями обработки <a href="/">персональных данных</a></div>
          </div>
            <RedButton type="submit">Отправить</RedButton>
          </div>
        </div>
      </form>

  </div>
}

export { PurchaseForm };
