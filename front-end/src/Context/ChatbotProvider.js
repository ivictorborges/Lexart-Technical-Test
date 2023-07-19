import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChatbotContext from './ChatbotContext';

export default function ChatbotProvider({ children }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [chatInput, setChatInput] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    const [conversation, setConversation] = useState([]);

  const value = {
    username, setUsername,
    password, setPassword,
    chatInput, setChatInput,
    selectedOption, setSelectedOption,
    conversation, setConversation,
  };

  return (
    <ChatbotContext.Provider value={ value }>
      {children}
    </ChatbotContext.Provider>
  );
}

ChatbotContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};