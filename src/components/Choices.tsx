import React, { useEffect, useState } from 'react';
import ChoiceButton from './ChoiceButton';
import { getMessages, subscribeToMessages } from '../content/script';

function Choices() {
  const [visibleMessages, setVisibleMessages] = useState(getMessages());

  useEffect(() => {
    const unsubscribe = subscribeToMessages(() => {
      setVisibleMessages(getMessages());
    });

    return unsubscribe;
  }, []);

  const currentMessage = visibleMessages[visibleMessages.length - 1];

  return (
    <div className="h-1/5 w-full mx-auto flex flex-row justify-center items-center gap-2 bg-gray-400 text-white p-4">
      {currentMessage?.choices?.map((choice, index) => (
        <ChoiceButton key={`${choice}-${index}`} text={choice} />
      ))}
    </div>
  );
}

export default Choices;