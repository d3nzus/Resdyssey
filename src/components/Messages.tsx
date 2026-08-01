import React from 'react';
import MessageBubble from './MessageBubble';
import NPCMess from './NPCMess';
import UserMess from './UserMess';

function Messages() {
  return (
    <div className="h-4/5 w-full wrap-anywhere mx-auto flex flex-row justify-center items-center bg-gray-600 text-white">
        <NPCMess />
        <UserMess />
    </div>
  );
}

export default Messages;