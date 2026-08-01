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
    text: "Mamshena:  The only way to slay the triclops is with the essence of a dragon. In these desolate lands the only place it may reside is in the realm where the heads of researchers are put to rest. Are you ready to take on this quest?", 
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
    from: "narrator",
    text: "You accept. Mamshena tells you where to go and leaves.", 
    choices: ["Continue"],
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
    chosen: "Continue",
    from: "narrator",
    text: "In a moment, powerful hands grasp all three of you. You struggle to escape, but its no use. Your world begins to grow dark as the crushing grip around you tightens even more…",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "narrator",
    text: "Suddenly, you awaken. Cavernous walls hang high above you. The air is hot and dry, with the faint scent of fungus. Various items lay scattered about, and quiet silhouettes of other people huddle in the shadows. A sign above reads...",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "narrator",
    text: "OFFICE OF THE RESEARCH UNIT HEAD",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "Hans",
    text: "Hans: Hey you! Youre finally awak-",
    choices: ["I know."],
  },
   {
    chosen: "I know.",
    from: "user",
    text: "Yeah, yeah, I know, ow my head…",
    choices: ["Continue"],
  },
  {
    chosen: "Continue",
    from: "Kasi",
    text: "Kasi: Damn. Were in Siraris lair. We need to find a way to escape.",
    choices: ["Approach the strangers."],
  },
  {
    chosen: "Approach the strangers.",
    from: "user",
    text: "Imma talk to those guys.",
    choices: ["Continue"]
  },




  {
    chosen: "Continue",
    from: "narrator",
    text: "Theres a lot of guys here, who do you wanna talk to?",
    choices: ["Guy in a green jacket", "Guy hunched over"]
  },

  {
    chosen: "Guy in a green jacket",
    from: "Renz",
    text: "Renz: Hi Kim.",
    choices: ["Hi Renz."]
  },
  {
    chosen: "Hi Renz.",
    from: "user",
    text: "Oh. Hi Renz. Anything you wanna tell me?",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "Renz",
    text: "Renz: Yeah, I took a peek at the code of this game. You're supposed to talk to the WU03 members to progress.",
    choices: ["Thanks."]
  },
   {
    chosen: "Thanks.",
    from: "user",
    text: "Woah. Thanks, Renz.",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "Renz",
    text: "Renz: Glad to Help. Royen's right there.",
    choices: ["Guy hunched over"]
  },

   {
    chosen: "Guy hunched over",
    from: "Rawyen",
    text: "Rawyen: Hello!",
    choices: ["Hi Rawyen."]
  },
  {
    chosen: "Hi Rawyen.",
    from: "user",
    text: "Its Rawyen!",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "Rawyen",
    text: "Rawyen: Woe is you, traveller! So you have been captured by the dreadful triclops Siraris. My companions and I too suffered this fate. Now we do nothing but dry mushrooms under UV light 24/7 for his entertainment.",
    choices: ["How do we escape?"]
  },
   {
    chosen: "How do we escape?",
    from: "user",
    text: "How do we escape?.",
    choices: ["Continue"]
  }, 
  {
    chosen: "Continue",
    from: "Rawyen",
    text: "Rawyen: The only way is to slay him! Alas, I know no manmade weapon capable of such a feat. But, I do know this: his weak point is the third eye on his forehead!",
    choices: ["Okay."]
  },
  {
    chosen: "Okay.",
    from: "user",
    text: "Okay. Noted with thanks.",
    choices: ["Continue"]
  }, 
  {
    chosen: "Continue",
    from: "Rawyen",
    text: "Rawyen: While youre here, try conversing with the others in my group.",
    choices: ["Guy with a telescope", "Guy with headphones"]
  },

  {
    chosen: "Guy with a telescope",
    from: "Ichiro",
    text: "Ichiro: *Yawn* Hello… fellow traveller…",
    choices: ["Hi Ichiro."]
  },
  {
    chosen: "Hi Ichiro.",
    from: "user",
    text: "Hi Ichi.. Are you okay?",
    choices: ["Continue"]
  }, 
   {
    chosen: "Continue",
    from: "Ichiro",
    text: "Ichiro: Im not allowed to sleep. I must watch over these mushrooms. Truly, the world is cruel.",
    choices: ["Can I help?"]
  },
   {
    chosen: "Can I help?",
    from: "user",
    text: "Is there a way we can help you?",
    choices: ["Continue"]
  }, 
  {
    chosen: "Continue",
    from: "Ichiro",
    text: "Ichiro: Slaying Siraris is the way! They say the poison of the Dragon Fruits peels is the only thing strong enough to kill him. There is one within the Ramzen Fields in this labyrinth, but getting there is next to impossible…",
    choices: ["Oh, right"]
  },
   {
    chosen: "Oh, right",
    from: "user",
    text: "Thats right! Mamshena said something about slaying the triclops with the essence of a dragon",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "Ichiro",
    text: "Ichiro: We are counting on you. Try talking to my friend over there, he might have something useful to say.",
    choices: ["Guy with headphones"]
  },

  { chosen: "Guy with headphones",
    from: "Sean",
    text: "Sean: waga waga",
    choices: ["Hi Sean."]
  },
  { chosen: "Hi Sean.",
    from: "user",
    text: "Waga waga to you too, Sean. Do you know any way to escape Siraris?",
    choices: ["Continue"]
  },
{ chosen: "Continue",
    from: "Sean",
    text: "Sean: Waga waga waga. (He must be slain first, and only then can we escape. A poison crafted from the Dragon Fruit should do the trick.)",
    choices: ["Continue"]
  },
  { chosen: "Continue",
    from: "Sean",
    text: "Sean: Waga waga waga. Waga waga waga waga. (But Siraris is not foolish enough to eat the fruit. The poison must be extracted somehow, then administered through injection.)",
    choices: ["Continue"]
  },
  { chosen: "Continue",
    from: "Sean",
    text: "Sean: Waga waga waga waga. (His body is impervious to harm, but there must be a weak spot somewhere…)",
    choices: ["Thanks."]
  },
  {
    chosen: "Thanks.",
    from: "user",
    text: "Woah. Thanks, Sean.",
    choices: ["Continue"]
  },


  {
    chosen: "Continue",
    from: "narrator",
    text: "With the guidance of your new allies, you navigate the labyrinth around Siraris lair until you find it: a barren stretch of land where all plant life has shrivelled up. Only a single cactus plant rises from the dirt, shining as if all the life in this place had been pooled into it. Hanging from a fleshy leaf is a single spiky fruit. The Dragon Fruit…",
    choices: ["Grab it."]
  },
   {
    chosen: "Grab it.",
    from: "user",
    text: "Everyone stand back. Im going to grab it.",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "Enzo",
    text: "???: NOT SO FAST! NGYAHAHAH",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "narrator",
    text: "Suddenly, a strange troll appears behind the plant, scrambling onto the top.",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "Enzo",
    text: "Trollenzo: I am Trollenzo! Guardian of the Dragon Fruit. To pick this fruit, you must first pass my test! Answer all three questions correctly, and the prize is yours.",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "Sean",
    text: "Sean: Waga (uh oh..  i didnt study...)",
    choices: ["I got this."]
  },
  {
    chosen: "I got this.",
    from: "user",
    text: "Dont worry guys. I got this.",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "Enzo",
    text: "Trollenzo: Lets see about that!",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "Enzo",
    text: "Trollenzo: First Question! What is the proper name of this fruit?",
    choices: ["Hylocereus polyrhizus", "Jaquavius"]
  },

   {
    chosen: "Hylocereus polyrhizus",
    from: "user",
    text: "Hylocereus polyrhizus",
    choices: ["Continue"]
  },
   {
    chosen: "Jaquavius",
    from: "user",
    text: "Jaquavius",
    choices: ["Get Trollenzo-ed"]
  },

  {
    chosen: "Continue",
    from: "Enzo",
    text: "Trollenzo: Clever.. What about this! How do you obtain an extract of its peels?",
    choices: ["Maceration and soaking in 96% ethanol", "Kick it"]
  },
  {
    chosen: "Maceration and soaking in 96% ethanol",
    from: "user",
    text: "Maceration and soaking in 96% ethanol",
    choices: ["Continue"]
  },
   {
    chosen: "Kick it",
    from: "user",
    text: "Kick it",
    choices: ["Get Trollenzo-ed"]
  },

