import React, { useState } from "react";
import Message from "./Message";
import InputBox from "./InputBox";
import ChatbotImage from "../assets/chatbot.jpeg"; // Replace with your image path

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    setMessages([...messages, { text, sender: "user" }]);
    // Simulate a bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "This is a bot response", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div>
      <div className="flex flex-col h-screen max-w-lg mx-auto bg-white shadow-2xl rounded-[20px] overflow-hidden mt-12 mb-12">
        <div className="flex flex-col items-center justify-center bg-blue-600 p-6 text-white shadow-xl">
          <img
            src={ChatbotImage}
            alt="Chatbot"
            className="w-20 h-20 rounded-full shadow-2xl mb-4"
          />
          <h2 className="text-lg font-semibold text-center">Chatbot</h2>
        </div>
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {messages.map((msg, index) => (
            <Message key={index} text={msg.text} sender={msg.sender} />
          ))}
        </div>
        <InputBox onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatWindow;
