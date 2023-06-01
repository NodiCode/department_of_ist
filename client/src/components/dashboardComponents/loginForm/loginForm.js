import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4444/api/users/login', { email, password });
      const { token } = response.data;
      setToken(token);
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default LoginForm;