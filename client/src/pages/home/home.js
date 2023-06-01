import React from 'react';
import '../../App.css';
import './home.css'
import NewsBoard from '../../components/newsBoard/NewsBoard';
import EventsDash from '../../components/eventDashboard/eventDash';
// import NewsBoard from '../../components/newsBoard/NewsBoard'
// import EventBoard from '../../components/eventsBoard/EventsBoard';
// import News from '../news_events/news';
// import Events from '../../components/eventsBoard/events';
// import NewsEx from '../../components/eventsBoard/news';

const Home = () => {
  return (
    <div className="home">
      <div className="container" >
        <div className="pagesetup" >
          <div>
            {/* <NewsEx /> */}
            <NewsBoard containerClassName="news_container"  />

          </div>
          <div>
            {/* <Events /> */}
            <EventsDash 
            containerClassName="event_container" c
            cardsClassName="events_cards_ch" 
            />

          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;








