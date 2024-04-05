import React from 'react'

function HandleMessages(props) {

  return (
    <div>
        {props.msg.map((m, index) => (
          <div className='msg-got' key={index}>
            {m.user === "1123" ? (
              <div className='row'>
                <div className='col-9'></div>
                <div className='col-3'>
                  <h1>{m.msg}</h1>
                  <h2>{m.time}</h2>
                </div>
              </div>
            ) : (
              <div className='row'>
                <div className='col'>
                  <h1>{m.msg}</h1>
                  <h2>{m.time}</h2>
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  )
}

export default HandleMessages