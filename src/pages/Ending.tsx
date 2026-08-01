import React from 'react';
import MessageBubble from '../components/MessageBubble';

function Ending() {
  return (
    <div className="h-screen mx-auto flex flex-col justify-center items-center bg-black text-white">
    <div className="h-fit w-3/4 mx-auto flex flex-col gap-5 justify-center items-center bg-gray-600 text-white overflow-clip">
        <MessageBubble mine={true} from={"narrator"} text={" After years of grueling away at this desolate place you find yourself tired and spent but accomplished with friends surrounding you that’ll be there for you till the end of whatever journey you find yourself in."} />
        <MessageBubble mine={true} from={"Kasi"} text={"Kasi: Hey dude, I’m really sorry that I couldn’t come today. I really thought about it and my options on how to get there. I wanted to ask if it was possible to hitch a ride with the others but I thought it would probably be too much of a burden. I felt really guilty about it actually since I knew I couldn’t come for the past 2 days now, so that’s why I organized this to show you that even though a bunch of us can’t come we still really care about you. When you first moved back to Iloilo, I was really happy that we can have more adventures together but sadly that hasn’t been the case so I was excited for this opportunity. I’m kinda miffed about it, but I really do hope that this game shows our care, I miss you brother and it brings me so much joy whenever we get to hang out and spark the bond we always have. I love you man and I hope you stay happy."} />
        <MessageBubble mine={true} from={"Rawyen"} text={"Rawyen: Hey man, I hope you enjoyed this little thing. I couldn’t come today cause of a LOT of things happening at once, but that doesn’t remove the fact that I love you you sick bastard. I hope your day is great, but nah actually I hope this entire year is gonna be great. Stay safe and stay happy, but if you can’t, we’re all here to help you out. See ya."} />
        <MessageBubble mine={true} from={"Hans"} text={"Hans: Hi Kim! Happy 20th birthday! I’m sorry I’m not able to come today :( I hope that this game was at least a nice experience. We made it to show our appreciation for you. You’re an amazing person and a friend I always feel comfortable around (yes despite allat stuff hahahah). I really appreciate how you always listen to others patiently and make them feel heard, and I hope for more opportunities where we can talk about the things we like again. Hopefully also playing together in a band if our schedules allow it. I’m looking forward to seeing you again come class opening, and I wish you all the best in everything to come. Keep being cool. Live long and die hard!!!!"} />
        <MessageBubble mine={true} from={"Renz"} text={"Renz: Hi Kim. Sorry I can’t come today. Here’s something we all worked hard on to remind you how much we care. I’m really happy to have become your friend and I hope we stay strong and keep it going. See you on campus buddy!"} />
        <MessageBubble mine={true} from={"narrator"} text={" Thank you for being a part of our lives Kim, you have truly touched us in so many ways and for others too literally. Once more happy birthday and we made this to show you we care."} />
    
    </div>
    </div>
  );
}

export default Ending;
