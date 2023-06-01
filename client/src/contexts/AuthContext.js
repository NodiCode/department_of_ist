import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      // If the token exists, verify the user's identity and set the user state accordingly
      axios
        .get('/api/auth/', { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        })
        .catch((err) => {
          localStorage.removeItem('token');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const register = async (name, email, password) => {
    try {
      const res = await axios.post('/api/auth/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      setError(null);
    } catch (err) {
      setError(err.response.data.errors[0].msg);
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      setError(null);
    } catch (err) {
      setError(err.response.data.errors[0].msg);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = { user, loading, error, register, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;