{
    chosen: "Continue",
    from: "Enzo",
    text: "Trollenzo: Darn you're smart! Last question! Who is the creator of Epic: The Musical?",
    choices: ["Rick Riordan", "Jorge Rivera-Herrans"]
  },
  {
    chosen: "Jorge Rivera-Herrans",
    from: "user",
    text: "Jorge Rivera-Herrans",
    choices: ["Continue"]
  },
   {
    chosen: "Rick Riordan",
    from: "user",
    text: "Rick Riordan",
    choices: ["Get Trollenzo-ed"]
  },
  {
    chosen: "Continue",
    from: "Enzo",
    text: "Trollenzo: Darn! Fine it's yours!",
    choices: ["Continue"]
  },
 {
    chosen: "Continue",
    from: "narrator",
    text: "The time is nigh. Using ethanol and the esoteric techniques taught to you by Trollenzo, you produce an extract of the highest quality from the peels of the Dragon Fruit. Carefully, you store the extract in a micropipette.",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "narrator",
    text: "When the time comes, you must thrust its tip into Siraris weak point and inject the fluid aww hell no im not finishing this sentence",
    choices: ["Time to fight."]
  },

  {
    chosen: "Time to fight.",
    from: "user",
    text: "Time to fight the Triclops.",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "narrator",
    text: "You quietly enter the room as the Triclops sleep quietly within. It is a large, brightly lit room divided in two by a glass sliding door. Within the side from which you enter is an ornate arrangement of furniture, including a study desk, a cabinet housing several baubles and trinkets, and a bookshelf that houses several scientific almanacs.",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "narrator",
    text: "In front of the sliding door is a large rectangular bed, upon which the beast lies on his side. The beast, too, is large… too large, towering 12 feet tall, lying on his side. The air is cold, but smells like floral freshener. Your party has made it, what do you do?",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "Hans",
    text: "Hans: Im ready, lets get his ass!",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "Kasi",
    text: "Kasi: Im getting yours after, hehe. Im kidding lets do this!",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "Ichiro",
    text: "Ichiro: Please so I can finally take a nap",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "Sean",
    text: "Sean: Waga(Yeah, but we must be careful to not wake him up from his)",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "Rawyen",
    text: "Rawyen: The decision is yours to make young warrior, what shall we do next",
    choices: ["Continue"]
  },
  
   {
    chosen: "Continue",
    from: "Renz",
    text: "Renz: Choose the right option, Kim",
    choices: ["Stab his eye.", "Keep Planning."]
  },

   {
    chosen: "Stab his eye.",
    from: "narrator",
    text: "You hold your weapon high and stab down upon his middle eye! The beast jolts awake, and makes a loud roar. He grabs you and tosses you to the other side of the room. He stands up and scans the room, now a third blind. His gaze does not find you, with him being dazed by his hampered depth perception.",
    choices: ["Continue"]
  },

  {
    chosen: "Keep Planning.",
    from: "narrator",
    text: "You turn back and see if you can make more preparations. Suddenly, the beast yawns and slowly rubs his three oversized eyes awake. He turns to see you.",
    choices: ["Get Siraris-ed"]
  },
    {
    chosen: "Get Siraris-ed",
    from: "Siraris",
    text: "Siraris: Mister Hacermida and friends... I see you have made your way to my office… BEGONE.",
    choices: ["Actually Die"]
  },
  {
    chosen: "Continue",
    from: "Ichiro",
    text: "Ichiro: Why dont we just kill him already so I can finally sleep and stop watching these dumb mushrooms.",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "Sean",
    text: "Sean: Waga waga (That doesnt sound tactically sound, we should form a triangle defense around him and surround him instead).",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "Kasi",
    text: "Kasi: Hey shut up, or well get caught. Kim, you take the lead. I'll handle these bozos. ",
    choices: ["Continue"]
  },
 {
    chosen: "Continue",
    from: "narration",
    text: "Taking this chance, you decide to…",
    choices: ["Ambush.", "Take out your massive +3 Elven-Silver Vorpal Flametongue Greatsword of Giant Slaying"]
  },

  {
    chosen: "Take out your massive +3 Elven-Silver Vorpal Flametongue Greatsword of Giant Slaying",
    from: "narration",
    text: "You must not have been playing the same game as us you do not have a massive +3 Elven-Silver Vorpal Flametongue Greatsword of Giant Slaying. Even if you did, you arent proficient.",
    choices: ["Continue"]
  },



  {
     chosen: "Continue",
    from: "Rawyen",
    text: "This isnt DND, Kim.",
    choices: ["Continue"]
  },
  {
     chosen: "Continue",
    from: "Hans",
    text: "Those are your last words???",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "narration",
    text: "This stroke of confusion has stunned you for long enough, that you have been spotted. The Triclops grabs you by the forearm, lifts you into the air, and slams your entire body into your partymates. In the impact, your partys bones crackle and break some protruding and piercing your body, killing you. Game Over ",
    choices: ["RESTART"]
   },

