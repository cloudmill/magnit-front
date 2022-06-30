import styles from "./PurchaseDetailMain.module.scss";
import classNames from "classnames";
import { DocumentCard } from "../DocumentCard/DocumentCard";
import { PurchaseBanner } from "../PurchaseBanner/PurchaseBanner";
import { ArrowDownButton } from "../Buttons/Buttons";
import { PurchaseForm } from "../PurchaseForm/PurchaseForm";

export const PurchaseDetailMain = () => (

  <div className={styles.main}>

    <div className={styles.top}>
      <div className={styles.col}>
        <div className={styles.ttl}>Дата публикации</div>
        <div className={styles.value}>30.05.2022</div>
      </div>
      <div className={styles.col}>
        <div className={styles.ttl}>Дата последнего редактирования</div>
        <div className={styles.value}>30.05.2022</div>
      </div>
    </div>

    <div className={styles.block}>
      <div className={styles.ttl}>Место проведения процедуры</div>
      <div className={styles.txt}>Электронная почта</div>
    </div>

    <div className={styles.block}>
      <div className={styles.ttl}>Наименование</div>
      <div className={styles.txt}>Поставка ИБП 520 Ва срочная потребность БО 2022 г.. Торговая сеть МАГНИТ</div>
    </div>

    <div className={styles.block}>
      <div className={styles.ttl}>Описание</div>
      <div className={styles.txt}>Поставка контейнеров для мусора на колесах с педалью, 120 л, RAL 6020 (заказ) по потребности ТБ ГМ Магнит в 3 квартале 2022 года. Торговая сети Магнит. См.подробнее графу ...</div>
    </div>

    <div className={classNames(styles.block, styles.row)}>
      <div className={styles.col}>
        <div className={styles.ttl}>Дата начала поставки</div>
        <div className={styles.txt}>30.05.2022</div>
      </div>

      <div className={styles.col}>
        <div className={styles.ttl}>Дата окончания поставки</div>
        <div className={styles.txt}>29.07.2022</div>
      </div>
    </div>

    <div className={styles.block}>
      <div className={styles.ttl}>Тип</div>
      <div className={styles.txt}>Одноэтапный запрос предложений</div>
    </div>

    <div className={classNames(styles.block, styles.table)}>

      <div className={styles.ttl}>Классификатор ОКПД2</div>

      <div className={styles.tableRow}>
        <div className={styles.code}>26.20.40.190</div>
        <div className={styles.txt}>Комплектующие и запасные части для вычислительных машин прочие, не включенные в другие группировки</div>
      </div>

      <div className={styles.tableRow}>
        <div className={styles.code}>27.20.22</div>
        <div className={styles.txt}>Аккумуляторы свинцовые, кроме используемых для запуска поршневых двигателей</div>
      </div>

      <div className={styles.tableRow}>
        <div className={styles.code}>27.20.23</div>
        <div className={styles.txt}>Батареи аккумуляторные никель-кадмиевые, никель-металл-гидридные, литий-ионные, литий-полимерные, никель-железные и прочие</div>
      </div>

      <div className={styles.tableRow}>
        <div className={styles.code}>27.20.22.000</div>
        <div className={styles.txt}>Аккумуляторы свинцовые, кроме используемых для запуска поршневых двигателей</div>
      </div>

      <div className={styles.tableRow}>
        <div className={styles.code}>27.20.23.190</div>
        <div className={styles.txt}>Батареи аккумуляторные прочие</div>
      </div>

      <ArrowDownButton extraClass={styles.tableBtn}>Показать полностью</ArrowDownButton>

    </div>

    <div className={styles.block}>
      <div className={styles.ttl}>Условия поставки</div>
      <div className={styles.txt}>Путем доставки до склада покупателя, по указанным реквизитам. Датой поставки, соответствующей партии товаров, является дата передачи Поставщиком Покупателю всей партии товаров на складе Покупателя. Учитывая факт дальнейшей транспортировки Товаров в районы Крайнего Севера на Объект упаковка груза, поступающего в таре должна обеспечивать сохранность груза в процессе его транспортировки, хранения (накопления) и грузопереработки. Груз должен удовлетворять требованиям ГОСТа 15846-2002 и ГОСТа 14192-96</div>
    </div>

    <div className={styles.block}>
      <div className={styles.ttl}>Условия оплаты</div>
      <div className={styles.txt}>Оплата 100 % (сто процентов) от Общей стоимости соответствующей партии Товаров в срок не позднее 20 (двадцать) банковских дней с даты поставки соответствующей партии Товаров (с даты подписания товарной накладной без замечаний), и предоставления счета-фактуры.</div>
    </div>

    <div className={styles.block}>
      <div className={styles.ttl}>При выборе победителя учитывается цена</div>
      <div className={styles.txt}>Да</div>
    </div>

    <div className={styles.block}>
      <div className={styles.ttl}>Валюта</div>
      <div className={styles.txt}>Рубль</div>
    </div>

    <div className={styles.block}>
      <div className={styles.ttl}>Адрес поставки</div>
      <div className={styles.txt}>140482, Московская область, Коломенский район, село Парфентьево, Промышленная зона строение 1</div>
    </div>

    <div className={styles.block}>

      <div className={styles.ttl}>Комментарий</div>

      <div className={classNames(styles.txt, styles.markup)}>
        <p>Уважаемые поставщики!</p>

        <p>Обязательные условия для участников:</p>

        <ul className={styles.listNum}>
          <li>Возможна подача альтернативных предложений на несколько моделей аналогов, соответствующих требованиям ТЗ</li>
          <li>Адрес поставки Магнит: РЦ Коломна (Московская область, Коломненский район, с. Парфентьево, промышленная зона, стр. 1)</li>
          <li>При подаче предложения обязательно прикладывать подробные технические характеристики (ВАЖНО! без ТТХ предложение не рассматривается)</li>
        </ul>
        
        <ul className={styles.listDot}>
          <li>Подача ценовых предложений только в РУБЛЕВОЙ валюте</li>
          <li>Участие бесплатное</li>
          <li>ЭЦП не требуется</li>
        </ul>

        <p> Участник закупки может неоднократно улучшать свое ценовое предложения до момента окончания подачи заявок.
        В конкурсной процедуре от группы аффилированных (связанных) между собой компаний может принять участие только одно юридическое лицо. Иное рассматривается как ограничение конкуренции и является основанием для снятия с конкурса всех аффилированных участников.</p>

        <p> По всем вопросам бесплатного участия в данной торговой процедуре необходимо обращаться к специалистам B2B-center по тел.: (495) 989-85-19 доб. 7610, 7620, а также подать запросы на разъяснения технической части Заказчику через функционал ЭТП В2В в разделе соответствующей процедуры.</p>

        <p>Чтобы не пропустить объявленные запросы предложений АО Тандер, вы можете настроить подписку в личном кабинете, раздел «Подписки и рассылки».</p>

        <p>Данная процедура запроса предложений не является аукционом или конкурсом, не попадает под действие ст.ст. 447-449 ГК РФ и не влечет за собой возникновение юридических обязательств у Заказчика по выбору поставщика.</p>
      </div>

    </div>

    <div className={classNames(styles.block, styles.row)}>

      <div className={styles.ttl}>Дополнительная информация</div>

      <div className={styles.col}>
        <div className={styles.txt}>
          Контакты
          <br/><br/>
          Запросы к Заказчику процедуры<br/> подаются через функционал B2B-<br/>center в разделе «Разъяснения»
        </div>
      </div>

      <div className={styles.col}>
        <div className={styles.txt}>По вопросам технического задания
          <br/><br/>
          Сергей Звездочетов<br/>
          8 982 810-22-89<br/>
          sergey.zvezdochetov@pirelli.com
          <br/><br/>
          Логинов Алексей<br/>
          8 912 710-03-08
          <br/><br/>
          Контактный телефон заказчика<br/>
          8 982 380-16-10
        </div>
      </div>
    </div>

    <div className={styles.block}>
      <div className={styles.ttl}>Контакты</div>
      <div className={styles.txt}>Запросы к Заказчику процедуры подаются через функционал<br/> B2B-center в разделе «Разъяснения»</div>
    </div>

    <div className={classNames(styles.block, styles.row)}>

      <div className={styles.ttl}>Контакты</div>

      <div className={styles.col}>

        <div className={styles.ttl2}>Контактное лицо 1</div>
        <div className={styles.txt}>
          Сергей Звездочетов<br/>
          8 982 810-22-89<br/>
          sergey.zvezdochetov@pirelli.com
        </div>

        <div className={styles.ttl2}>Контактное лицо 3</div>
        <div className={styles.txt}>
          Андрей Паясу<br/>
          8 999 432-20-39<br/>
          payasudesign@mail.ru
        </div>

      </div>

      <div className={styles.col}>
      <div className={styles.ttl2}>Контактное лицо 3</div>
        <div className={styles.txt}>
          Алексей Дневальный<br/>
          8 991 567-11-00<br/>
          lesha123@magnit.com
        </div>
      </div>
    </div>

    <div className={styles.block}>
      <div className={styles.ttl}>Документы</div>
      
      <DocumentCard>ПКО по видам работ, услуг №341: Техническое диагностирование, освидетельствование и мониторинг объектов организаций системы «Транснефть», расположенных на территории Российской Федерации</DocumentCard>

      <DocumentCard>ПКО по видам работ, услуг №339: Производство и наладка комплектов для доработки программного обеспечения и расширения систем автоматики технологических процессов и систем автоматики пожаротушения (СА ТП и СА ПТ) на объектах организаций системы «Транснефть»</DocumentCard>

      <DocumentCard>ПКО по видам работ, услуг №337: Техническое диагностирование, освидетельствование и мониторинг переходов магистральных нефтепроводов, магистральных нефтепродуктопроводов и кабельных линий связи через водные преграды и малые водотоки на объектах организаций системы «Транснефть»</DocumentCard>

      <DocumentCard>ПКО по видам работ, услуг №341: Техническое диагностирование, освидетельствование и мониторинг объектов организаций системы «Транснефть», расположенных на территории Российской Федерации</DocumentCard>

      <DocumentCard>ПКО по видам работ, услуг №339: Производство и наладка комплектов для доработки программного обеспечения и расширения систем автоматики технологических процессов и систем автоматики пожаротушения (СА ТП и СА ПТ) на объектах организаций системы «Транснефть»</DocumentCard>
    </div>

    <PurchaseBanner extraClass={styles.block}/>

    <PurchaseForm/>

  </div>

);