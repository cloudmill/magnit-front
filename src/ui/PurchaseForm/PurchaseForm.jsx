import styles from "../ContactsForm/ContactsForm.module.scss";
import styles2 from "./PurchaseForm.module.scss";
import classNames from "classnames";
import { RedSubmit, UploadBtn } from "../Buttons/Buttons";
import { useDispatch } from "react-redux";
import { open } from "../../store/index.ts";

import { Form, Input, Checkbox } from "antd";

function PurchaseForm(props) {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(open("purchaseSuccess"));
  };

  const onFinishModal = (values) => {
    console.log('Success:', values);
    dispatch(open("askSuccess"));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (props.inModal) {
    return (<>

    <h2 className={styles2.ttl} style={{ textAlign: "center" }}>
      {" "}
      {props.ttl}{" "}
    </h2>

    <Form
        className={classNames(styles.form, styles2.form)}
        name="ask form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinishModal}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >

        <Form.Item
          className={classNames(styles2.label)}
          name="organisation"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
        >
          <Input className={classNames(styles.input, styles2.input)} type='text' placeholder="Название организации*" />
        </Form.Item>

        <Form.Item
          className={classNames(styles2.label)}
          name="inn"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
        >
          <Input className={classNames(styles.input, styles2.input)} type='number' placeholder="ИНН" />
        </Form.Item>

        <Form.Item
          className={classNames(styles2.label)}
          name="mail"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
        >
          <Input className={classNames(styles.input, styles2.input)} type='email' placeholder="E-mail*" />
        </Form.Item>

        <Form.Item
          className={classNames(styles2.label)}
          name="fio"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
        >
          <Input className={classNames(styles.input, styles2.input)} type='text' placeholder="ФИО*" />
        </Form.Item>

        <Form.Item
          className={classNames(styles2.label, styles.fullWidth)}
          name="tel"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
        >
          <Input className={classNames(styles.input, styles2.input)} type='tel' placeholder="Телефон" />
        </Form.Item>

        <Form.Item
          className={styles.textareaLabel}
          name="message"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
          >
          <Input.TextArea className={styles.textarea} placeholder="Текст обращения*" />
        </Form.Item>
        
        <div className={classNames(styles.bottom, styles2.bottom)}>

          <div className={classNames(styles.col, styles2.col)} 
            style={{ flexDirection: "column", alignItems: "flex-start" }}>

            <UploadBtn/>

            <div className={classNames(styles.note)}
                style={{ marginTop: "12px" }}>
                
                Допустимое расширение файлов: .ppt, .pptx, .doc, .docx, .xls, .xlsx, .pdf, .jpg, .jpeg, .png</div>

          </div>

          <div className={classNames(styles.col, styles2.col2)}>

            <Form.Item
              name="remember"
              valuePropName="checked"
              style={{ marginBottom: "20px" }}
              >

              <Checkbox>
                <div className={styles.checkboxTxt}>Согласен с условиями обработки <a href="/">персональных данных</a>
                </div>
              </Checkbox>

            </Form.Item>

            <Form.Item>
              <RedSubmit/>
            </Form.Item>

          </div>

        </div>
 
      </Form>

      </>
    );
  }

  return (
    
    <div className={styles2.block}>

      <h2 className={styles2.ttl}>
        Данная процедура проводится через электронную почту.
        <br />
        Для участия заполните форму заявки ниже.
      </h2>

      <Form
        className={classNames(styles.form, styles2.form)}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >

        <Form.Item
          className={classNames(styles2.label)}
          name="username"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
        >
          <Input className={classNames(styles.input, styles2.input)} type='text' placeholder="Название организации*" />
        </Form.Item>

        <Form.Item
          className={classNames(styles2.label)}
          name="password"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
        >
          <Input className={classNames(styles.input, styles2.input)} type='number' placeholder="ИНН" />
        </Form.Item>

        <Form.Item
          className={classNames(styles2.label)}
          name="mail"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
        >
          <Input className={classNames(styles.input, styles2.input)} type='email' placeholder="E-mail*" />
        </Form.Item>

        <Form.Item
          className={classNames(styles2.label)}
          name="fio"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
        >
          <Input className={classNames(styles.input, styles2.input)} type='text' placeholder="ФИО*" />
        </Form.Item>

        <Form.Item
          className={classNames(styles2.label, styles.fullWidth)}
          name="tel"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
        >
          <Input className={classNames(styles.input, styles2.input)} type='tel' placeholder="Телефон" />
        </Form.Item>

        <Form.Item
          className={styles.textareaLabel}
          name="message"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
          >
          <Input.TextArea className={styles.textarea} placeholder="Текст обращения*" />
        </Form.Item>
        
        <div className={classNames(styles.bottom, styles2.bottom)}>

          <div className={classNames(styles.col, styles2.col)}>
            <UploadBtn/>

            <div className={classNames(
                  styles.note,
                  styles2.note,
                  styles.onlyDesktop
                )}>

                Допустимое расширение файлов: .ppt, .pptx, .doc, .docx, .xls, <br/> .xlsx, .pdf, .jpg, .jpeg, .png</div>

            <div className={classNames(
                  styles.note,
                  styles2.note,
                  styles.onlyMobile
                )}>
                
                Допустимое расширение файлов: .ppt, .pptx, .doc, .docx, .xls, .xlsx, .pdf, .jpg, .jpeg, .png</div>

          </div>

          <div className={classNames(styles.col, styles2.col2)}>

            <Form.Item
              name="remember"
              valuePropName="checked"
              >

              <Checkbox><div className={styles.checkboxTxt}>Согласен с условиями обработки <a href="/">персональных данных</a></div>
              </Checkbox>

            </Form.Item>
            <Form.Item>
              <RedSubmit/>
            </Form.Item>

          </div>

        </div>

      </Form>

    </div>
  );
}

export { PurchaseForm };
