import React from 'react';
import { useAuth } from './AuthProvider';
import EventForm from '../components/eventForm/EvenForm';
import AddNewsForm from '../components/newsForm/newsForm';

const MyComponent = () => {
  const { user, isAuthenticated, login, logout } = useAuth();

  // Use the auth context information in your component
  return (
    <div>
        <div>
      {isAuthenticated ? (
        <div>
        <p>Welcome, {user.name}!</p>
        <EventForm/>
        <AddNewsForm/>
        </div>
      ) : (
        <p>Please log in.</p>
      )}
      <button onClick={login}>Log in</button>
      <button onClick={logout}>Log out</button>
    </div>
    </div>
    
  );
};

export default MyComponent