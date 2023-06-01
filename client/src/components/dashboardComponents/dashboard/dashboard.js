import React from 'react';
import { useHistory } from 'react-router-dom';
import EventForm from '../eventForm/eventForm';
import NewsForm from '../newsForm/newsForm';

const Dashboard = ({ token, setToken }) => {
  const history = useHistory();

  const handleLogout = () => {
    setToken(null);
    history.push('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <EventForm token={token} />
      <NewsForm token={token} />
    </div>
  );
};

export default Dashboard;