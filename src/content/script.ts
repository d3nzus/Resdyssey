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
    text: "Hans: You good man? If so, we need to go before the guards find us and bring us back to the laboratory.",
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
    text: "Hans: Aight.",
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
    chosen: "Straight.",
    from: "user",
    text: "Lets go straight ahead.",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "narrator",
    text: "You go straight ahead and find a dark ominous door leading to an unknown location.", 
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "narrator",
    text: "You open the door. You find yourself outside of the building into the greater maze", 
    choices: ["What?"],
  },
  {
    chosen: "Left.",
    from: "user",
    text: "Lets go left.",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "narrator",
    text: "You turn left. In front of you is a dimly lit stairwell leading deeper into the cascading maze.", 
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "narrator",
    text: "You descend only to find it a dead end. You hear the guards coming behind.", 
    choices: ["Get Caught"],
  },
  {
    chosen: "What?",
    from: "user",
    text: "Wh-What? What is this?", 
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "narrator",
    text: "The air outside is still and cold, no sound permeating the space. And yet you feel something in your stomach gnawing at you like someone is watching you.", 
    choices: ["I know you are watching.", "I can see you."],
  },
   {
    chosen: "I know you are watching.",
    from: "user",
    text: "Show yourself. I know youre watching me.", 
    choices: ["Continue"],
  },
   {
    chosen: "I can see you.",
    from: "user",
    text: "Show yourself. I can see you.", 
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "Mamshena",
    text: "???: How can you see through my spell?", 
    choices: ["I lied."],
  },
  {
    chosen: "I lied.",
    from: "user",
    text: "I was lying and you fell for my bluff... hahaha", 
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "Mamshena",
    text: "???: Well done. Enlighten me, whats your name?", 
    choices: ["You first."],
  },
  {
    chosen: "You first.",
    from: "user",
    text: "You first, then maybe Ill do the same.", 
    choices: ["Continue"],
  },
   {
    chosen: "Continue",
    from: "Mamshena",
    text: "???: Nice try. But two can play this game.", 
    choices: ["Dont be modest."],
  },
  {
    chosen: "Dont be modest.",
    from: "user",
    text: "Nah dont me modest. I know youre a sage. So lets be honest..", 
    choices: ["You are.."],
  },
  {
    chosen: "You are..",
    from: "user",
    text: "You are Mamshena!", 
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "Mamshena",
    text: "Mamshena: If you're looking for survival, I'll make sure your times well spent.", 
    choices: ["Sounds like a plan."],
  },
  {
    chosen: "Sounds like a plan.",
    from: "user",
    text: "Sounds like a plan. Sage to man. Bestest of friends?", 
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "Mamshena",
    text: "Mamshena: We will see where it ends.", 
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "Mamshena",
    text: "Mamshena:  The only way to slay tje triclops is with the essence of a dragon. In these desolate lands the only place it may reside is in the realm where the heads of researchers are put to rest. Are you ready to take on this quest?", 
    choices: ["Yes.", "No."],
  },
  {
    chosen: "Yes.",
    from: "user",
    text: "Ye.", 
    choices: ["Continue"],
  },
  {
    chosen: "No.",
    from: "user",
    text: "Boi, you think I'm playing.", 
    choices: ["Get Shena-ed"],
  },
  {
    chosen: "Continue",
    from: "Kasi",
    text: "Kasi: Slaying the triclops? The essence of a dragon? But the goal is to escape!", 
    choices: ["We have no choice."],
  },
  {
    chosen: "We have no choice.",
    from: "user",
    text: "Mamshena must be warning us. It sounded like wed have to come face to face with the triclops…",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "narrator",
    text: "Suddenly, the ground shakes with footsteps larger than you. A voice growls, and three eyes (and a glinting bulge above them) appear from the darkness. A triclops! Siraris himself!",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "Siraris",
    text: "Siraris: It sounds like she was right!",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "Hans",
    text: "Hans: AAAAAAAAAAAAA",
    choices: ["Continue"],
  },
   {
    chosen: "Continue",
    from: "Siraris",
    text: "Siraris: ....",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "Kasi",
    text: "Kasi: ....",
    choices: ["..."],
  },
   {
    chosen: "...",
    from: "user",
    text: "....",
    choices: ["Continue"],
  },
   {
    chosen: "Continue",
    from: "Hans",
    text: "Hans: AAAAAAAAAAAA",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "Siraris",
    text: "Siraris: .... dude.. we get it",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "Hans",
    text: "Hans: sorry..",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "Siraris",
    text: "Siraris: ahem..",
    choices: ["Continue"],
  },
   {
    chosen: "Continue",
    from: "Siraris",
    text: "Siraris: Puny creatures! Hades awaits you, for you were unlucky enough to stumble upon me! Now, despair!",
    choices: ["Continue"],
  },



 {
    chosen: "Get Shena-ed",
    from: "narrator",
    text: "Mamshena floods your mind with all that there is to know and to be known. You are burnt to a crisp by limitless divine knowledge. Game Over.",
    choices: [],
  },
    {
    chosen: "Get Caught",
    from: "narrator",
    text: "You get caught by the guards and forced to work in the lab again. Game Over.",
    choices: [],
  },
  {
    chosen: "Die From a Concussion",
    from: "narrator",
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
