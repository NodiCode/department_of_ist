import React from "react";
import "../../../App.css"
import "./table.css"; // import your stylesheet here

const subjects = [
    'Багытка киришүү',
    'Окутуунун автоматташтырылган системасына киришүү',
    'Жогорку математика',
    'Математика',
    'Дискреттик математика',
    'Информатика',
    'Жогорку деёгээлдеги программалоо тили',
    'Маалыматты коргоо',
    'Илимий изилдөөнүн негиздери жана патент алууга киришүү',
    'Эсептөө системаларынын архитектурасы',
    'Функционалдык жана логикалык программалоо',
    'ЭЭМди жана системаларды уюштуруу',
    'С-С++программалоо тилинде программалоо',
    'Өндүрүштү уюштуруу жана пландоо',
    'Берилиштерди обработкалоонун түзүлүшү жана алгоритми',
    'ЭЭМдин тармактары жана телекоммуникациялар',
    'Программалык камсыздоону иштеп чыгуунун технологиясы',
    'Web-технологиялар жана программалоо',
    'Visual Basic',
    'Компьютердик графика',
    'Башкаруу теорияларынын негиздери',
    'Программалоо тилдеринин теориялары жана трансляцилоонун усулдары',
    'Адам менен машинанын өз ара байланышы',
    'Операциялык системалар',
    'Прораммисттин АЖОду',
    'Обөектке ориентирленген программалоо',
    'Архит.NET жана  Visual Studio чөйрөсүндө программалоо',
    'Компьютердик тармактарды админстрациялоо',
    'Графикалык редакторлор',
    'САПР ды иштеп чыгуу жана анын технологиясы',
    'Эксперттик системалар жана интелектуалдык технологиялар',
    'Сүрөттөлүштү обработкалоонун программалык каражаттары жана усулдары'
];

const Table = () => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Дисциплиналар</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
