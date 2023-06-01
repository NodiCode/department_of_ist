import React from 'react';
import styles from "./contacts.module.css"


function MyMap() {
  return (
    
    <div id={styles.map}>
      <div className="container">
        <div className={styles.map_content}>
          <section className={styles.part1}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.1005830379004!2d72.8267437!3d40.4951588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdae680551f8c1%3A0xee31f3f7356fc40!2sKyrgyz-Uzbek%20University!5e0!3m2!1sen!2skg!4v1680786428935!5m2!1sen!2skg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="myFrame"
            ></iframe>
          </section>
          <section className={styles.part2}>
            <div className={styles.part2_content}>
              <div className={styles.hours}>
                <p className={styles.text1}>Иштөө убактысы</p>
                <div className={styles.texts}>
                  <p className={styles.text2}>Дуйшомбу-Жума:<span> 7:30-18:00</span></p>
                  <p className={styles.text2}>Ишемби-Жекшемби:<span> Дем алыш</span></p>
                </div>
              </div>
              <div className={styles.holidays}>
                <p className={styles.text1}>Майрам күндөрү</p>
                <div>
                  <p>Университет төмөнкү майрамдарда жабык болот:</p>
                  <li className={styles.text3}>1-январь<span> Жаңы-жыл</span></li>
                  <li className={styles.text3}>7-январь<span> Рождество</span></li>
                  <li className={styles.text3}>23-февраль<span> - Ата Мекенди коргоочулар күнү</span></li>
                  <li className={styles.text3}>8-март <span> - Аялдардын эл аралык күнү</span></li>
                  <li className={styles.text3}>21-март <span> - Нооруз</span></li>
                  <li className={styles.text3}>7-апрель <span> - Элдик Апрель революциясы күнү</span></li>
                  <li className={styles.text3}>1-май  <span>- Эмгек күнү</span></li>
                  <li className={styles.text3}>5-май   <span> - Кыргыз Республикасынын Конституция күнү</span></li>
                  <li className={styles.text3}>9-май   <span> – Жеңиш күнү </span></li>
                  <li className={styles.text3}>31-август <span>- Кыргыз Республикасынын Эгемендүүлүк күнү </span></li>
                  <li className={styles.text3}>7 жана 8-ноябрь  <span>- Тарых жана ата-бабаларды эскерүү күндөрү </span></li>
                </div>
              </div>
            </div>

          </section>
        </div>

      </div>

    </div>
  );
}

export default MyMap