import React, { useState } from 'react'
import './ChatsMain.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userId, setUserId] = useState('')

    async function submit(event) {
        event.preventDeafault()

        try {
            await axios.post('http://localhost:3000/register',{
                email, password, userId
            })
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='reg-page'>
        <form action="POST" className="reg-form">
            <h3>Registration</h3>
            <br />
            <br />
            <div className='reg-form-ele'>
                <label>MailId: </label>
                <input type='mail' onChange={(event) => {setEmail(event.target.value)}}></input>
                <br />
                <label style={{marginTop: '10px'}}>userId: </label>
                <input type='text'  onChange={(event) => {setUserId(event.target.value)}}></input>
                <br />
                <label style={{marginTop: '10px'}}>Password: </label>
                <input type='password'  onChange={(event) => {setPassword(event.target.value)}}></input>
                <div className='reg-button'>
                    <button type='submit' onClick={submit}>Register</button>
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