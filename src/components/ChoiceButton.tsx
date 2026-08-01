import React from 'react';
import { progressScript } from '../content/script';

function ChoiceButton({ text }: { text: string }) {
  return (
    <button
      type="button"
      onClick={() => progressScript(text)}
      className="h-1/5 w-fit mx-auto flex flex-row justify-center items-center bg-gray-800 text-white px-5 py-5 rounded text-xl"
    >
      {text}
    </button>
  );
}

export default ChoiceButton;