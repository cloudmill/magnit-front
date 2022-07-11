import styles from "./Modals.module.scss";
import { ReactComponent as Reset } from "../../assets/images/reset.svg";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow-down.svg";
import { GreyButton, BlackButton } from "../Buttons/Buttons";
import { Input, Checkbox } from 'antd';
import { useDispatch } from "react-redux";
import { close } from "../../store/index.ts";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

export function ClassifierModal(props) {

  const dispatch = useDispatch();

  return <div className={styles.classifier}>

    <div className={styles.main}>

      <div className={styles.top}>

        <h2 className={styles.ttl}>Классификатор ОКПД2</h2>

        <button className={styles.close} onClick={() => {dispatch(close())}}></button>

        <Input className={styles.search} placeholder="Введите ключевое слово или номер классификатора"/>

      </div>

      <div className={styles.list}>

        <div className={styles.row}>
          <ArrowDown/>
          <Checkbox className={styles.checkbox} onChange={onChange}></Checkbox> 
          A Продукция сельского, лесного и рыбного хозяйства
        </div>

        <div className={styles.row}>
          <ArrowDown/>
          <Checkbox className={styles.checkbox} onChange={onChange}></Checkbox> 
          B Продукция горнодобывающих производств
        </div>

        <div className={styles.row}>
          <ArrowDown/>
          <Checkbox className={styles.checkbox} onChange={onChange}></Checkbox> 
          C Продукция обрабатывающих производств
        </div>

        <div className={styles.row}>
          <ArrowDown/>
          <Checkbox className={styles.checkbox} onChange={onChange}></Checkbox> 
          D Электроэнергия, газ, пар и кондиционирование воздуха
        </div>

        <div className={styles.row}>
          <ArrowDown/>
          <Checkbox className={styles.checkbox} onChange={onChange}></Checkbox> 
          E Водоснабжение; водоотведение, услуги по удалению и рекультивации отходов
        </div>

        <div className={styles.row}>
          <ArrowDown/>
          <Checkbox className={styles.checkbox} onChange={onChange}></Checkbox> 
          F Сооружения и строительные работы
        </div>

        <div className={styles.row}>
          <ArrowDown/>
          <Checkbox className={styles.checkbox} onChange={onChange}></Checkbox> 
          F Услуги по оптовой и розничной торговле; услуги по ремонту автотранспортных средств и мотоциклов
        </div>

        <div className={styles.row}>
          <ArrowDown/>
          <Checkbox className={styles.checkbox} onChange={onChange}></Checkbox> 
          G Услуги по оптовой и розничной торговле; услуги по ремонту автотранспортных средств и мотоциклов
        </div>

        <div className={styles.row}>
          <ArrowDown/>
          <Checkbox className={styles.checkbox} onChange={onChange}></Checkbox> 
          H Услуги транспорта и складского хозяйства
        </div>

        <div className={styles.row}>
          <ArrowDown/>
          <Checkbox className={styles.checkbox} onChange={onChange}></Checkbox> 
          I Услуги гостиничного хозяйства и общественного питания
        </div>

        <div className={styles.row}>
          <ArrowDown/>
          <Checkbox className={styles.checkbox} onChange={onChange}></Checkbox> 
          J Услуги в области информации и связи
        </div>

        <div className={styles.row}>
          <ArrowDown/>
          <Checkbox className={styles.checkbox} onChange={onChange}></Checkbox> 
          K Услуги финансовые и страховые
        </div>

      </div>

    </div>

    

    <div className={styles.bottom}>

      <div className={styles.count}>Выбрано категорий: <span>1</span></div>

      <div className={styles.buttons}>
        <GreyButton extraClass={styles.filtersBtn}><Reset/> Сбросить</GreyButton>
        <BlackButton>Выбрать</BlackButton>
      </div>

    </div>

  </div>

}
