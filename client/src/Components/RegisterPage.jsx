import React from 'react'
import './ChatsMain.css'
import { Link } from 'react-router-dom'

function RegisterPage() {
  return (
    <div className='reg-page'>
        <form action="" className="reg-form">
            <h3>Registration</h3>
            <br />
            <br />
            <div className='reg-form-ele'>
                <label>MailId: </label>
                <input type='mail'></input>
                <br />
                <label style={{marginTop: '10px'}}>userId: </label>
                <input type='text'></input>
                <br />
                <label style={{marginTop: '10px'}}>Password: </label>
                <input type='password'></input>
                <div className='reg-button'>
                    <button type='submit'>Register</button>
                </div>    
            </div>
        </form>
        <div className='reg-login'>
            <p>Already Registered?  <span><Link to='/login' className='reg-link'>Log In</Link></span></p>
        </div>
    </div>
  )
}

export default RegisterPage