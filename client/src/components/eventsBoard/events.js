import React from 'react'
import data from "../../data/events.json"
import "../../App.css"
import "./events.css"


const EventsBoard = () => {
    return (
        <div id="events">
            <h2><span>Алдыдагы окуялар</span></h2>
            <div className="container">
                {data.map((event) => (
                    <div key={event._id} className="event_content">
                        <div><img src={event.image} alt=""></img></div>
                        <h6>{event.title}</h6>
                        <p>{event.date}</p>
                        <p>{event.content}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default EventsBoard