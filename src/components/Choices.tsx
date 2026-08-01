import React from 'react';
import ChoiceButton from './ChoiceButton';

function Choices() {
  return (
    <div className="h-1/5 w-full mx-auto flex flex-row justify-center items-center bg-gray-400 text-white">
        <ChoiceButton text="Continue" />
    </div>
  );
}

export default Choices;