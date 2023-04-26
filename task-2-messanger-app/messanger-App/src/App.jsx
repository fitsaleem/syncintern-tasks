import React, { useState } from "react";
import "./App.css";
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";
import { useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState("default user");
  const [chats, setChats] = useState([]);

  const [mesg, setMesg] = useState("");

  const db = getDatabase();
  const postListRef = ref(db, "posts");

  const chatHight = () => {
    const h = document.getElementById("chathight");
    if (h) {
      h.scrollTop = h.scrollHeight;
    }
  };

  useEffect(() => {
    onChildAdded(postListRef, (data) => {
      setChats((chats) => [...chats, data.val()]);
      setTimeout(() => {
        chatHight();
      }, 100);
    });
  }, []);

  function sendChat() {
    const newPostRef = push(postListRef);
    set(newPostRef, {
      user,
      message: mesg,
    });
    setMesg("");
  }

  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        setUser({ name: result.user.displayName, email: result.user.email });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
    
   {user.email ? 

      <div>
        {user.email ?
        <div>
          <h1>User: {user.name}</h1>
          <div id="chathight" className="chatContainer ">
            {chats.map((value, i) => (
              <div
                key={i}
                className={`container ${
                  value.user && value.user.email === user.email ? "me" : ""
                }`}
              >
                <p className="chatBox">
                  <strong>{value.user.name}</strong>
                  <span
                    className={` ${
                      value.user.email === user.email ? "myMessage" : ""
                    }`}
                  >
                    {value.message}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <input
            onInput={(e) => setMesg(e.target.value)}
            type="text"
            name="text"
            value={mesg}
            id="text"
            placeholder="input your message"
          />
          <button onClick={sendChat} type="submit">
            Send
          </button>
        </div>
         : null} 
      </div>
      : (  <div className="center">
      <button className="google-btn"
  onClick={() => {
    googleLogin();
  }}
>
  <img
    src="https://img.icons8.com/color/48/000000/google-logo.png"
    alt="Google icon"
    style={{ marginRight: "10px" }}
  />
  Continue with Google
</button>


    </div>)}
    </>
  );
}
