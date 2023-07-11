import React, { useState } from 'react';
import './forms.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [matchPassword, setMatchPassword] = useState('');

  const submitHandel = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      return toast.error('Email is required');
    } else if (username.trim() === '') {
      return toast.error('Username is required');
    } else if (password.trim() === '' || matchPassword.trim() === '') {
      return toast.error('Password is required');
    } else if (password !== matchPassword) {
      return toast.error("Passwords don't match");
    } else {
      return toast.success('Thank you ❤️!');
    }
  };

  return (
    <div className='register section-py'>
      <div className='container'>
        <h1 className='title'>Register</h1>
        <form onSubmit={submitHandel}>
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Email'
          />
          <input
            type='text'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder='Username'
          />
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Password'
          />
          <input
            type='password'
            onChange={(e) => setMatchPassword(e.target.value)}
            value={matchPassword}
            placeholder='Confirm Password'
          />
          <input type='submit' value='Register' />
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default Register;
