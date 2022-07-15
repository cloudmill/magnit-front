import styles from './ContactsForm.module.scss';
import classNames from 'classnames';
import { UploadBtn, RedSubmit } from '../Buttons/Buttons';
import { Form, Input, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { open } from '../../store/index.ts';

export function ContactsForm() {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(open('contactsSuccess'));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={classNames(styles.blockBottom, styles.block)}>
      <div className={classNames(styles.ttl, styles.onlyDesktop)}>
        Вы можете обратиться по вопросам сотрудничества <br /> с ПАО «Магнит»,
        заполнив форму ниже
      </div>
      <div className={classNames(styles.ttl, styles.onlyMobile)}>
        Вы можете обратиться по вопросам сотрудничества с ПАО «Магнит», заполнив
        форму ниже
      </div>

      <Form
        className={styles.form}
        name="contacts"
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
          name="orgName"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
        >
          <Input
            className={styles.input}
            type="text"
            placeholder="Название организации*"
          />
        </Form.Item>

        <Form.Item
          className={styles.label}
          // label="Password"
          name="inn"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
        >
          <Input className={styles.input} type="number" placeholder="ИНН" />
        </Form.Item>

        <Form.Item
          className={styles.label}
          // label="Password"
          name="email"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
        >
          <Input className={styles.input} type="email" placeholder="E-mail*" />
        </Form.Item>

        <Form.Item
          className={styles.label}
          // label="Password"
          name="name"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
        >
          <Input className={styles.input} type="text" placeholder="ФИО*" />
        </Form.Item>

        <Form.Item
          className={classNames(styles.label, styles.fullWidth)}
          // label="Password"
          name="phone"
          rules={[
            {
              required: true,
              message: 'Обязательное поле',
            },
          ]}
        >
          <Input className={styles.input} type="tel" placeholder="Телефон" />
        </Form.Item>

        <Input.TextArea
          className={styles.textarea}
          placeholder="Текст обращения*"
        />

        <div className={styles.bottom}>
          <div className={classNames(styles.col)}>
            <UploadBtn />

            <div className={classNames(styles.note, styles.onlyDesktop)}>
              Допустимое расширение файлов: .ppt, .pptx, .doc, .docx, .xls,{' '}
              <br /> .xlsx, .pdf, .jpg, .jpeg, .png
            </div>

            <div className={classNames(styles.note, styles.onlyMobile)}>
              Допустимое расширение файлов: .ppt, .pptx, .doc, .docx, .xls,
              .xlsx, .pdf, .jpg, .jpeg, .png
            </div>
          </div>

          <div className={classNames(styles.col)}>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>
                <div className={styles.checkboxTxt}>
                  Согласен с условиями обработки{' '}
                  <a href="/">персональных данных</a>
                </div>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <RedSubmit />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
}
