import React, { useState } from "react";

const InputBox = ({ onSendMessage }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="flex p-4 bg-white border-t border-gray-200">
      <input
        type="text"
        className="flex-1 p-2 border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 "
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="ask your doubt..."
      />
      <button
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-[20px] hover:bg-blue-700"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default InputBox;