{
     chosen: "Ambush.",
    from: "narrator",
    text: "You hide under his bed and plot a surprise attack. He does not notice you slip inside. In his raging, depth-blind confusion, he starts upturning the furniture, starting with the cabinet, then the desk, then…",
    choices: ["Continue"]
  },

{
     chosen: "Continue",
    from: "Kasi",
    text: "Kasi: DAMN NICE SHOT KIM I DIDNT KNOW YOU HAD IN YOU",
    choices: ["Continue"]
  },
  {
     chosen: "Continue",
    from: "Renz",
    text: "Renz: You chose the right option",
    choices: ["Continue"]
  },

  {
    chosen: "Continue",
    from: "narrator",
    text: "Your moment arrives! The Triclops approaches the glass door shambling clumsily left and right, bleeding out of his middle eye.",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "Kasi",
    text: "Kasi: You better not fuck this up or Ill be the one to kill you",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "Rawyen",
    text: "Rawyen: The boss is at 1 hp its time to strike him down!",
    choices: ["Continue"]
  },
 {
    chosen: "Continue",
    from: "narrator",
    text: "A moment of opportunity presents itself. You…",
    choices: ["Strike!", "Hesitate."]
  },

 {
    chosen: "Strike!",
    from: "Hans",
    text: "Hans: Hey arent we forgetting something",
    choices: ["Continue"]
  },

   {
    chosen: "Continue",
    from: "Kasi",
    text: "Kasi: Ohh shoot we did!",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "Sean",
    text: "Sean: Waga! (The Dragon's Essense!)",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "narrator",
    text: "You drive your weapon straight through his heart. The beast falls over, seemingly lifeless before you… the way is clear, the fight quick and decisive, leaving you feeling somewhat… unnerved. As you turn your back to it, its eyes open once more bloodshot but beating with passion. With a dying vigor it raises its arms, slamming onto your party! Game Over.",
    choices: ["RESTART"]
  },

  {
    chosen: "Hesitate.",
    from: "narrator",
    text: "almost… as you realize you forgot to coat your weapon in the dragons essence you acquired. You coat your weapon in the dragons essence leaving it with a golden gleam.",
    choices: ["Continue"]

  },
{
    chosen: "Continue",
    from: "Kasi",
    text: "Kasi: Thank God, he remembered.",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "Hans",
    text: "Hans: That was close.",
    choices: ["Continue"]
  },
{
    chosen: "Continue",
    from: "narrator",
    text: "He draws near limping as his middle eye bleeds a fiery red. You clutch your weapon, imbued with the might of dragons. Strangely, as if your weapon itself called to you to spur your determination, you know that there is no better time than now to deliver the perfect strike. ",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "Renz",
    text: "Renz: This is it Kim, the time to strike do not hesitate",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "Ichiro",
    text: "Ichiro: GO MAH NIGGAH!!!",
    choices: ["Continue"]
  }, 
  {
    chosen: "Continue",
    from: "Kasi",
    text: "Kasi: Are we allowed to say that? Nvm, just get his fucking ass Kim",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "Sean",
    text: "Sean: Waga~(Omg wow)",
    choices: ["Continue"]
  },
{
    chosen: "Continue",
    from: "Rawyen",
    text: "Rawyen: LETS FUCKING GOOO KAYA MO NAAAAAAAA!!!!",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "Hans",
    text: "Hans: LETS GO KIM!!",
    choices: ["Continue"]
  },
  {
    chosen: "Continue",
    from: "narrator",
    text: "You jump over his body and wrestle his hands away from his head, which have been clutching his eyes closed. You then raise your weapon on high, then with fervor and determination, stab it straight into the shut eyelids that protect the most vulnerable link of this otherwise unkillable beast. Through the skin, it stabs right into the middle of the glowing iris.",
    choices: ["Continue"]
  },
{
    chosen: "Continue",
    from: "narrator",
    text: "Your friends all frantically cover their ears as a pained scream booms through the whole lair. The dragon essence shimmers brightly and surrounds both you and the Triclops, before imploding at a critical point in the dead center of the head of the Triclops. You see the light leave his eyes, with no more blood being drawn. He falls over limp, and you emerge… victorious."
    ,choices: ["Continue"]
  },
     {
    chosen: "Continue",
    from: "Kasi",
    text: "Kasi: You did it!",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "Hans",
    text: "Hans: We did it!",
    choices: ["Continue"]
  }, 
  {
    chosen: "Continue",
    from: "Ichiro",
    text: "Ichiro: Finally!",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "Sean",
    text: "Sean: Waga!!! (I am so happy about this information!!!",
    choices: ["Continue"]
  },
{
    chosen: "Continue",
    from: "Hans",
    text: "Hans: We work so well together as a team.",
    choices: ["Continue"]
  },
   {
    chosen: "Continue",
    from: "Kasi",
    text: "Kasi: Yeah. Its like were becoming one unit.",
    choices: ["Continue"]
  },
{
    chosen: "Continue",
    from: "Rawyen",
    text: "Rawyen: Some kind of proto- work unit….",
    choices: ["Say that again.."]
},
{
    chosen: "Say that again..",
    from: "user",
    text: "... say that again?",
    choices: ["Ending."]
},








 {
    chosen: "Actually Die",
    from: "narrator",
    text: "He waves his hand, and a beam of green light exits from his middle eye, hitting your party directly. You all disintegrate into ash, starting from your skin, then your fat, then your muscle, then your bones. The process is agonizingly slow, taking a total of 4 minutes to complete. The magic of the beam rendered your party immobile, yet conscious, for the entirety of the duration. Game Over",
    choices: ["RESTART"]
  },
   {
    chosen: "Get Trollenzo-ed",
    from: "Enzo",
    text: "Trollenzo: HAH! SALA! WEH WEH!",
    choices: ["Continue"],
  },
{
    chosen: "Continue",
    from: "narrator",
    text: "Trollenzo collapses time and space around you, trapping you in an endlessly shifting quantum environment. The very gluons holding you apart melt into soup. You become one with the universe. Game Over.",
    choices: ["RESTART"]
  },
 {
    chosen: "Get Shena-ed",
    from: "narrator",
    text: "Mamshena floods your mind with all that there is to know and to be known. You are burnt to a crisp by limitless divine knowledge. Game Over.",
    choices: ["RESTART"],
  },
    {
    chosen: "Get Caught",
    from: "narrator",
    text: "You get caught by the guards and forced to work in the lab again. Game Over.",
    choices: ["RESTART"],
  },
  {
    chosen: "Die From a Concussion",
    from: "narrator",
    text: "You are suddenly hit by a painful migraine. It seems your injury was fatal. Game Over.",
    choices: ["RESTART"],
  },
];

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

function progressScript(choice?: string) {
  if (choice === "Ending.") {
    if (typeof window !== "undefined") {
      window.location.assign("/ending");
    }
    return;
  }

  if (choice === "RESTART") {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
    return;
  }

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
