import React from 'react';
import '../../App.css';
import './header.css';
import { Link } from "react-router-dom";
// import GoogleTranslateWidget from '../googleTranslate/googleTranslate';


function Header() {
    return (
        <div>
            <div id="logo">
                <div className="container">
                    {/* <div className="sec1_logo">
                        <Link to="https://kumu.kg/"><img className="logotip" src="../images/logo_uni.svg" alt="" /></Link>
                    </div> */}
                </div>
            </div>
            <header id="header">
                <div className="container">
                    <div className="header_content">
                        <div className="left">
                            <Link to="/">Маалыматтык Системалар жана  Технологиялар Кафедрасы</Link>
                        </div>
                        <div className="right">
                            <div className="h_links">
                                <div className="links">
                                    <span>
                                        <i className="fa-solid fa-location-dot"></i>
                                        жайгашкан жери/жумуш убактысы
                                    </span>
                                </div>
                                <div className="links">
                                    <span>
                                        <i className="fa-solid fa-phone"></i>
                                        +996556909890
                                    </span>

                                </div>
                                <div className="links">
                                    <span>
                                        <i className="fa-solid fa-envelope"></i>
                                        contact@gmail.com
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;