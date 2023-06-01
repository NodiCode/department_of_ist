import axios from 'axios';

// Register user
export const register = async (name, email, password) => {
  try {
    const res = await axios.post('http://localhost:4444/api/users/register', { name, email, password });
    return res.data.token;
  } catch (err) {
    throw new Error(err.response.data.errors[0].msg);
  }
};

// Login user
export const login = async (name, password) => {
  try {
    const res = await axios.post('http://localhost:4444/api/users/login', { name, password });
    return res.data.token;
  } catch (err) {
    throw new Error(err.response.data.errors[0].msg);
  }
};

// Logout user
export const logout = () => {
  localStorage.removeItem('token');
};

// Get user profile
export const getUserProfile = async () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token, authorization denied');
  try {
    const res = await axios.get('http://localhost:4444/users/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.errors[0].msg);
  }
};