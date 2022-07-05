import styles from "./MobileMenu.module.scss";
import headerStyles from "../Header/Header.module.scss";

import { Menu } from 'antd';
import { GreyButton } from "../Buttons/Buttons";
import { ReactComponent as Question } from "../../assets/images/question.svg";

import { useState } from 'react';
import { useDispatch } from "react-redux";
import { open } from "../../store/index.ts";

function getItem(label, key, children) {
  return {
    key,
    label,
    children,
  };
}

const items = [
  getItem(<a href="/">Закупки и реализация</a>, 'sub1'),

  getItem('Документация', 'sub2', [
    getItem(<a href="/">Предварительный квалификационный отбор</a>, '5'),
    getItem(<a href="/">Положение о закупках</a>, '6'),
  ]),

  getItem(<a href="/">Контакты</a>, 'sub4'),
];

export function MobileMenu(props) {

  const dispatch = useDispatch();

  const [current, setCurrent] = useState('1');  

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  
  return <div className={styles.menu} style={props.state === 'open' ? {transform: "translateY(100%)"} : null}>
  
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="inline"
      items={items}
    />

    <GreyButton
      extraClass={headerStyles.headerButton}
      onClick={() => {
        dispatch(open('form'));
        document.querySelector('body').style.overflow = 'hidden';
        }}
    >
      <Question /> Задать вопрос
    </GreyButton> 
  
  </div>

}
