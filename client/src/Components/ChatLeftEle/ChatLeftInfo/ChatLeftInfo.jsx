import React, { useEffect, useRef, useState } from 'react'
import SearchContact from './SearchContact'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../service/actions/userLogActions'
import { useNavigate } from 'react-router-dom'

function ChatLeftInfo(props) {
  const [dropDown, setDropdown] = useState(false)
  const [searchContact, setSearchContact] = useState(false)
  const dropRef = useRef(null)
  const addBtn = useRef(null)
  const dispatch = useDispatch()
  const { isLogged } = useSelector((state) => state.loginAuth)
  const navigate = useNavigate()


  const handleDropdown = () => {
    setDropdown(!dropDown)
  }

  const handleSearchContact = () => {
    setSearchContact(!searchContact)
  }

  useEffect (() => {
    const handleCloseEvent = (event) => {
      if(dropRef.current && !dropRef.current.contains(event.target)) {
        setDropdown(false)
      }
    }

    document.addEventListener('click', handleCloseEvent)

    return () => {
      document.removeEventListener('click', handleCloseEvent)
    }
  }, [])
  
  console.log(isLogged)

  useEffect(() => {
    if(!isLogged) {
      console.log(isLogged)
      navigate('/login')
      console.log('Logged Out successfully')
    }
  }, [isLogged])

  const handleLogOut = () => {
    dispatch(logout())
  }

  return (
    <div className='info-lt'>
        <form type='GET'>
          <input className='search-box-info' type='search' formAction='/search' placeholder='Enter a contact...'></input>
        </form>
        <div className='drop-down' ref={dropRef}>
          <button className='drop-button' onClick={handleDropdown}><h5>&#x22EE;</h5></button>
          {dropDown && (<div className="drop-content">
            <ul style={{listStyle: 'none'}}>
              <li><button 
                onClick={() => {
                  handleDropdown()
                  handleSearchContact()
                }} className='add-btn' ref={addBtn}><h5>Add Contact</h5></button></li>
              <li><button 
                onClick={() => {
                  handleDropdown()
                  handleLogOut()
                }} className='logout-btn'><h5>Log Out</h5></button></li>
            </ul>
          </div>)}
        </div>
        {searchContact && (<div className="add-contact-search">
          <SearchContact />
          <button onClick={handleSearchContact}>Close</button>
        </div>)}
    </div>
  )
}

export default ChatLeftInfo;