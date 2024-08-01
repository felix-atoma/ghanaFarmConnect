import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    // Dummy data for now
    { id: 1, sender: 'Customer', text: 'Is this product available?' },
    { id: 2, sender: 'Farmer', text: 'Yes, it is available.' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { id: messages.length + 1, sender: 'Customer', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="mb-4">
      <h3 className="text-2xl mb-4">Chat</h3>
      <div className="border border-gray-300 rounded p-4 mb-4 h-64 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className={`mb-2 ${message.sender === 'Customer' ? 'text-right' : ''}`}>
            <span className={`inline-block p-2 rounded ${message.sender === 'Customer' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded mr-2"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage} className="bg-green-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
