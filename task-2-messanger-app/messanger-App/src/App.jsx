import React, { useState } from 'react'
import './App.css'

export default function App() {

const [name,setUser]=useState("saleem")
const [chats, setChats]=useState([{name: "ali",message:"hello how are you?"},{name: "saleem",message:"i am good ali."}])

const [mesg ,setMesg]=useState('');

function sendChat(){
  const c=[...chats];
  c.push({name,message:mesg});
  setChats(c)
  setMesg('')
}


  return (
    
    <>
    <h1>User: {name}</h1>
    <div className="chatContainer ">
   {chats.map((value)=><div className={`container ${value.name===name ? 'me':''}`}>
    <p className="chatBox">
      <strong>{value.name}</strong>
      <span className={` ${value.name===name ? 'myMessage': ''}`}>{value.message}</span>
    </p>
    </div>)}
    </div>
    <input onInput={(e)=>setMesg(e.target.value)} type="text" name="text" value={mesg} id="text" placeholder='input your message'/>
    <button onClick={sendChat} type="submit">Send</button>
    </>
    
  )
}
