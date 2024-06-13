import React, { useEffect, useState } from 'react'
import '../ChatLeftEle.css'
import axios from 'axios'

function SearchContact() {
  const [searchUser, setSearchUser] = useState('')
  const [gotUser, setGotUser] = useState(null)
  
  const handleSearchUser = (event) => {
    setSearchUser(event.target.value)
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
            <div><p>{gotUser.userId}</p></div>
          ) : (
           <div><p>No User Found</p></div>
          )}
        </div>
    </div>
  )
}

export default SearchContact