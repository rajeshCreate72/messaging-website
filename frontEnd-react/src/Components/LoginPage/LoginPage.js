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
          <label>username: </label>
          <input type='text' id='username' /><br/>
        </div>
        <div className='input-container'>
          <label>Password: </label>
          <input type='password' id='password' /> <br/>
        </div>
        <div className='input-button'>
          <button id='register' type='button'>Register</button>
          <button id='login' type='submit'>Log In</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default LoginPage