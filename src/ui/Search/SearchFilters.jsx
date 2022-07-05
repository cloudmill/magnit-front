import styles from "./Search.module.scss";

import { useState } from "react";
import { GreyButton } from "../Buttons/Buttons";

import { ReactComponent as Plus } from "../../assets/images/plus.svg";
import { ReactComponent as Reset } from "../../assets/images/reset.svg";
import { ReactComponent as TooltipIco } from "../../assets/images/tooltip.svg";

import { Select, DatePicker, Tooltip } from 'antd';

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

      <div className={styles.filtersRow}>

        <div>
          <Select
            className={styles.select}
            placeholder="Выбрать"
            onChange={handleChange}
          >

            <Option value="option1">Опция 1</Option>
            <Option value="option2">Опция 2</Option>
            <Option value="option3">Опция 3</Option>

          </Select>
        </div>

        <div>
          <Select
            className={styles.select}
            placeholder="Выбрать"
            onChange={handleChange}
          >

            <Option value="option1">Опция 1</Option>
            <Option value="option2">Опция 2</Option>
            <Option value="option3">Опция 3</Option>

          </Select>

          
          <span className={styles.tooltipTxt}>Классификатор ОКПД2 
            <Tooltip title="Общероссийский классификатор продукции по видам экономической деятельности" color={'#FAFAFA'} overlayStyle={{padding: '16px'}} overlayInnerStyle={{color: '#121212'}}>
              <TooltipIco/>
            </Tooltip>
          </span>
          
        </div>

        <div>
          <Select
            className={styles.select}
            placeholder="Выбрать"
            onChange={handleChange}
          >

            <Option value="option1">Опция 1</Option>
            <Option value="option2">Опция 2</Option>
            <Option value="option3">Опция 3</Option>

          </Select>
        </div>

        <DatePicker className={styles.datepicker} placeholder="Дата публикации" onChange={onChange} />

      </div>

      <div className={styles.filtersRow}>

        <DatePicker className={styles.datepicker} placeholder="Дата окончания приема заявок" onChange={onChange} />
        <GreyButton><Plus/> Добавить</GreyButton>
        <GreyButton><Reset/> Сбросить</GreyButton>
      </div>
    </div>

  }

  return

}
