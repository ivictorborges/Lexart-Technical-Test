import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import ChatbotContext from '../Context/ChatbotContext';
import '../chat.css';

export default function Chat() {
  const {
    username,
    chatInput, setChatInput,
    selectedOption, setSelectedOption,
    conversation, setConversation,
  } = useContext(ChatbotContext);

  const history = useHistory();

  const handleChatInput = (e) => {
    setChatInput(e.target.value);
  };

  useEffect(() => {
      const isStore = conversation.some((c) => c.text.toLowerCase() === "goodbye");

      if (isStore) {
      const userArray = conversation.filter((c) => c.store === true);

      const conversationArray = userArray.reduce((prev, curr) => {
        const existing = prev.find((chat) => chat.user === curr.user);
        if (existing) {
          existing.text.push(curr.text)
        } else {
          prev.push({user: curr.user, text: [curr.text]});
        }
        return prev;
      }, []);
  
      axios.post("http://localhost:3001/messages", conversationArray).then(response => {
        console.log("Conversation stored successfully!", response);
      })
      .catch(error => {
        console.error("Failed to store conversation:", error);
      });}
  }, [conversation]);
  
  
  const handleMessage = () => {
    const message = chatInput.toLowerCase();

    if (message.includes("hello")) {
      setConversation([...conversation, {user: username, text: chatInput, store: true}, { user: "Bot", text: "Hello, how are you?" }]);
    } else if (message.includes("goodbye")) {
      setConversation([...conversation, {user: username, text: chatInput, store: true}, { user: "Bot", text: "Goodbye, have a nice day !" }]);
    } else if (message.includes("good")) {
      setConversation([...conversation, {user: username, text: chatInput, store: true}, { user: "Bot", text: "Thank you for appreciating !" }]);
    } else if (message.includes("i want")) {
      setConversation([...conversation, {user: username, text: chatInput, store: true}, { user: "Bot", text: "Sure, we will help you !" }]); 
    } else if (message.includes("loan")) {
      setConversation([...conversation, {user: username, text: chatInput, store: true}, {
        user: "Bot",
        text: "",
        options: [
          {
            text: "Do you want to apply for a loan ?",
            info: "Lorem ipsum1",
            href: "This is a href",
          },
          {
            text: "Loan Conditions",
            info: "Lorem ipsum2",
            href: " This is a href",
          },
          {
            text: "Help",
            info: "Lorem ipsum3",
            href: "This is a href",
          },
        ],
      }]);
    } else {
      setConversation([...conversation, { user: "Bot", text: "I'm not sure what you mean by that." }]);
    }

    setChatInput("");
  };

  const handleOptionsButton = (option) => {
        setSelectedOption(option);
  };

  const handleButtonExport = () => {
    history.push('/export');
  };

  return (
    <div className="chat-container">
      <h1>Chat</h1>
      <ul>
        {conversation.map((message, index) => (
          <React.Fragment key={index}>
            {message.text && (
              <li className={message.user === username ? "user-message" : "bot-message"}>
                {message.text}
              </li>
            )}
            {message.options &&
              message.options.map((opt) => (
                <div key={opt.text} className="options-container">
                  <li >
                  {selectedOption === opt ? (
                    <span>
                      <p>{opt.text}</p>
                      <p>{opt.info}</p>
                      <a href={opt.href}>Learn more</a>
                    </span>
                  ):(
                    <button onClick={() => handleOptionsButton(opt)} type="button">
                      {opt.text}
                    </button>
                  )}
                  </li>
                </div>
              ))}
          </React.Fragment>
        ))}
    </ul>    
      <input
        type="text"
        value={chatInput}
        placeholder="Enter your message"
        onChange={handleChatInput}
      />
      <button onClick={handleMessage}>Send</button>
      <button className="export" onClick={handleButtonExport}>Export Conversation</button>
    </div>
  );
};