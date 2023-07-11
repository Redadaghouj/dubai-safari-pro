import React from 'react';
import './forms.css';

function Login() {
  return (
    <div className='login section-py'>
      <div className='container'>
        <h1 className='title'>Login</h1>
        <form action=''>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input type='submit' value='Login' />
        </form>
      </div>
    </div>
  );
}

export default Login;
