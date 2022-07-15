import styles from "./Buttons.module.scss";
import classNames from "classnames";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow-down.svg";
import { ReactComponent as Clip } from "../../assets/images/clip.svg";
import { ReactComponent as Trash } from "../../assets/images/trash-ico.svg";
import { Button, Upload } from "antd";
import { useState } from "react";

const GreyButton = ({ children, isActive, extraClass, type, onClick }) => (
  <button
    onClick={onClick}
    className={classNames(
      styles.button,
      styles.grey,
      { [styles.active]: isActive },
      extraClass
    )}
    type={type}
  >
    {children}
  </button>
);

const GreyButtonLink = ({ children, isActive, extraClass }) => (
  <a
    href="/"
    className={classNames(
      styles.button,
      styles.grey,
      { [styles.active]: isActive },
      extraClass
    )}
  >
    {children}
  </a>
);

const BlackButton = ({ children, isActive, extraClass, onClick }) => (
  <button
    className={classNames(
      styles.button,
      styles.black,
      { [styles.active]: isActive },
      extraClass
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

const RedButton = ({ children, extraClass, isActive, type, onClick }) => (
  <button
    className={classNames(styles.button, styles.red, extraClass, {
      [styles.active]: isActive,
    })}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

const ArrowDownButton = ({ children, extraClass, isActive, onClick }) => (
  <button
    className={classNames(styles.button, styles.arrowDown, extraClass, {
      [styles.active]: isActive,
    })}
    onClick={onClick}
  >
    {children}
    <ArrowDown />
  </button>
);

function UploadBtn() {
  const [fileList, setFileList] = useState();

  const handleChange = (info) => {
    // let newFileList = [...info.fileList];
    console.log(info);
    // newFileList = fileList.slice(-2);

    // newFileList = fileList.map((file) => {
    //   if (file.response) {
        
    //     file.url = file.response.url;
    //   }

    //   return file;
    // });
    // setFileList(newFileList);
  };

  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: handleChange,
    multiple: true,

    defaultFileList: [
      // {
      //   uid: '1',
      //   name: 'filename.jpg',
      //   status: 'done',
      //   response: 'Server Error 500',
      //   url: 'http://www.baidu.com/xxx.png',
      // },
      // {
      //   uid: '2',
      //   name: 'filename2.jpg',
      //   status: 'done',
      //   url: 'http://www.baidu.com/yyy.png',
      // },
    ],
    showUploadList: {
      showRemoveIcon: true,
      removeIcon: <Trash/>,
    },
  };

  return <Upload {...props} fileList={fileList}>
    <Button className={classNames(styles.button, styles.grey)}>

      <Clip/> Прикрепить файл

    </Button>
  </Upload>
  
}

function RedSubmit(props) {
  return <Button
    type="primary" 
    htmlType="submit" 
    className={classNames(styles.button, styles.red, props.extraClass, )} 
    onClick={props.onClick}>

      Отправить
      
    </Button>
}

export { GreyButton, GreyButtonLink, BlackButton, RedButton, ArrowDownButton, UploadBtn, RedSubmit };
