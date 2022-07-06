import styles from "./ContactsForm.module.scss";
import classNames from "classnames";
import { ReactComponent as Clip } from "../../assets/images/clip.svg";
import { GreyButton, RedButton, UploadBtn } from "../Buttons/Buttons";
import { Form, Input, Checkbox, Button, Upload } from "antd";
import { useState } from "react";

// const { TextArea } = Input;

export function ContactsForm() {

  const [fileList, setFileList] = useState([]);

  const handleChange = (info) => {
    let newFileList = [...info.fileList];

    newFileList = fileList.slice(-2);

    newFileList = fileList.map((file) => {
      if (file.response) {
        
        file.url = file.response.url;
      }

      return file;
    });
    setFileList(newFileList);
  };

  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: handleChange,
    multiple: true,
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return <div className={classNames(styles.blockBottom, styles.block)}>

    <div className={classNames(styles.ttl, styles.onlyDesktop)}>Вы можете обратиться по вопросам сотрудничества <br/> с ПАО «Магнит», заполнив форму ниже</div>
    <div className={classNames(styles.ttl, styles.onlyMobile)}>Вы можете обратиться по вопросам сотрудничества с ПАО «Магнит», заполнив форму ниже</div>

    <Form
      className={styles.form}
      name="basic"
      // labelCol={{
      //   span: 8,
      // }}
      // wrapperCol={{
      //   span: 16,
      // }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

      <Form.Item
        className={styles.label}
        // label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Обязательное поле',
          },
        ]}
      >
        <Input className={styles.input} type='text' placeholder="Название организации*" />
      </Form.Item>

      <Form.Item
        className={styles.label}
        // label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Обязательное поле',
          },
        ]}
      >
        <Input className={styles.input} type='number' placeholder="ИНН" />
      </Form.Item>

      <Form.Item
        className={styles.label}
        // label="Password"
        name="mail"
        rules={[
          {
            required: true,
            message: 'Обязательное поле',
          },
        ]}
      >
        <Input className={styles.input} type='email' placeholder="E-mail*" />
      </Form.Item>

      <Form.Item
        className={styles.label}
        // label="Password"
        name="fio"
        rules={[
          {
            required: true,
            message: 'Обязательное поле',
          },
        ]}
      >
        <Input className={styles.input} type='text' placeholder="ФИО*" />
      </Form.Item>

      <Form.Item
        className={classNames(styles.label, styles.fullWidth)}
        // label="Password"
        name="tel"
        rules={[
          {
            required: true,
            message: 'Обязательное поле',
          },
        ]}
      >
        <Input className={styles.input} type='tel' placeholder="Телефон" />
      </Form.Item>

      <Input.TextArea className={styles.textarea} placeholder="Текст обращения*" />
      
      <div className={styles.bottom}>

        <div className={styles.col}>
          <UploadBtn/>
          <div className={classNames(styles.note, styles.onlyDesktop)}>Допустимое расширение файлов: .ppt, .pptx, .doc, .docx, .xls, <br/> .xlsx, .pdf, .jpg, .jpeg, .png</div>
          <div className={classNames(styles.note, styles.onlyMobile)}>Допустимое расширение файлов: .ppt, .pptx, .doc, .docx, .xls, .xlsx, .pdf, .jpg, .jpeg, .png</div>
        </div>

        <div className={styles.col}>

          <label className={styles.checkbox}>
            <div className={styles.boxLabel}>
              <input type="checkbox" required/>

              <div className={styles.box}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 1L5 1C3.11438 1 2.17157 1 1.58579 1.58579C1 2.17157 1 3.11438 1 5V15C1 16.8856 1 17.8284 1.58579 18.4142C2.17157 19 3.11438 19 5 19H15C16.8856 19 17.8284 19 18.4142 18.4142C19 17.8284 19 16.8856 19 15V5C19 3.11438 19 2.17157 18.4142 1.58579C17.8284 1 16.8856 1 15 1Z" fill="#ED0E00" stroke="#ED0E00" stroke-width="2"/>
                  <path d="M6 10L9 13L14 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.txt}>Согласен с условиями обработки <a href="/">персональных данных</a></div>
          </label>
          <RedButton type="submit">Отправить</RedButton>

          {/* <Form.Item
            name="remember"
            valuePropName="checked"
          >
            <Checkbox><div className={styles.txt}>Согласен с условиями обработки <a href="/">персональных данных</a></div></Checkbox>

          </Form.Item>
          <Form.Item
          >
            <Button type="primary" htmlType="submit">
              Отправить
            </Button>
          </Form.Item> */}
        </div>

      </div>

      
    </Form>

    

    {/* <form className={styles.form}>

      <label className={styles.label}>
        <input className={styles.input} type='text' placeholder="Название организации*"/>
      </label>
      
      <label className={styles.label}>
        <input className={styles.input} type='number' placeholder="ИНН"/>
      </label>

      <label className={styles.label}>
        <input className={styles.input} type='email' placeholder="E-mail*"/>
      </label>

      <label className={styles.label}>
        <input className={styles.input} type='text' placeholder="ФИО*"/>
      </label>

      <label className={classNames(styles.label, styles.fullWidth)}>
        <input className={classNames(styles.input, styles.fullWidth, styles.error)} type='tel' placeholder="Телефон" value='7900'/>
        <div className={classNames(styles.inputError)}>Error text</div>
      </label>
      
      <textarea className={styles.textarea} placeholder="Текст обращения*"/>

      <div className={styles.bottom}>

        <div className={styles.col}>
          <GreyButton type="file"><Clip/> Прикерпить файл</GreyButton>

          <div className={classNames(styles.note, styles.onlyDesktop)}>Допустимое расширение файлов: .ppt, .pptx, .doc, .docx, .xls, <br/> .xlsx, .pdf, .jpg, .jpeg, .png</div>
          <div className={classNames(styles.note, styles.onlyMobile)}>Допустимое расширение файлов: .ppt, .pptx, .doc, .docx, .xls, .xlsx, .pdf, .jpg, .jpeg, .png</div>
        </div>

        <div className={styles.col}>
          <label className={styles.checkbox}>
            <div className={styles.boxLabel}>
              <input type="checkbox"/>

              <div className={styles.box}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 1L5 1C3.11438 1 2.17157 1 1.58579 1.58579C1 2.17157 1 3.11438 1 5V15C1 16.8856 1 17.8284 1.58579 18.4142C2.17157 19 3.11438 19 5 19H15C16.8856 19 17.8284 19 18.4142 18.4142C19 17.8284 19 16.8856 19 15V5C19 3.11438 19 2.17157 18.4142 1.58579C17.8284 1 16.8856 1 15 1Z" fill="#ED0E00" stroke="#ED0E00" stroke-width="2"/>
                  <path d="M6 10L9 13L14 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.txt}>Согласен с условиями обработки <a href="/">персональных данных</a></div>
          </label>
          <RedButton type="submit">Отправить</RedButton>
        </div>

      </div>
    </form> */}

  </div>
};
