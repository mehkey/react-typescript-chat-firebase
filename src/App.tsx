import React, { useState ,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import 'firebase/database';
//import * as firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

function App() {
  
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  /*const handleSendMessage = () => {
    setMessages([...messages, message]);
    setMessage('');
  };*/

  useEffect(() => {
    const config = {
      /*
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_AUTH_DOMAIN',
      databaseURL: 'YOUR_DATABASE_URL',
      projectId: 'YOUR_PROJECT_ID',
      storageBucket: 'YOUR_STORAGE_BUCKET',
      messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
      */
    };
    //const firebase = initializeApp(config);

    // Get a reference to the Cloud Firestore database
    //const db = firebase.firestore();
    //const database = getFirestore();
    /*const ref = database.ref('messages');
    ref.on('child_added', (snapshot) => {
      const newMessage = snapshot.val();
      setMessages([...messages, newMessage.text]);
    });*/
  }, []);

  const handleSendMessage = () => {
    //const database = getFirestore();
    console.log()
    /*const ref = database.ref('messages');
    ref.push({
      text: message,
      timestamp: Date.now(),
    });
    setMessage('');*/
  };

  return (
    <div className="chat-container">
    <ul className="chat-messages">
      {messages.map((message) => (
        <li className="message">
          <div className="avatar" />
          <div className="text">{message}</div>
        </li>
      ))}
    </ul>
    <div className="chat-input">
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className="message-input"
      />
      <button onClick={handleSendMessage} className="send-button">
        Send
      </button>
    </div>
  </div>

  );

  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
