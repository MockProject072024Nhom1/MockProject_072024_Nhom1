import React, { useState } from "react";

const messages = [
  { sender: "Ming", text: "Can you help me?", timestamp: "23 Jan 2:00 pm" },
  { sender: "Administrator", text: "Sure, how can I assist?", timestamp: "23 Jan 2:01 pm" },
  { sender: "Ming", text: "Can you help me?", timestamp: "23 Jan 2:02 pm" },
  { sender: "Administrator", text: "Absolutely!", timestamp: "23 Jan 2:03 pm" },
  { sender: "Ming", text: "Can you help me?", timestamp: "23 Jan 2:02 pm" },
  { sender: "Administrator", text: "Absolutely!", timestamp: "23 Jan 2:03 pm" },
  { sender: "Administrator", text: "Absolutely!", timestamp: "23 Jan 2:03 pm" },
  { sender: "Administrator", text: "Absolutely!", timestamp: "23 Jan 2:03 pm" },
  { sender: "Administrator", text: "Absolutely!", timestamp: "23 Jan 2:03 pm" },
  { sender: "Administrator", text: "Absolutely!", timestamp: "23 Jan 2:03 pm" },
  { sender: "Administrator", text: "Absolutely!", timestamp: "23 Jan 2:03 pm" },
  { sender: "Administrator", text: "Absolutely!", timestamp: "23 Jan 2:03 pm" },
];

export default function Chat() {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input) {
      console.log("Message sent:", input);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-fit mt-20 pt-0.5">
      <div className="flex justify-center items-center h-12  bg-gray-100 border-b-4 border-gray-300">
        <span className="font-bold text-3xl">Respond Customer Request</span>
      </div>

      <div className="flex flex-1 bg-gray-100">
        {/* Left Panel: User Messages */}
        <div className="w-1/4 bg-white p-6 overflow-y-auto border-r-4 border-gray-300">
          {messages
            .filter((msg) => msg.sender === "Ming")
            .map((message, index) => (
              <div key={index} className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                  M
                </div>
                <div className="ml-3">
                  <div className="font-bold">{message.sender}</div>
                  <div className="text-gray-600">{message.text}</div>
                </div>
              </div>
            ))}
        </div>

        {/* Right Panel: Chat Area */}
        <div className="flex flex-col flex-1 bg-white overflow-hidden ml-0 relative">
          <h6 className="text-xl p-2 ml-2 font-semibold">Chat</h6>
          <div className="border-b-2 border-gray-300 w-full mb-2"></div>
          <div className="flex-1 overflow-hidden">
            <div className="overflow-y-auto h-[calc(91.5vh-178px)] p-4"> 
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-4 ${
                    message.sender === "Administrator" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "Ming" && (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                      M
                    </div>
                  )}
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      message.sender === "Administrator"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    <div>{message.text}</div>
                    <div className="text-xs text-gray-500">{message.timestamp}</div>
                  </div>
                  {message.sender === "Administrator" && (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center ml-2">
                      A
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex bg-gray-300 py-2 px-4">
            <input
              type="text"
              placeholder="Type Message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border border-gray-300 "
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-blue-600 text-white"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}