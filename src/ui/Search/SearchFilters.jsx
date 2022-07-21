import styles from "./Search.module.scss";

import { GreyButton } from "../Buttons/Buttons";

import { ReactComponent as Plus } from "../../assets/images/plus.svg";
import { ReactComponent as Reset } from "../../assets/images/reset.svg";
import { ReactComponent as TooltipIco } from "../../assets/images/tooltip.svg";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow-down.svg";
import { ReactComponent as CalendarIco } from "../../assets/images/calendar.svg";
import { ReactComponent as Tire } from "../../assets/images/tire-svg.svg";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { open } from "../../store/index.ts";

import { Select, DatePicker, Tooltip, ConfigProvider } from 'antd';

import moment from "moment";
import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import classNames from "classnames";

moment.locale("ru_RU", {
  week: {
    dow: 1
  },
  months : [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
    "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ],
  monthsShort : [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
    "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ],
  weekdays : [
    "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"
  ],
  weekdaysShort : [
    "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"
  ],
  weekdaysMin : [
    "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"
  ],
//   monthsShort : [
//     "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
//     "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
// ]
});

const { RangePicker } = DatePicker;
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

export function SearchFilters(props) {

  const dispatch = useDispatch();
  const [isClicked1, setActive1] = useState('no-active');
  const [isClicked2, setActive2] = useState('no-active');

  const onChange1 = (date, dateString) => {
    console.log(date, dateString);
    setActive1('active');
  };
  const onChange2 = (date, dateString) => {
    console.log(date, dateString);
    setActive2('active');
  };

  if (props.state === 'open') {
    
    return <ConfigProvider locale={locale}><div className={styles.filters}>

      <div>
        <div className={styles.name}>Площадка приема заявок</div>
        <Select
          className={styles.select}
          placeholder="Выбрать"
          onChange={handleChange}
          suffixIcon={<ArrowDown />} 
        >

          <Option value="option1">Опция 1</Option>
          <Option value="option2">Опция 2</Option>
          <Option value="option3">Опция 3</Option>

        </Select>
      </div>

      <div>
        <div className={styles.name}>Тип процедуры</div>
        <Select
          className={styles.select}
          placeholder="Выбрать"
          onChange={handleChange}
          suffixIcon={<ArrowDown />}
        >

          <Option value="option1">Опция 1</Option>
          <Option value="option2">Опция 2</Option>
          <Option value="option3">Опция 3</Option>

        </Select>
        
      </div>

      <div>
        <div className={styles.name}>Организатор</div>
        <Select
          className={styles.select}
          placeholder="Выбрать"
          onChange={handleChange}
          suffixIcon={<ArrowDown />}
        >

          <Option value="option1">Опция 1</Option>
          <Option value="option2">Опция 2</Option>
          <Option value="option3">Опция 3</Option>

        </Select>
      </div>

      <RangePicker 
        className={classNames(styles.datepicker, isClicked1 === 'no-active' ? 'noactive' : null)} 
        locale={locale} showToday={false} 
        placeholder={["Дата публикации", ""]} 
        format="DD.MM.YYYY" 
        suffixIcon={<CalendarIco/>}
        onChange={onChange1} 
        allowClear={false}
        // onClick={() => {setActive1('active')}} 
        separator={<Tire/>}
      />

      <div className={styles.filterPaddingTop}>
        <RangePicker 
          className={classNames(styles.datepicker, isClicked2 === 'no-active' ? 'noactive' : null)} 
          locale={locale} 
          showToday={false} 
          placeholder={["Дата окончания приема заявок", ""]} 
          format="DD.MM.YYYY" 
          suffixIcon={<CalendarIco/>} 
          onChange={onChange2}
          allowClear={false} 
          // onClick={() => {setActive2('active')}}
          separator={<Tire/>}
          />

          <div className={styles.pickerLinks}>

            <div 
              className={styles.item} 
              onClick={() => {console.log( moment() )}}
            >
              Сегодня
            </div>
            <div className={styles.item}>Завтра</div>
            <div className={styles.item}>Неделя</div>
          </div>
      </div>

      <div className={styles.filterPaddingBottom}>
        <div className={styles.name}>
          Классификатор ОКПД2
          <Tooltip 
            title="Общероссийский классификатор продукции по видам экономической деятельности" 
            placement="topRight" 
            arrowPointAtCenter={true} 
            color={'#FAFAFA'} 
            overlayInnerStyle={{color: '#121212', padding: '16px', borderRadius: '12px', background: '#FAFAFA', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)'}}>
            <TooltipIco/>
          </Tooltip>
        </div>

        <GreyButton extraClass={styles.filtersBtn} onClick={() => {
          dispatch(open('classifier'));
          document.querySelector('body').style.overflow = 'hidden';
        }}>
          <Plus/> Добавить
        </GreyButton>

      </div>
      
      <div className={styles.filterPaddingBottom}>

        <GreyButton extraClass={styles.filtersBtn}>
          
        <Reset/> Сбросить</GreyButton>

      </div>
      
    </div>
    </ConfigProvider>

  }

  return

}
