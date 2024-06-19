import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../ChatLeftEle.css";
import { fetchContacts } from "../../service/actions/syncFetchContacts";

function HandlingContacts(props) {
  const { contacts } = useSelector((state) => state.addContact);
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.loginAuth);
  const userId = window.localStorage.getItem("userId");

  useEffect(() => {
    if (isLogged) {
      dispatch(fetchContacts(userId));
    }
  }, [dispatch]);

  const selectContact = (contact) => {
    dispatch({ type: "SET_CONTACT_TO_CHAT", contact });
  };

  return (
    <div>
      {contacts.length > 0 &&
        contacts.map((contact, index) => (
          <div
            className="s-cont"
            key={index}
            onClick={() => {
              selectContact(contact);
            }}
          >
            <h6>{contact}</h6>
          </div>
        ))}
    </div>
  );
}

export default HandlingContacts;
