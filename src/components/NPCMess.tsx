import React, { useEffect, useState } from 'react';
import MessageBubble from './MessageBubble';
import { getMessages, subscribeToMessages } from '../content/script';

function NPCMess() {
  const [visibleMessages, setVisibleMessages] = useState(getMessages());

  useEffect(() => {
    const unsubscribe = subscribeToMessages(() => {
      setVisibleMessages(getMessages());
    });

    return unsubscribe;
  }, []);

  return (
    <div className="h-4/5 w-1/2 mx-auto flex flex-col justify-end items-baseline gap-2 bg-gray-600 text-white">
      {visibleMessages.map((entry, index) => (
        <MessageBubble key={`${entry.from}-${index}`} mine={entry.from != 'user'} text={entry.text} from={entry.from}/>
      ))}
    </div>
  );
}

export default NPCMess;