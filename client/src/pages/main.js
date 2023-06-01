import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Nav from "../components/navigation/nav"
import Slider from "../components/slider/slider"
import Home from "./home/home"
import History from './department/history/history';
import MyMap from './contacts/contacts';
import Staff from './department/staff/staff';
import LoadingScreen from '../components/loading/loadingScreen';
import News from './news/news';
import Events from './events/events';
import Port1 from '../components/portfolios/port1';
import NewsBoard from '../components/newsBoard/NewsBoard';
import EventBoard from '../components/eventsBoard/EventsBoard';
import Table from './department/classes/classes';
import Structure from './department/structure/structure';
import Accredit from './department/accredit/accredit';
import Mission from './department/mission/mission';
// import EventForm from '../components/eventForm/EvenForm';





const Main = () => {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Your code to fetch data or load assets
        setLoading(false); // Set loading to false when done
    }, []);
    return (
        <div>
            {loading ? <LoadingScreen /> :
                <div>
                    <Router>
                        <div>
                            <Header />
                            <Nav />
                            <Slider />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/history" element={<History />} />
                                <Route path="/mission" element={<Mission />} />
                                <Route path="/contacts" element={<MyMap />} />
                                <Route path="/staff" element={<Staff />} />
                                <Route path="/teacher1" element={<Port1 />} />
                                <Route path="/news" element={<News />} />
                                <Route path="/events" element={<Events />} />
                                <Route path="/newsboard" element={<NewsBoard/>} />
                                <Route path="/eventsboard" element={<EventBoard/>} />
                                <Route path="/classes" element={<Table/>}/>
                                <Route path="/structure" element={<Structure/>}/>
                                <Route path="/accredit" element={<Accredit/>}/>

                            </Routes>
                            <Footer />
                        </div>
                    </Router>
                </div>}
        </div>
    )
}
export default Main
