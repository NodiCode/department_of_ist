import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./eventDash.css"
import  "../../App.css"

const EventsDash = (props) => {
  const { containerClassName, cardsClassName } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/events'); // Replace with your backend API endpoint
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className={containerClassName}>
      <h1>Алдыдагы окуялар</h1>
      <div className={cardsClassName}>
      {data.map((item) => (
        <div key={item._id} className="event_card">
          <h2 className="title_">{item.title}</h2>
          <p className="content">{item.description}</p>
          <img
        src={item.image}
        alt="events"
      />

        </div>
      ))}
      </div>

    </div>
  );
};

export default EventsDash;