import React from 'react';
import "./slider.css"
import '../../App.css';



function Slider() {
    const show=()=>{
        const sliderContent = document.querySelector('.slider_content');
        sliderContent.classList.toggle('active');
    }
    return (
        <div>
            <div id="slider">
                <div className="container">
                    <div className="slider_content">
                        <div className="toggle_btn" onClick={show}>Миссия</div>
                       <div className="text">
                       Коомдун билим берүү, илим, экономика жана социалдык чөйрөсүн ѳнүктүрүүгѳ жана атаандаштыкка жѳндѳмдүү адистерди даярдоо; коомдун адеп-ахлактык, маданий жана илимий баалуулуктарын сактоого жана арттырууга ѳбѳлгѳ болуу; кѳп маданияттуу билим берүү аркылуу Борбордук Азияда жашаган элдердин ортосундагы достукту бекемдѳѳ. 
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;