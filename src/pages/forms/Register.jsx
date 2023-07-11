import React from 'react';
import './forms.css';

function Register() {
  return (
    <div className='register section-py'>
      <div className='container'>
        <h1 className='title'>Register</h1>
        <form action=''>
          <input type='email' placeholder='Email' />
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='Password' />
          <input type='password' placeholder='Confirm Password' />
          <input type='submit' value='Register' />
        </form>
      </div>
    </div>
  );
}

export default Register;
