import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function HandleMessages({ theseMessages }) {
  const msgRef = useRef();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    msgRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [theseMessages]);

  return (
    <div>
      {Array.isArray(theseMessages) &&
        theseMessages.map((m, index) => (
          <div className="msg-got" key={index}>
            {m.user !== undefined && m.user === userId ? (
              <div className="row" ref={msgRef}>
                <div className="col-9"></div>
                <div className="col my-msg">
                  <p>{m.msg}</p>
                  <p>{m.time}</p>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-3 not-my-msg">
                  <p>{m.msg}</p>
                  <p>{m.time}</p>
                </div>
                <div className="col"></div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default HandleMessages;
