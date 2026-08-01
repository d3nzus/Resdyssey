import React from 'react';

export default function Home() {
  const handleStartGame = () => {
    window.location.hash = "#/game";
  };

  return(
    <div className="h-screen mx-auto flex flex-col justify-center items-center bg-black text-white">
        <h1 className="text-2xl">Kim's Odyssey</h1>
        <h6>A Text Based RPG</h6>
        <button onClick={handleStartGame} className="rounded-2xl bg-gray-700 w-fit h-fit p-2">Play</button>
    </div>
      );
}