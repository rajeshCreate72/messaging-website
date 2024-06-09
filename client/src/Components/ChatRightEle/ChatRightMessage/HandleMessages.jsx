import React, { useRef, useEffect } from 'react'

function HandleMessages(props) {
  const msgs = props.msg;
  const msgRef = useRef(null);

  useEffect(() => {
    // msgRef.current refers to the msg sent by user not contact
    // (Object Chaning) msgRef.current? <- checks if it is taking any div as referance
        // the ref has set to something before this effect has to execute.
    msgRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [msgs])

  return (
    <div>
        {msgs.map((m, index) => (
          <div className='msg-got' key={index}>
            {m.user === "1123" ? (
              <div className='row' ref={msgRef}>
                <div className='col-9'></div>
                <div className='col my-msg'>
                  <p>{m.msg}</p>
                  <p>{m.time}</p>
                </div>
              </div>
            ) : (
              <div className='row'>
                <div className='col-3 not-my-msg'>
                  <p>{m.msg}</p>
                  <p>{m.time}</p>
                </div>
                <div className='col'></div>
              </div>
            )}
          </div>
        ))}
    </div>
  )
}

export default HandleMessages