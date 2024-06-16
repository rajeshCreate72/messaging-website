import React, { useEffect, useState } from 'react'
import './ChatsMain.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from './service/actions/userRegAction'
import { loginSuccess } from './service/actions/userLogActions'

function RegisterPage() {
    const [ details, setDetails ] = useState({email:'', userId:'', password:'', loginState: false})
    const { isSuccess, isLoading, error } = useSelector((state) => state.registerUser)
    const [isError, setError] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleDetails = (event) => {
        setDetails({ ...details, [event.target.name]:event.target.value, loginState: isSuccess})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(register(details))
        dispatch(loginSuccess())
    }

    // To set error and disapper after 5 secs
    useEffect(() => {
        if(error) {
            setTimeout(() => {
                setError(true)
            }, 5000)
        }
    }, [error])

    // To navigate to homepage after registering
    useEffect(() => {
        if(isSuccess) {
            navigate('/')
        }
    }, [navigate, isSuccess, dispatch])

  return (
    <div className='reg-page'>
        <form onSubmit={ handleSubmit } className="reg-form">
            <h3>Registration</h3>
            <br />
            <br />
            <div className='reg-form-ele'>
                <label>MailId: </label>
                <input type='mail' name='email' onChange={ handleDetails } value={details.email}></input>
                <br />
                <label style={{marginTop: '10px'}}>user id: </label>
                <input type='text' name='userId' onChange={ handleDetails } value={details.userId}></input>
                <br />
                <label style={{marginTop: '10px'}}>Password: </label>
                <input type='password' name='password' onChange={ handleDetails } value={details.password}></input>
                <div className='reg-button'>
                    <button type='submit'>Register</button>
                </div>    
            </div>
        </form>
        <div className='reg-login'>
            <p>Already Registered?  <span><a href='/login' className='reg-link'>Log In</a></span></p>
        </div>
        {isError && (<div className='error'>{ error }</div>)}
        {isLoading && (<div className='load'>Loading...</div>)}
    </div>
  )
}

export default RegisterPage