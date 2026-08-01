import React from 'react';

function MessageBubble({ mine, text, from }: { mine?: boolean; text?: string; from?: string }) {
  const isMine = mine ?? false;
  const messageFrom = from?.toLowerCase();

  const colorClass = messageFrom === 'kasi'
    ? 'bg-purple-600 text-white'
    : messageFrom === 'hans'
      ? 'bg-green-600 text-white' 
    : messageFrom === 'narrator'
        ? 'bg-gray-800 text-white italic'
      : isMine
        ? 'bg-gray-800 text-white'
        : 'bg-gray-600 text-gray-600';

  return (
    <div className={`h-fit w-fit mx-0.5 flex flex-col relative justify-center items-center rounded-lg p-2 ${colorClass}`}>
      <h6>{text}</h6>
    </div>
  );
}

export default MessageBubble;
