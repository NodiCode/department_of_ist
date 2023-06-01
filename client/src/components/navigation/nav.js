import React, { useState } from 'react';
import '../../App.css';
import './nav.css'
import { Link } from "react-router-dom"


function Nav() {
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);


  const handleToggle1 = () => {
    setShowDiv1(!showDiv1);
    setShowDiv2(false);
  };

  const handleToggle2 = () => {
    setShowDiv2(!showDiv2);
    setShowDiv1(false);
  };
  const handleCloseHiddenDivs = () => {
    setShowDiv1(false);
    setShowDiv2(false);
  }

  



  return (
    <div>
      <div className="container">
      <nav id="nav">
        <div className="nav_content">
          <button className='not_clicked' onClick={() => { handleToggle1(); }}>Кафедра </button>
          <button className='not_clicked' onClick={() => { handleToggle2(); }}>Багыттары </button>
          <button className='btn_change' onClick={() => { handleCloseHiddenDivs(); }}><Link to="/news" className='not_clicked'>Жанылыктар</Link> </button>
          <button className='btn_change' onClick={() => { handleCloseHiddenDivs(); }} ><Link to="/events" className='not_clicked'>Иш-чаралар </Link> </button>
          <button className='btn_change' onClick={() => { handleCloseHiddenDivs(); }}><Link to="/contacts" className='not_clicked'>Байланыш үчүн</Link> </button></div>

        <div className="search" >
          <form className="search-bar">
            <input type="text" placeholder="Издөө.." name="q"></input>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>

        </div>
      </nav>
      {showDiv1 && (
        <div id="hiddenDiv1">
          <div className="container">
            <div className="togged_kafedra">
              <div className="part1">Кафедра</div>
              <div className="part2">
                <div className="column">
                  <ul>
                    <li><Link to="/history">Тарыхы</Link></li>
                    <li><Link to="/classes">Окутулуучу дисциплиналар</Link></li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li><Link to="/staff"> Профессордук-окутуучулук курамы</Link></li>
                    <li><Link to="/science">Илимий-изилдөө иштери</Link></li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li><Link to="/mission">Максаты жана милдеттери</Link></li>
                    <li><Link to="/accredit">Аккредитация</Link></li>
                    {/* <li><Link to="">Нормативдүү документтер</Link></li> */}
                    <li><Link to="/structure">Материалдык-техникалык базасы</Link></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
      {showDiv2 && (
        <div id="hiddenDiv2">
          <div className="container">
            <div className="togged_bagytary">
              <div className="part1">багыттар жана профилдер</div>
              <div className="part2">
                <ul>
                  <li>Графика</li>
                  <li>Информатика жана Эсептөө техникасы</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Nav;
