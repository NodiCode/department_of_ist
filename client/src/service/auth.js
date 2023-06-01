import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const registerUser = async () => {
    try {
      const response = await axios.post('/auth/register', {
        name,
        email,
        password
      });
      setToken(response.data.token);
      setLoggedIn(true);
      setError('');
    } catch (err) {
      setError(err.response.data.errors[0].msg);
    }
  };

  const loginUser = async () => {
    try {
      const response = await axios.post('/auth/login', {
        email,
        password
      });
      setToken(response.data.token);
      setLoggedIn(true);
      setError('');
    } catch (err) {
      setError(err.response.data.errors[0].msg);
    }
  };

  const logoutUser = () => {
    setToken('');
    setLoggedIn(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>You are logged in with token: {token}</p>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Register</h2>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button onClick={registerUser}>Register</button>

          <h2>Login</h2>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button onClick={loginUser}>Login</button>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default Auth;