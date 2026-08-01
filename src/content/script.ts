import { message } from '../types';

let currentMessageIndex = 0;

let messages: message[] = [
    {
        from: 'npc',
        text: 'Hello, welcome to Resdyssey! How can I assist you today?',
        choices: ['Continue']
    }
];
const listeners = new Set<() => void>();

const script: message[] = [
    {
        from: 'npc',
        text: 'Hello, welcome to Resdyssey! How can I assist you today?',
        choices: ['Continue']
    },
    {
        from: 'user',
        text: 'H-Hi..',
        choices: ['Continue']
    },
];

function notifyListeners() {
    listeners.forEach((listener) => listener());
}

function progressScript() {
    currentMessageIndex++;
    messages = script.slice(0, currentMessageIndex + 1);
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