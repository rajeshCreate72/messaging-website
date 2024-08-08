import React, { useEffect, useState } from "react";
import "../ChatLeftEle.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { postContact } from "../../service/actions/syncContacts";

function SearchContact() {
  const [searchUser, setSearchUser] = useState("");
  const [gotUser, setGotUser] = useState(null);
  const dispatch = useDispatch();

  const handleSearchUser = (event) => {
    setSearchUser(event.target.value);
  };

  const createContact = () => {
    const contactData = {
      userId: window.localStorage.getItem("userId"),
      contact: gotUser.userId,
    };
    console.log(contactData);
    console.log(contactData.userId);
    dispatch(postContact(contactData));
  };

  useEffect(() => {
    if (searchUser) {
      async function fetchUser(user) {
        try {
          const response = await axios.get(
            "https://chat-website-server.vercel.app/api/users",
            {
              params: { userId: user },
            }
          );
          setGotUser(response.data);
        } catch (error) {
          console.log("No user: ", error.message);
          setGotUser(null);
        }
      }
      fetchUser(searchUser);
    } else {
      setGotUser(null);
    }
  }, [searchUser]);

  return (
    <div className="search-contact">
      <form typeof="GET">
        <input
          type="search"
          placeholder="Enter the user's username..."
          value={searchUser}
          onChange={handleSearchUser}
        />
      </form>
      <div className="get-contacts">
        {gotUser ? (
          <div className="search-user">
            <p>{gotUser.userId}</p>
            <button onClick={createContact} className="message-user">
              Message
            </button>
          </div>
        ) : (
          <div>
            <p>No User Found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchContact;
