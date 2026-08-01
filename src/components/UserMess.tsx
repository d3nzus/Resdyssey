import React, { useEffect, useState } from 'react';
import MessageBubble from './MessageBubble';
import { getMessages, subscribeToMessages } from '../content/script';

function UserMess() {
    const [visibleMessages, setVisibleMessages] = useState(getMessages());

  useEffect(() => {
    const unsubscribe = subscribeToMessages(() => {
      setVisibleMessages(getMessages());
    });

    return unsubscribe;
  }, []);
  return (
    <div className="h-4/5 w-1/2 mx-auto flex flex-col justify-end items-end bg-gray-600 text-white">
      {visibleMessages.map((entry, index) => (
        <MessageBubble mine={entry.from === 'user'} text={entry.text} />
      ))}
    </div>
  );
}

export default UserMess;