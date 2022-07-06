import styles from "./Buttons.module.scss";
import classNames from "classnames";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow-down.svg";
import { ReactComponent as Clip } from "../../assets/images/clip.svg";
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

const BlackButton = ({ children, isActive, extraClass }) => (
  <button
    className={classNames(
      styles.button,
      styles.black,
      { [styles.active]: isActive },
      extraClass
    )}
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

const ArrowDownButton = ({ children, extraClass, isActive }) => (
  <button
    className={classNames(styles.button, styles.arrowDown, extraClass, {
      [styles.active]: isActive,
    })}
  >
    {children}
    <ArrowDown />
  </button>
);

function UploadBtn() {
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

  return <Upload {...props} fileList={fileList}>
    <Button className={classNames(styles.button, styles.grey)}>

      <Clip/> Прикрепить файл

    </Button>
  </Upload>
  
}

export { GreyButton, GreyButtonLink, BlackButton, RedButton, ArrowDownButton, UploadBtn };
