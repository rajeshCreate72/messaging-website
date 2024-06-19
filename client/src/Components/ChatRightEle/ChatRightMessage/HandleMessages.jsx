import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchMessages } from "../../service/actions/messagesFetchSync";

function HandleMessages() {
  const msgRef = useRef();
  const { messagesGot } = useSelector((state) => state.addMessages);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (messagesGot) {
      setMessages(messagesGot);
    }
  }, [messages]);

  useEffect(() => {
    msgRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  return (
    <div>
      {Array.isArray(messages) &&
        messages.map((m, index) => (
          <div className="msg-got" key={index}>
            {m.user === userId ? (
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
