import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventForm = ({ token }) => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/events');
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addEvent = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        '/api/events',
        { title, description, date, location },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEvents([...events, response.data]);
      setTitle('');
      setDescription('');
      setDate('');
      setLocation('');
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEvent = async (eventId) => {
    try {
      await axios.delete(`/api/events/${eventId}`, { headers: { Authorization: `Bearer ${token}` } });
      setEvents(events.filter((event) => event._id !== eventId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Event Form</h2>
      <form onSubmit={addEvent}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <button type="submit">Add Event</button>
      </form>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <button onClick={() => deleteEvent(event._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventForm;