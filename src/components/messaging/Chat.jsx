import React from 'react';

const Chat = ({ messages = [] }) => {
  if (messages.length === 0) {
    return <div>No messages</div>;
  }

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message.text}</div>
      ))}
    </div>
  );
};

export default Chat;
