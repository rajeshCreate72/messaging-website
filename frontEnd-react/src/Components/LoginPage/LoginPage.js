import React from 'react'
import './LoginPage.css'

function LoginPage() {
  return (
    <div>
      <div className='register-page'>
      <h1>Log In</h1>
      <br/>
      <form>
        <div className='input-container'>
          <label>Username: </label>
          <input type='text' id='username' />
        </div>
        <div className='input-container'>
          <label>Password: </label>
          <input type='password' id='password' />
        </div>
        <div className='input-button'>
          <button id='login' type='submit'>Log In</button>
          
        </div>
      </form>
    </div>
    </div>
  )
}

export default LoginPage