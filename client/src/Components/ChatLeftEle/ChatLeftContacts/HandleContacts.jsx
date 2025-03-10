import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../ChatLeftEle.css";
import { getContacts } from "../../service/actions/syncContacts";
import { getMessages } from "../../service/actions/syncMessages";

function HandlingContacts() {
    const { contacts } = useSelector((state) => state.addContacts);
    const { isLogged } = useSelector((state) => state.loginAuth);
    const userId = window.localStorage.getItem("userId");
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLogged) {
            dispatch(getContacts(userId));
        }
    }, [dispatch, isLogged]);

    const selectContact = (contact) => {
        dispatch({ type: "SET_CONTACT_TO_CHAT", contact });
    };

    // const retriveContactMessages = (contact) => {
    //   const data = {
    //     userId: userId,
    //     contactId: contact,
    //   };
    //   dispatch(getMessages(data));
    // };

    return (
        <div>
            {contacts.length > 0 &&
                contacts.map((contact, index) => (
                    <div
                        className="s-cont"
                        key={index}
                        onClick={() => {
                            selectContact(contact);
                            // retriveContactMessages(contact);
                        }}
                    >
                        <h6>{contact}</h6>
                    </div>
                ))}
        </div>
    );
}

export default HandlingContacts;
