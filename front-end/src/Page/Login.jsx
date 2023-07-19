import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ChatbotContext from '../Context/ChatbotContext';
import '../login.css';

export default function Login() {
  const {
    username, setUsername,
    password, setPassword,
    conversation, setConversation,
  } = useContext(ChatbotContext);

  const history = useHistory();

  // Allows alphanumeric characters and underscores, length between 3 and 15.
  const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
  // Requires at least one lowercase letter, one uppercase letter, one digit, and length between 6 and 10
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/;

  const handleUsername = (e) => {
    setUsername(e.target.value);
    };
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
    };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const isValidUsername = usernameRegex.test(username);
    const isValidPassword = passwordRegex.test(password);

    if (!isValidUsername) return alert("Your username must be between 3 and 15 characters");

    if (!isValidPassword) return alert("Requires at least one lowercase letter, one uppercase letter, one digit, and length between 6 and 10");


    history.push('/chat');

    setConversation([...conversation, {text: `Welcome, ${username} !`}]);
};

  return (
    <div className='login-container'>
      <h1>Chatbot Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </label>
        <br />
        <button type="submit">Start Conversation</button>
      </form>
    </div>
  )
}
