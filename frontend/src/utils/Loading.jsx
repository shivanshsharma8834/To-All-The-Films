import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const Quotes = [
  {
    quote:
      "No, I like to rock n' roll all night and *part* of every day. I usually have errands... I can only rock from like 1-3.",
    movie: "Role Models (2008)",
  },
  {
    quote:
      "Two things: You keep your liver-spotted hands off my beautiful mother. She's a saint! And then you sit down and you write Dale and Brennan a check for $10,000.",
    movie: "Step Brothers (2008)",
  },
  {
    quote:
      "I live in a swamp! I put up signs! I'm a terrifying ogre! What do I have to do to get a little privacy?",
    movie: "Shrek (2001)",
  },
  {
    quote:
      "Well, you're two penises short of a Shania Twain reimagination band!",
    movie: "Nick and Norah's Infinite Playlist (2008)",
  },
  {
    quote:
      "So maybe I don't know what the Civil War was, or who invented the helicopter even though I own one, but I did beat The Legend of Zelda before I could walk.",
    movie: "Grandma's Boy (2006)",
  },
  {
    quote:
      "You want to talk about mothers? You wanna talk about mothers! It's mother time, OK?",
    movie: "White Chicks (2004)",
  },
  {
    quote:
      "I just don't see how having somebody piss on my face is going to help me sell Lou Ferrigno's house.",
    movie: "I Love You, Man (2009)",
  },
  {
    quote:
      "Benjamin is nobody's friend. If Benjamin were an ice cream flavor, he'd be pralines and dick.",
    movie: "Wayne's World (1992)",
  },
  {
    quote: "I'm glad he's single because I'm going to climb that like a tree.",
    movie: "Bridesmaids (2011)",
  },
  {
    quote:
      "My childhood was typical. Summers in Rangoon... luge lessons. In the spring, we'd make meat helmets.",
    movie: "Austin Powers: International Man of Mystery (1997)",
  },
  {
    quote: "It's the weekend, Budnick. I don't know you. You do not exist.",
    movie: "The Hangover (2009)",
  },
  {
    quote:
      "Oh, this is your wife? A lovely lady. Hey, baby, you're alright. You must've been something before electricity.",
    movie: "Caddyshack (1980)",
  },
  {
    quote:
      "They're pretty good, except for one little problem. That little guy right there. He is nipple number five.",
    movie: "Napoleon Dynamite (2004)",
  },
  {
    quote: "You are a human affront to all women, and I am a woman.",
    movie: "When Harry Met Sally... (1989)",
  },
  {
    quote: "I wouldn't let you sleep in my room if you were growing on my ass.",
    movie: "Home Alone (1990)",
  },
  {
    quote:
      "What you've just said is one of the most insanely idiotic things I have ever heard.",
    movie: "Billy Madison (1995)",
  },
  {
    quote: "If you can dodge a wrench, you can dodge a ball.",
    movie: "Dodgeball: A True Underdog Story (2004)",
  },
  {
    quote: "It’s pronounced 'Fronkensteen.'",
    movie: "Young Frankenstein (1974)",
  },
  {
    quote:
      "I like to picture Jesus in a tuxedo T-shirt because it says I want to be formal, but I'm here to party.",
    movie: "Talladega Nights (2006)",
  },
  {
    quote:
      "Last night you were unhinged. You were like some desperate, howling demon. You frightened me. Do it again.",
    movie: "The Addams Family (1991)",
  },
  {
    quote: "Looks like I picked the wrong week to quit sniffing glue.",
    movie: "Airplane! (1980)",
  },
  {
    quote: "Your mother was a hamster and your father smelt of elderberries.",
    movie: "Monty Python and the Holy Grail (1975)",
  },
  {
    quote:
      "She thinks I'm a fascist? I don't control the railways or the flow of commerce!",
    movie: "Barbie (2023)",
  },
  {
    quote: "When life gives you lemons, just say ‘fuck the lemons’, and bail.",
    movie: "Forgetting Sarah Marshall (2008)",
  },
  {
    quote:
      "I don’t want to be rude, but may I have a drink? I had three or four before I got here, but they’re beginning to wear off.",
    movie: "The Awful Truth (1937)",
  },
  {
    quote: "Gentlemen, you can't fight in here. This is the war room!",
    movie: "Dr. Strangelove (1964)",
  },
  {
    quote:
      "Did you just look at me? Did you? Look at me! Look at me! How dare you? Close your eyes!",
    movie: "The Favourite (2018)",
  },
  {
    quote: "Is that your gun in your pocket or are you just glad to see me?",
    movie: "Sextette (1977)",
  },
  { quote: "That is mahogany!", movie: "The Hunger Games (2012)" },
  { quote: "You're a virgin who can't drive.", movie: "Clueless (1995)" },
  { quote: "Leave the gun. Take the cannoli.", movie: "The Godfather (1972)" },
  {
    quote: "If I'm not back in five minutes, just wait longer.",
    movie: "Ace Ventura: Pet Detective (1994)",
  },
  {
    quote:
      "If we get any more white people in here, this is gonna be a suburb.",
    movie: "Hairspray (2007)",
  },
  { quote: "Snap out of it!", movie: "Moonstruck (1987)" },
  {
    quote:
      "I have had it with these motherfucking snakes on this motherfucking plane!",
    movie: "Snakes on a Plane (2006)",
  },
  { quote: "Bye, Felicia.", movie: "Friday (1995)" },
  { quote: "You sit on a throne of lies.", movie: "Elf (2003)" },
  {
    quote: "Even if I wanted to go, my schedule wouldn't allow it.",
    movie: "How the Grinch Stole Christmas (2000)",
  },
  { quote: "She doesn't even go here!", movie: "Mean Girls (2004)" },
  {
    quote: "That rug really tied the room together, did it not?",
    movie: "The Big Lebowski (1998)",
  },
  {
    quote: "You're dizzy because you played Russian roulette with your vagina.",
    movie: "Obvious Child (2014)",
  },
  {
    quote: "You are a sad, strange little man, and you have my pity.",
    movie: "Toy Story (1995)",
  },
  {
    quote:
      "My father would womanize. He would drink. He would make outrageous claims like he invented the question mark.",
    movie: "Austin Powers (1997)",
  },
  { quote: "YOU'RE AN INANIMATE FUCKING OBJECT!", movie: "In Bruges (2008)" },
  { quote: "He's so fluffy, I'm gonna die!", movie: "Despicable Me (2010)" },
];

