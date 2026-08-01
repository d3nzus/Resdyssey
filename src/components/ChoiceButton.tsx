import React from 'react';
import { progressScript } from '../content/script';

function ChoiceButton({ text }: { text: string }) {
  return (
    <button
      type="button"
      onClick={progressScript}
      className="h-1/5 w-fit mx-auto flex flex-row justify-center items-center bg-gray-800 text-white px-4 py-2 rounded"
    >
      {text}
    </button>
  );
}

export default ChoiceButton;