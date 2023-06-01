import React, { useState } from 'react';
import styles from './registrationForm.module.css'
import "./../../App.css"
import { register } from '../../contexts/auth';
import { useNavigate } from 'react-router-dom';
// import AuthContext  from '../../contexts/AuthContext';

const RegistrationForm = () => {
  // const { register } = AuthContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await register(name, email, password);
      localStorage.setItem('token', token);
      history('/');
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div className={styles.loginbox}>
      <div className="container">
        <form className={styles.login_content} onSubmit={handleSubmit}>
          <h1 className={styles.text}>Катоо</h1>
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
              placeholder='Атыныз'
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder='Электрондук почта'
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              minLength="6"
              required
              placeholder='Сырсөз'
            />
          </div>
          <button className={styles.btn1} type="submit">Катоо</button>
        </form></div></div>

  );
};

export default RegistrationForm;