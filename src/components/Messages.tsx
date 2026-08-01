import React from 'react';
import MessageBubble from './MessageBubble';

function Messages() {
  return (
    <div className="h-4/5 w-full mx-auto flex flex-col justify-center items-center bg-gray-600 text-white">
      <MessageBubble />
      <h2>Message 2</h2>
    </div>
  );
}

export default Messages;