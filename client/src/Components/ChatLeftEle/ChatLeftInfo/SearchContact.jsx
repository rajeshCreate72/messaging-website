import React, { useEffect, useState } from 'react'
import '../ChatLeftEle.css'
import axios from 'axios'
import { syncContacts } from '../../service/actions/syncContacts'
import { useDispatch, useSelector } from 'react-redux'

function SearchContact() {
  const [searchUser, setSearchUser] = useState('')
  const [addContact, setAddedContact] = useState({user: '', contactId: []})
  const [gotUser, setGotUser] = useState(null)
  const { user } = useSelector((state) => state.loginAuth)
  const dispatch = useDispatch()
  
  const handleSearchUser = (event) => {
    setSearchUser(event.target.value)
  }

  const handleContact = (contactId) => {
    setAddedContact()
  }

  const addingContactToDB = () => {
    handleContact()
    dispatch(syncContacts(addContact))
  }

  useEffect(() => {
    if(searchUser) {
      async function fetchUser(user) {
        try {
          const response = await axios.get('http://localhost:8000/api/users', {params: {userId: user}})
          setGotUser(response.data)
        } catch (error) {
          console.log('No user: ', error.message)
          setGotUser(null)
        }
      }
      fetchUser(searchUser)
    } else {
      setGotUser(null)
    }
  }, [searchUser])

  return (
    <div className='search-contact'>
        <form typeof='GET'>
            <input 
              type="search"
              placeholder="Enter the user's username..."
              value={searchUser}
              onChange={handleSearchUser}
            />
        </form>
        <div className='get-contacts'>
          {gotUser ? (
            <div className='search-user' >
              <p>{gotUser.userId}</p>
              <button onClick={addingContactToDB} className='message-user'>Message</button>
            </div>
          ) : (
           <div><p>No User Found</p></div>
          )}
        </div>
    </div>
  )
}

export default SearchContact