import styles from "./Search.module.scss";

import { GreyButton } from "../Buttons/Buttons";

import { ReactComponent as Plus } from "../../assets/images/plus.svg";
import { ReactComponent as Reset } from "../../assets/images/reset.svg";
import { ReactComponent as TooltipIco } from "../../assets/images/tooltip.svg";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow-down.svg";
import { ReactComponent as CalendarIco } from "../../assets/images/calendar.svg";

import { Select, DatePicker, Tooltip } from 'antd';

import moment from "moment";
import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";

moment.locale("ru_RU", {
  week: {
    dow: 1
  }
});

const { RangePicker } = DatePicker;
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export function SearchFilters(props) {

  if (props.state === 'open') {
    
    return <div className={styles.filters}>

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
        className={styles.datepicker} 
        locale={locale} showToday={false} 
        placeholder={["Дата публикации", ""]} 
        format="DD.MM.YYYY" 
        suffixIcon={<CalendarIco/>}
        onChange={onChange} 
      />

      <RangePicker 
        className={styles.datepicker} 
        locale={locale} 
        showToday={false} 
        placeholder={["Дата окончания", "приема заявок"]} 
        format="DD.MM.YYYY" 
        suffixIcon={<CalendarIco/>} 
        onChange={onChange} />

      <div>
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

        <GreyButton><Plus/> Добавить</GreyButton>
      </div>
      
      <GreyButton><Reset/> Сбросить</GreyButton>

      
    </div>

  }

  return

}
