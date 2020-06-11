import React, {useState} from 'react';
import './App.css';
import {Message} from './Message.js'

export default function App() {
  let [count, setCount] = useState(1)
  let [isMorning, setMorning]= useState(true)



  return (
      <div ckassName= {`box ${isMorning ? 'dayLight' : ''}`}>
        <h1>Day time = {isMorning ? 'Mornings' : 'Night'}</h1>
        <Message counter= {count}/>
        <br />
        <button onClick={
          ()=> setCount(++count)
          }>
            Update Counter
            </button>
      
      </div>
  );
}


