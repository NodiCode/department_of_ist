import React from 'react'
import "../../App.css"
import styles from './events.module.css'
import EventsDash from '../../components/eventDashboard/eventDash'
// import Auth from "../../service/auth"


const Events = () => {
    return (
        <div id={styles.news_events_boards}>
            <EventsDash 
            containerClassName="container" 
            cardsClassName="events_cards" 
            />
        </div>
    )
}

export default Events