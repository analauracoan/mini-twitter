import React from "react";

const MessageList = ({ messages, onDeleteMessage, userEmail }) => {
  return (
    <ul className="space-y-4 mt-6">
      {messages.map((message) => (
        <li key={message.id} className="p-4 rounded-md relative bg-white shadow">
          <p className="text-gray-800">{message.text}</p>
          <div className="text-sm text-gray-500 mt-1">{message.email}</div>
          <div className="text-xs text-gray-400">{new Date(message.timestamp).toLocaleString()}</div>

          {message.email === userEmail && (
            <button
              onClick={() => onDeleteMessage(message.id)}
              className="absolute top-2 right-2 text-red-500 text-xs hover:underline"
            >
              Excluir
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
