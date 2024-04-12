import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className='reg-page'>
        <form action="" className="reg-form">
            <h3>Registration</h3>
            <br />
            <br />
            <div className='reg-form-ele'>
                <label>MailId/UserId: </label>
                <input type='mail'></input>
                <br />
                <label style={{marginTop: '10px'}}>Password: </label>
                <input type='password'></input>
                <div className='reg-button'>
                    <button type='submit'>Log In</button>
                </div>    
            </div>
        </form>
        <div className='reg-login'>
            <p>Not Registered?  <span><Link to='/register' className='reg-link'>Register</Link></span></p>
        </div>
    </div>
  )
}

export default Login