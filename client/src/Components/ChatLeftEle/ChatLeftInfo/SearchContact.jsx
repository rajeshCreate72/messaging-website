import React, { useState } from 'react'
import '../ChatLeftEle.css'
import axios from 'axios';

function SearchContact() {
  const [toSearchUser, setToSearchUser] = useState('');
  const [users, setUsers] = useState([])

  const handleToSearchUser = (event) => {
    setToSearchUser(event.target.value)
  }

  const usersData = {};

  const usersList = async(event) => {
    // event.preventDefault()
    try {
      const response = await axios.get('http://localhost:8000/api/register')
      usersData = response.JSON()

      console.log(usersData)
    }
    catch(error) {
      console.log("Error retriveing users data", error.message)
    }
  }
  usersList()

  return (
    <div className='search-contact'>
        <form typeof='GET'>
            <input 
              type="search"
              placeholder="Enter the user's username..."
              value={toSearchUser}
              onChange={handleToSearchUser}
            />
        </form>
        <div className='get-contacts'>Getting those contacts...</div>
    </div>
  )
}

export default SearchContact