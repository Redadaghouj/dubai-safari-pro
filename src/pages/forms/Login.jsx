import React, { useState } from 'react';
import './forms.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandel = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      return toast.error('Email is required');
    } else if (password.trim() === '') {
      return toast.error('Password is required');
    } else {
      return toast.success('Thank you ❤️!');
    }
  };
  return (
    <div className='login section-py'>
      <div className='container'>
        <h1 className='title'>Login</h1>
        <form onSubmit={submitHandel}>
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Email'
          />
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Password'
          />
          <input type='submit' value='Login' />
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default Login;
