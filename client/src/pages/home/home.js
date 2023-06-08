import { useState, useEffect, React } from 'react';
import '../../App.css';
import './home.css'
import NewsBoard from '../../components/newsBoard/NewsBoard';
import EventsDash from '../../components/eventDashboard/eventDash';
import Avn from '../../components/avn/avn';
// import NewsBoard from '../../components/newsBoard/NewsBoard'
// import EventBoard from '../../components/eventsBoard/EventsBoard';
// import News from '../news_events/news';
// import Events from '../../components/eventsBoard/events';
// import NewsEx from '../../components/eventsBoard/news';

const Home = () => {
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth < 920); // Set the breakpoint for narrow screen width
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="home">
      <div className="container" >
        <div className="pagesetup" >
          <div>
            {/* <NewsEx /> */}
            <NewsBoard containerClassName={isNarrowScreen ? 'news_container' : "container"} />

          </div>
          <div>
          <Avn/>
            {/* <Events /> */}
            <EventsDash
               containerClassName={isNarrowScreen ? 'container' : 'event_container'}
              cardsClassName="events_cards_ch"
            />

          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;








