import React from 'react';

function MessageBubble({ mine, text }: { mine?: boolean; text?: string }) {
  const isMine = mine ?? false;

  return (
    <div
      className={`h-fit w-fit mx-0.5 flex flex-col relative justify-center items-center rounded-lg p-2 ${
        isMine ? 'bg-gray-800 text-white' : 'bg-gray-600 text-gray-600'
      }`}
    >
      <h6>{text}</h6>
    </div>
  );
}

export default MessageBubble;