const backdrops_desktop = [
  "https://image.tmdb.org/t/p/original/88nIQnyDyYfEpR7s9hwbfhJuxK9.jpg",
  //   "https://image.tmdb.org/t/p/original/txHiVwtNn4QjlEKQ7wVfFbnI8no.jpg",
  "https://image.tmdb.org/t/p/original/rTOLPumsQpUTGPFFonBzPv7JF1y.jpg",
  "https://image.tmdb.org/t/p/original/tG8QWDASd8rw0JxkDN2MDDWLEse.jpg",
  "https://image.tmdb.org/t/p/original/oZzFRRzuQS0FmSWSbwEvdAkcRBh.jpg",
  "https://image.tmdb.org/t/p/original/1AZqsVUJFBj2phRh9tJvpXDaG4E.jpg",
  // "https://image.tmdb.org/t/p/original/1C26hSKJnNAlfimNGFJ30l612cJ.jpg",
];

const backdrops_mobile = [
  "https://scontent.fdel76-1.fna.fbcdn.net/v/t39.30808-6/467441184_968194265346692_7199079699213183300_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=U91sJkkg9jAQ7kNvgHLjw_d&_nc_oc=Adj0sRoGJWZcjUjfbH3k33gNb01ObmApepn__dzVl43vQjBEpTNbeuiHl8v_MNkLLN0&_nc_zt=23&_nc_ht=scontent.fdel76-1.fna&_nc_gid=AnLZMsHEMA3fHcWtx6KrmjA&oh=00_AYEn33JFGq7UrSS8WniP1KS3_RdGUYHCym3khHb4y1uqVg&oe=67D86833",
  "https://i.ibb.co/Y6Pm940/0da0c0cd6020ef87ad136169091c2355.jpg",
  "https://i.ibb.co/XN9g692/5977ba5cb91e56c777016bf714a9af23.jpg",
  "https://i.ibb.co/LhNFWVRp/e01a4b786dd3a6463f0689cb0d3fed98.jpg",
  "https://i.ibb.co/KpnMqC5d/840491f64bb404849e276cdb35358c0f.jpg",
  "https://i.ibb.co/dJcTJLht/34697b8ca1b4ca2020eb010e29fa9023.jpg",
];
const LoadingPage = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [backdrop, setBackdrop] = useState("");

  const currentQuote = useMemo(
    () => Math.floor(Math.random() * Quotes.length),
    []
  );

  // Function to determine the backdrop based on screen size
  const getBackdrop = () => {
    const width = window.innerWidth;

    if (width < 768) {
      // Mobile
      return backdrops_mobile[
        Math.floor(Math.random() * backdrops_mobile.length)
      ];
    } else if (width >= 768 && width < 1024) {
      // iPad
      return backdrops_mobile[
        Math.floor(Math.random() * backdrops_mobile.length)
      ];
    } else {
      // Desktop
      return backdrops_desktop[
        Math.floor(Math.random() * backdrops_desktop.length)
      ];
    }
  };

  useEffect(() => {
    // Set the initial backdrop
    setBackdrop(getBackdrop());

    // Update backdrop on window resize
    const handleResize = () => {
      setBackdrop(getBackdrop());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onLoadComplete) {
        onLoadComplete();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backdrop})`,
      }}>
      {/* Card Container */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-6 rounded-2xl w-96 text-center">
        {/* Quote Section */}
        <motion.p
          className="text-lg text-white font-serif italic"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}>
          "{Quotes[currentQuote].quote}"
        </motion.p>
        <p className="text-sm text-gray-300 mt-2">
          — {Quotes[currentQuote].movie}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingPage;
