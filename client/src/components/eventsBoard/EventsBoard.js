import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EventBoard = ({ loggedIn }) => {
  const [events, setEvents] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      const result = await axios.get('http://localhost:4444/api/events');
      setEvents(result.data);
    };
    fetchEvents();
  }, []);

  const handleRegister = async (eventId) => {
    try {
      await axios.post(`/api/events/${eventId}/register`, {}, { withCredentials: true });
      history.push('/events');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Event Board</h1>
      {loggedIn && (
        <button onClick={() => history.push('/events/new')}>Create New Event</button>
      )}
      {events.map((event) => (
        <div key={event._id}>
          <h2>{event.title}</h2>
          <p>{event.date}</p>
          <p>{event.description}</p>
          <button onClick={() => handleRegister(event._id)}>Register</button>
        </div>
      ))}
    </div>
  );
};

export default EventBoard;