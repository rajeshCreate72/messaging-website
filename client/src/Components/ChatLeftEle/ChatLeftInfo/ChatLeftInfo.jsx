import React, { useEffect, useRef, useState } from 'react'

function ChatLeftInfo(props) {
  const [dropDown, setDropdown] = useState(false)
  const dropRef = useRef(null)

  const handleDropdown = () => {
    setDropdown(!dropDown)
  }

  const handleCloseEvent = (event) => {
    if(dropRef.current && !dropRef.current.contains(event.target)) {
      setDropdown(false)
    }
  }

  useEffect (() => {
    document.addEventListener('click', handleCloseEvent);

    return () => {document.removeEventListener('click', handleCloseEvent)}
  }, [])

  return (
    <div className='info-lt'>
        <form type='GET'>
          <input type='search' formAction='/search' ></input>
        </form>
        <div className='drop-down'>
          <button className='drop-button' onClick={handleDropdown}><h5>&#x22EE;</h5></button>
          {dropDown && (<div className="drop-content" ref={dropRef}>
            <ul style={{listStyle: 'none'}}>
              <li><button onClick={handleDropdown} className='add-btn'><h5>Add Contact</h5></button></li>
              <li><button onClick={handleDropdown} className='logout-btn'><h5>Log Out</h5></button></li>
            </ul>
          </div>)}
        </div>
    </div>
  )
}

export default ChatLeftInfo;