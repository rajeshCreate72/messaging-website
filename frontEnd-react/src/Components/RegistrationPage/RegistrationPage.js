import React from 'react'
import './RegistrationPage.css'

function RegistrationPage() {
  return (
    <div className='register-page'>
      <h1>Registration Page</h1>
      <br/>
      <form>
        <div className='input-container'>
          <label>Email: </label>
          <input type='email' id='email' /> <br/>
        </div>
        <div className='input-container'>
          <label>username: </label>
          <input type='text' id='username' /><br/>
        </div>
        <div className='input-container'>
          <label>Password: </label>
          <input type='password' id='password' /> <br/>
        </div>
        <div className='input-container'>
          <label>Re-enter Your password: </label>
          <input type='password' id='password1' />
        </div>
      </form>
    </div>
  )
}

export default RegistrationPage