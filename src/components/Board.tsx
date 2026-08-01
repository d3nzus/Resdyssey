import React from 'react';
import Choices from './Choices';
import Messages from './Messages';

function Board() {
    return (
        <div className="h-5/6 w-3/4 mx-auto flex flex-col gap-0.5 justify-center items-center bg-gray-600 text-white overflow-clip">
            <Messages />
            <Choices />
        </div>
    )
}

export default Board;