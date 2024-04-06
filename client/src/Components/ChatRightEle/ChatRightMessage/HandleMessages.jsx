import React from 'react'

function HandleMessages(props) {

  return (
    <div>
        {props.msg.map((m, index) => (
          <div className='msg-got' key={index}>
            {m.user === "1123" ? (
              <div className='row'>
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