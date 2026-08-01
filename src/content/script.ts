import { message } from "../types";

let currentMessageIndex = 0;

let messages: message[] = [
  {
    chosen: "Continue",
    from: "narrator",
    text: "You awaken in a daze with gray walls surrounding you lit only by the entrance of meager light from the sunless night.",
    choices: ["Continue"],
  },
];
const listeners = new Set<() => void>();

const script: message[] = [
  {
    chosen: "Continue",
    from: "narrator",
    text: "You awaken in a daze with gray walls surrounding you lit only by the entrance of meager light from the sunless night.",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "hans",
    text: "Hans: Hey, you. You’re finally awake. Do you remember your name?",
    choices: ["Kim", "Shorty McShortFace"],
  },
  {
    chosen: "Kim",
    from: "user",
    text: "It is Kim, shake me harder Hans~",
    choices: ["Continue"],
  },
  {
    chosen: "Shorty McShortFace",
    from: "user",
    text: "My name? It is shorty mcshorty face",
    choices: ["Die From a Concussion"],
  },
  {
    chosen: "Continue",
    from: "Kasi",
    text: "Kasi: Hey doofus, stop dazing and start moving. You surely remember why we are here right now?",
    choices: ["Celebrate my birthday?", "Escape this Maze?"],
  },
  {
    chosen: "Celebrate my birthday?",
    from: "user",
    text: "We are here to celebrate my birthday?",
    choices: ["Die From a Concussion"],
  },
  {
    chosen: "Escape this Maze?",
    from: "user",
    text: "Right. We are looking to find a way to get out of this maze. The maze constructed by Siraris the Triclops.",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "Hans",
    text: "Hans: You good man? If so we need to go before the guards find us and bring us back to the laboratory.",
    choices: ["I am fine.", "My head hurts."],
  },
  {
    chosen: "I am fine.",
    from: "user",
    text: "Yeah. I am fine. Lets go before they catch us.",
    choices: ["Continue"],
  },
  {
    chosen: "My head hurts.",
    from: "user",
    text: "My head is screaming but lets go.",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "Hans",
    text: "Hans: Aight",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "narrattor",
    text: "As you traverse the cascading maze of the building you find yourself before a dark hallway with two paths. ",
    choices: ["Continue"],
  },
   {
    chosen: "Continue",
    from: "Kasi",
    text: "Kasi: I think we should go straight, this is the first door out of this maze weve seen all month.", 
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "Hans",
    text: "Hans: It could be a trap though, it might be safer to stay in the building and find a place to hide.", 
    choices: ["Straight.", "Left."],
  },
  {
    chosen: "Die From a Concussion",
    from: "npc",
    text: "You are suddenly hit by a painful migraine. It seems your injury was fatal. Game Over.",
    choices: [],
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
