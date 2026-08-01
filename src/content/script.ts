import { message } from '../types';

let currentMessageIndex = 0;

let messages: message[] = [
    {
        chosen: "Continue",
        from: 'npc',
        text: 'You awaken in a daze with gray walls surrounding you lit only by the entrance of meager light from the sunless night.',
        choices: ['Continue']
    }
];
const listeners = new Set<() => void>();

const script: message[] = [
    {
        chosen: "Continue",
        from: 'npc',
        text: 'You awaken in a daze with gray walls surrounding you lit only by the entrance of meager light from the sunless night.',
        choices: ['Continue']
    },
    {
        chosen: "Continue",
        from: 'npc',
        text: 'Hans: Hey, you. You’re finally awake. Do you remember your name?',
        choices: ['Kim', 'Shorty McShortFace']
    },
    {
        chosen: "Kim",
        from: 'user',
        text: 'It is Kim, shake me harder Hans~',
        choices: ['Continue']
    },
    {
        chosen: "Shorty McShortFace",
        from: 'user',
        text: 'My name? It is shorty mcshorty face',
        choices: ['Die From a Concussion']
    },
    {
        chosen: "Continue",
        from: 'npc',
        text: 'Kasi: Hey doofus, stop dazing and start moving. You surely remember why we are here right now?',
        choices: ['Celebrate my birthday?', 'Escape this Maze?']
    },
    {
        chosen: "Celebrate my birthday?",
        from: 'user',
        text: 'We are here to celebrate my birthday?',
        choices: ['Die From a Concussion']
    },
    {
        chosen: "Escape this Maze?",
        from: 'user',
        text: 'Right. We are looking to find a way to get out of this maze. The maze constructed by Siraris the Triclops.',
        choices: ['Continue']
    },
    {
        chosen: "Die From a Concussion",
        from: 'npc',
        text: 'You are suddenly hit by a painful migraine. It seems your injury was fatal. Game Over.',
        choices: []
    },
];

function notifyListeners() {
    listeners.forEach((listener) => listener());
}

function progressScript(choice?: string) {
    const currentEntry = script[currentMessageIndex];
    const nextEntry = script[currentMessageIndex + 1];

    if (nextEntry && nextEntry.chosen !== choice) {
        let nextIndex = currentMessageIndex + 1;

        while (nextIndex < script.length && script[nextIndex].chosen !== choice) {
            nextIndex++;
        }

        if (nextIndex < script.length) {
            currentMessageIndex = nextIndex;
        } else {
            currentMessageIndex = script.length - 1;
        }
    } else if (nextEntry) {
        currentMessageIndex = Math.min(currentMessageIndex + 1, script.length - 1);
    }

    const nextMessage = script[currentMessageIndex];
    const currentMessages = messages.slice();

    if (!currentMessages.some((entry) => entry.text === nextMessage.text)) {
        currentMessages.push(nextMessage);
    }

    messages = currentMessages;
    notifyListeners();
}

function subscribeToMessages(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

function getMessages() {
    return messages;
}

export { messages, progressScript, subscribeToMessages, getMessages };