import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login } from './service/actions/userActions'


function Login() {
    const [credentials, setCredentials] = useState({email: '', password: ''})
    const dispatch = useDispatch()
    const { isLoading, error, isLogged } = useSelector((state) => state.loginAuth)
    const [isError, setError] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (error) {
            setError(true)
            const errorTime = setTimeout(() => {
                setError(false)
            }, 10000);
            
            return () => {
                clearTimeout(errorTime)
            }
        }
    }, [error])

    const handleChange = (event) => {
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        dispatch(login(credentials))
        if (isLogged) {
            navigate('/')
        }
    }

  return (
    <div className='reg-page'>
        <form onSubmit={handleSubmit} className="reg-form">
            <h3>Login</h3>
            <br />
            <br />
            <div className='reg-form-ele'>
                <label>MailId: </label>
                <input type='mail' name='email' onChange={handleChange} value={credentials.email}></input>
                <br />
                <label style={{marginTop: '10px'}}>Password: </label>
                <input type='password' name='password' onChange={handleChange} value={credentials.password}></input>
                <div className='reg-button'>
                    <button type='submit' disabled={isLoading}>Log In</button>
                </div>    
            </div>
        </form>
        <div className='reg-login'>
            <p>Not Registered?  <span><Link to='/register' className='reg-link'>Register</Link></span></p>
        </div>
        {isError && (<div className='error'>{error}</div>)}
        {isLoading && (<div className='load'>Loading...</div>)}
    </div>
  )
}

export default Login