import React, {useState} from 'react';
import '../../App.css';
import './header.css';
import { Link } from "react-router-dom";
// import GoogleTranslateWidget from '../googleTranslate/googleTranslate';


function Header() {
    const [showMessage, setShowMessage] = useState(false);

    const toggleMessage = () => {
        setShowMessage(!showMessage);
    };
    return (
        <div>
            <div id="logo">
                <div className="container">
                    {/* <div className="sec1_logo">
                        <Link to="https://kumu.kg/"><img className="logotip" src="https://ibb.co/VTmRrGk" alt="" /></Link>
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
                                        <Link to="/contacts"><i className="fa-solid fa-location-dot" onMouseEnter={toggleMessage} onMouseLeave={toggleMessage}></i></Link>
                                        <p className="message">жайгашкан жери/жумуш убактысы</p>
                                    </span>
                                </div>
                                <div className="links">
                                    <span>
                                        <i className="fa-solid fa-phone" onMouseEnter={toggleMessage} onMouseLeave={toggleMessage}></i>
                                        <p className="message">+996556909890</p>
                                    </span>

                                </div>
                                <div className="links">
                                    <span>
                                        <i className="fa-solid fa-envelope" onMouseEnter={toggleMessage} onMouseLeave={toggleMessage}></i>
                                        <p className="message">contact@gmail.com</p>
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