import React from 'react';
import '../../../App.css';
import styles from "./staff.module.css"
import { Link } from 'react-router-dom';

const Staff = () => {
    return (
        <div>
            <section id={styles.sec1}>
                <div className="container">
                    <div className={styles.sec1_content}>
                            <Link to="/teacher1" className={styles.ptl}>
                                <div className={styles.card}>
                                    <div className={styles.img1}>
                                        <img alt="" src='https://i.ibb.co/bWVndsJ/IMG-4107-2.jpg' ></img>
                                    </div>
                                    <div className={styles.info}>
                                        <p className={`${styles.name} ${styles.reddy}`}>Омурбекова Гулзат Кочкорбаевна</p>
                                        <p className={styles.position}>Кафедра башчысы</p>
                                        <p className={`${styles.email} ${styles.reddy}`}>Gulzat_omurbekova@mail.ru</p>
                                        <p className={styles.number}><span>+996772178461</span></p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/teacher2" className={styles.ptl}>
                                <div className={styles.card}>
                                    <div className={styles.img1}>
                                        <img alt="" src='https://i.ibb.co/c2xk6xm/IMG-4103.jpg' ></img>
                                    </div>
                                    <div className={styles.info}>
                                        <p className={`${styles.name} ${styles.reddy}`}>Бердибекова Жазгүл Апиевна</p>
                                        <p className={styles.position}>Окутуучу</p>
                                        <p className={`${styles.email} ${styles.reddy}`}>b.jazgul@mail.ru</p>
                                        <p className={styles.number}><span>+996773622208</span></p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="https://rasul.my.canva.site/" className={styles.ptl}>
                                <div className={styles.card}>
                                    <div className={styles.img1}>
                                        <img alt="" src='https://i.ibb.co/vDKQ8Ly/IMG-4321.png' ></img>
                                    </div>
                                    <div className={styles.info}>
                                        <p className={`${styles.name} ${styles.reddy}`}>Камаридинов Расул  Бакытбекович</p>
                                        <p className={styles.position}>Инженер программист</p>
                                        <p className={`${styles.email} ${styles.reddy}`}>kamaridinov.55@gmail.com</p>
                                        <p className={styles.number}><span>+996779930150</span></p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/teacher4" className={styles.ptl}>
                                <div className={styles.card}>
                                    <div className={styles.img1}>
                                        <img alt="" src='' ></img>
                                    </div>
                                    <div className={styles.info}>
                                        <p className={`${styles.name} ${styles.reddy}`}>Өмүралы уулу Токтосун</p>
                                        <p className={styles.position}>Окутуучу</p>
                                        <p className={`${styles.email} ${styles.reddy}`}></p>
                                        <p className={styles.number}><span>+996709834391</span></p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/teacher5" className={styles.ptl}>
                                <div className={styles.card}>
                                    <div className={styles.img1}>
                                        <img alt="" src='' ></img>
                                    </div>
                                    <div className={styles.info}>
                                        <p className={`${styles.name} ${styles.reddy}`}>Ажимуратов Примкул Нурмаматович</p>
                                        <p className={styles.position}>Окутуучу</p>
                                        <p className={`${styles.email} ${styles.reddy}`}>Pirim_8@mail.ru</p>
                                        <p className={styles.number}><span>+996778188881</span></p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/teacher6" className={styles.ptl}>
                                <div className={styles.card}>
                                    <div className={styles.img1}>
                                        <img alt="" src='' ></img>
                                    </div>
                                    <div className={styles.info}>
                                        <p className={`${styles.name} ${styles.reddy}`}>Жабагыев Ишенбек Маматибраимович</p>
                                        <p className={styles.position}>Окутуучу</p>
                                        <p className={`${styles.email} ${styles.reddy}`}></p>
                                        <p className={styles.number}><span>+996771206129</span></p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/teacher7" className={styles.ptl}>
                                <div className={styles.card}>
                                    <div className={styles.img1}>
                                        <img alt="" src='https://i.ibb.co/N2yj5xf/IMG-4376.jpg' ></img>
                                    </div>
                                    <div className={styles.info}>
                                        <p className={`${styles.name} ${styles.reddy}`}>Токонова Тамара Сулаймановна</p>
                                        <p className={styles.position}>Окутуучу</p>
                                        <p className={`${styles.email} ${styles.reddy}`}></p>
                                        <p className={styles.number}><span>+996779832201</span></p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="https://sites.google.com/d/1gmPMzPZLeQjBdcEGQCnOkpQyBLlK_YXQ/p/1GPno3jDFFQAoRb8CrCPCkI_GY5Id_fBc/edit"
                                className={styles.ptl}>
                                <div className={styles.card}>
                                    <div className={styles.img1}>
                                        <img alt="" src='https://i.ibb.co/fqvX2n8/photo-2023-04-09-00-50-18.jpg' ></img>
                                    </div>
                                    <div className={styles.info}>
                                        <p className={`${styles.name} ${styles.reddy}`}>Ормонова Эльнура Маматкадировна</p>
                                        <p className={styles.position}>Окутуучу</p>
                                        <p className={`${styles.email} ${styles.reddy}`}>Ormonovae@mail.ru</p>
                                        <p className={styles.number}><span>+</span>996778647686</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/teacher9" className={styles.ptl}>
                                <div className={styles.card}>
                                    <div className={styles.img1}>
                                        <img alt="" src='' ></img>
                                    </div>
                                    <div className={styles.info}>
                                        <p className={`${styles.name} ${styles.reddy}`}>Адылова Элмира Садыкжановна</p>
                                        <p className={styles.position}>Окутуучу</p>
                                        <p className={`${styles.email} ${styles.reddy}`}>A_elmira01@mail.ru</p>
                                        <p className={styles.number}><span>+996552077022</span></p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="https://sites.google.com/view/zhzr/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0" className={styles.ptl}>
                                <div className={styles.card}>
                                    <div className={styles.img1}>
                                        <img alt="" src='https://i.ibb.co/HrZ90W4/IMG-2921.jpg' ></img>
                                    </div>
                                    <div className={styles.info}>
                                        <p className={`${styles.name} ${styles.reddy}`}>Жээнбаева Зиягуль Рысбековна</p>
                                        <p className={styles.position}>Окутуучу</p>
                                        <p className={`${styles.email} ${styles.reddy}`}>Ziyar@mail.ru</p>
                                        <p className={styles.number}><span>+996707657260</span></p>
                                    </div>
                                </div>
                            </Link>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Staff;
