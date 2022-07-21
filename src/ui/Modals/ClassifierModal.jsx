import styles from "./Modals.module.scss";
import { ReactComponent as Reset } from "../../assets/images/reset.svg";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow-down.svg";
import { GreyButton, BlackButton } from "../Buttons/Buttons";
import { Input, Checkbox, Collapse } from 'antd';
import { useDispatch } from "react-redux";
import { close } from "../../store/index.ts";

const { Panel } = Collapse;

const content = [
  {
    name: 'ПРИВЕТ',
    key: 1,
  },
  {
    name: 'A Продукция сельского, лесного и рыбного хозяйства',
    key: 1,
  },
  {
    name: 'B Продукция горнодобывающих производств',
    key: 2,
  },
]


const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

export function ClassifierModal(props) {

  const dispatch = useDispatch();

  return <div className={styles.classifier}>

    <div className={styles.main}>

      <div className={styles.top}>

        <h2 className={styles.ttl}>Классификатор ОКПД2</h2>

        <button className={styles.close} onClick={() => {
          dispatch(close())
          document.querySelector('body').style.overflow = '';
        }}></button>

        <Input className={styles.search} placeholder="Введите ключевое слово или номер классификатора"/>

      </div>

      <Collapse 
        className={styles.list} 
        expandIcon={() => <ArrowDown />}
        ghost>

        <Panel 
          header="A Продукция сельского, лесного и рыбного хозяйства" 
          key="1" 
          extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

          <p>Text</p>

        </Panel>

        <Panel 
          header="B Продукция горнодобывающих производств" 
          key="2" 
          extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

          <p>Text</p>

        </Panel>

        <Panel 
          header="C Продукция обрабатывающих производств" 
          key="3" 
          extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

          <p>Text</p>

        </Panel>

        <Panel 
          header="D Электроэнергия, газ, пар и кондиционирование воздуха" 
          key="4" 
          extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

          <p>Text</p>

        </Panel>

        <Panel 
          header="E Водоснабжение; водоотведение, услуги по удалению и рекультивации отходов" 
          key="5" 
          extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

          <p>Text</p>

        </Panel>

        <Panel 
          header="F Сооружения и строительные работы" 
          key="6" 
          extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

          <p>Text</p>

        </Panel>

        <Panel 
          header="F Услуги по оптовой и розничной торговле; услуги по ремонту автотранспортных средств и мотоциклов" 
          key="7" 
          extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

          <p>Text</p>

        </Panel>

        <Panel 
          header="G Услуги по оптовой и розничной торговле; услуги по ремонту автотранспортных средств и мотоциклов" 
          key="8" 
          extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

          <p>Text</p>

        </Panel>

        <Panel 
          header="H Услуги транспорта и складского хозяйства" 
          key="9" 
          extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

          <Collapse 
            expandIcon={() => <ArrowDown />}
            ghost>

            <Panel 
              header="49 Услуги транспорта и складского хозяйства" 
              key="13" 
              extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

              <Collapse 
                expandIcon={() => <ArrowDown />}
                ghost>

                <Panel 
                  header="49.1 Услуги железнодорожного транспорта по перевозке пассажиров в междугородном и международном сообщении" 
                  key="18" 
                  extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

                  <p>Text</p>

                </Panel>

                <Panel 
                  header="49.2 Услуги железнодорожного транспорта по перевозке грузов" 
                  key="19" 
                  extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

                  <p>Text</p>

                </Panel>

                <Panel 
                  header="49.3 Услуги сухопутного пассажирского транспорта прочие" 
                  key="20" 
                  extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

                  <p>Text</p>

                </Panel>

                <Panel 
                  header="49.4 Услуги по грузовым перевозкам автомобильным транспортом и услуги по переезду" 
                  key="21" 
                  extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

                  <p>Text</p>

                </Panel>

                <Panel 
                  header="49.5 Услуги трубопроводного транспорта" 
                  key="22" 
                  extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

                  <p>Text</p>

                </Panel>
                
              </Collapse>

            </Panel>

            <Panel 
              header="50 Услуги водного транспорта" 
              key="14" 
              extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

              <p>Text</p>

            </Panel>

            <Panel 
              header="51 Услуги воздушного и космического транспорта" 
              key="15" 
              extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

              <p>Text</p>

            </Panel>

            <Panel 
              header="52 Услуги по складированию и вспомогательные транспортные услуги" 
              key="16" 
              extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

              <p>Text</p>

            </Panel>

            <Panel 
              header="53 Услуги почтовой связи и услуги курьерские" 
              key="17" 
              extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

              <p>Text</p>

            </Panel>


          </Collapse>

        </Panel>

        <Panel 
          header="I Услуги гостиничного хозяйства и общественного питания" 
          key="10" 
          extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

          <p>Text</p>

        </Panel>

        <Panel 
          header="J Услуги в области информации и связи" 
          key="11" 
          extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

          <p>Text</p>

        </Panel>

        <Panel 
          header="K Услуги финансовые и страховые" 
          key="12" 
          extra={<Checkbox className={styles.checkbox} onChange={onChange} onClick={(e) => {e.stopPropagation();}}></Checkbox> }>

          <p>Text</p>

        </Panel>

      </Collapse>

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
