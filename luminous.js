import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Circle,
    Eye,
    Zap,
    Sparkles,
    Moon,
    Sun,
    Trophy,
    KeyRound,
    Heart,
    Hourglass,
    Lion,
    Lantern,
    RotateCcw,
    BalanceScale,
    ArrowUpDown,
    Repeat,
    FlaskConical,
    Flame,
    CloudLightning,
    Gem,
    FaceFrown,
    Fire,
    Tornado,
    Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assumed - adjust path if needed.  If you don't have this, replace with regular button.
import { cn } from '@/lib/utils';     // Assumed - adjust path if needed.  If you don't have this, use a simple class merge.

// --- Constants ---
const tarotCards = [
    { name: "The Crawling Chaos", meaning: "Unfathomable possibilities, madness, entropy", icon: <Circle className="w-10 h-10" /> },
    { name: "The Void", meaning: "Emptiness, potential, oblivion", icon: <Moon className="w-10 h-10" /> },
    { name: "The Oracle of the Deep", meaning: "Hidden knowledge, intuition, the subconscious", icon: <Eye className="w-10 h-10" /> },
    { name: "The Weaver of Fates", meaning: "Destiny, interconnectedness, creation", icon: <RotateCcw className="w-10 h-10" /> },
    { name: "The Ancient One", meaning: "Power, authority, cosmic law", icon: <Trophy className="w-10 h-10" /> },
    { name: "The Keeper of Secrets", meaning: "Esoteric wisdom, tradition, mystery", icon: <KeyRound className="w-10 h-10" /> },
    { name: "The Unbound", meaning: "Love, chaos, liberation, connection", icon: <Heart className="w-10 h-10" /> },
    { name: "The Harbinger", meaning: "Control, will, change, movement", icon: <Hourglass className="w-10 h-10" /> },
    { name: "The Hidden Strength", meaning: "Resilience, courage, inner power", icon: <Lion className="w-10 h-10" /> },
    { name: "The Seer", meaning: "Solitude, introspection, guidance", icon: <Lantern className="w-10 h-10" /> },
    { name: "The Wheel of Misfortune", meaning: "Chance, destiny, inevitable change", icon: <RotateCcw className="w-10 h-10 rotate-45" /> },
    { name: "The Impartial Judge", meaning: "Truth, balance, cosmic order", icon: <BalanceScale className="w-10 h-10" /> },
    { name: "The Sacrificed", meaning: "Letting go, surrender, new perspective", icon: <ArrowUpDown className="w-10 h-10 rotate-180" /> },
    { name: "The Great Transition", meaning: "Transformation, rebirth, the end of an era", icon: <Repeat className="w-10 h-10" /> },
    { name: "The Alchemist", meaning: "Balance, transformation, combination", icon: <FlaskConical className="w-10 h-10" /> },
    { name: "The Tempter", meaning: "Temptation, illusion, the shadow self", icon: <Flame className="w-10 h-10" /> },
    { name: "The Shattered Reality", meaning: "Sudden upheaval, chaos, revelation", icon: <CloudLightning className="w-10 h-10" /> },
    { name: "The Guiding Light", meaning: "Hope, renewal, inspiration", icon: <Sparkles className="w-10 h-10" /> },
    { name: "The Faceless Moon", meaning: "Mystery, illusion, the unknown", icon: <Moon className="w-10 h-10" /> },
    { name: "The Cosmic Fire", meaning: "Creation, energy, vitality", icon: <Sun className="w-10 h-10" /> },
    { name: "The Awakening", meaning: "Rebirth, calling, absolution", icon: <Zap className="w-10 h-10" /> },
    { name: "The All-Encompassing", meaning: "Completion, unity, the universe", icon: <Globe className="w-10 h-10" /> }
];

const positions = ['Past', 'Present', 'Future'];

// --- Helper Components ---

const TarotCard = ({ card, position, isRevealed, onClick }: { card: any, position: string, isRevealed: boolean, onClick: () => void }) => {
    return (
        <motion.div
            className={cn(
                "tarot-card",
                isRevealed && "revealed"
            )}
            onClick={onClick}
            whileHover={{ translateY: -12, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <div className="card-back">
                <span className="text-white font-header text-sm tracking-wide">{position}</span>
            </div>
            <div className="card-front">
                <div className="card-name">{card.name}</div>
                <div className="card-icon">{card.icon}</div>
                <div className="card-meaning">{card.meaning}</div>
            </div>
        </motion.div>
    );
};

// --- Main Component ---

const LuminousTarot = () => {
    // --- State ---
    const [selectedCards, setSelectedCards] = useState<any[]>([]);
    const [isShuffled, setIsShuffled] = useState(false);
    const [isReadingComplete, setIsReadingComplete] = useState(false);

    // --- Effects ---
    useEffect(() => {
        if (selectedCards.length === 3) {
            setIsReadingComplete(true);
        } else {
            setIsReadingComplete(false);
        }
    }, [selectedCards]);

    // --- Functions ---
      const handleShuffle = () => {
        setSelectedCards([null, null, null]);
        setIsShuffled(true);
    };

    const handleCardClick = (index: number) => {
        if (!isShuffled || selectedCards[index]) return;

        let randomCard;
        do {
            randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
        } while (selectedCards.includes(randomCard));

        const newSelectedCards = [...selectedCards];
        newSelectedCards[index] = randomCard;
        setSelectedCards(newSelectedCards);
    };

    const generateInterpretation = (card: any, position: string) => {
        const interpretations = {
            "The Crawling Chaos": {
                "Past": "Unforeseen forces have shaped your path, leading to a sense of unpredictability. You may have experienced events that felt beyond your control, leaving you feeling like a puppet in a cosmic play.",
                "Present": "You are in a time of great uncertainty and potential chaos. Embrace the unknown, but be mindful of the lurking darkness that whispers at the edge of your perception. Reality itself may seem to shift and distort around you.",
                "Future": "The future is fluid and ever-shifting, a kaleidoscope of fractured possibilities. Adaptability and a willingness to embrace change will be crucial in navigating the path ahead, but be prepared for your understanding of the universe to be fundamentally altered."
            },
            "The Void": {
                "Past": "A period of emptiness or loss preceded your current state. This may have been a time of reflection or a stripping away of the non-essential, leaving you face-to-face with the chilling vastness of nothingness.",
                "Present": "You stand at the precipice of infinite possibilities, a void that stretches out before you like an endless abyss. The void represents both nothingness and boundless potential, a canvas upon which anything can be painted. What horrors or wonders will you create from it?",
                "Future": "The future holds both promise and peril, a dance between creation and annihilation. Embrace the unknown with courage, for within the void lies the seed of creation, but also the potential for utter destruction. Tread carefully, lest you be consumed."
            },
            "The Oracle of the Deep": {
                "Past": "Your intuition has always been a guiding force, leading you through hidden currents and veiled truths. You possess a connection to the unseen world that others can only dream of, a gift and a burden.",
                "Present": "Trust your inner voice, for it speaks the language of the subconscious, a language of whispers and shadows. Delve into the depths of your being to uncover hidden wisdom, but be prepared to confront the ancient entities that dwell there.",
                "Future": "The secrets of the universe will be revealed to you through dreams and visions, fragments of a forgotten reality. Pay attention to the whispers of your soul, for they carry the echoes of cosmic truths that could shatter your perception of existence."
            },
            "The Weaver of Fates": {
                "Past": "Your past is interwoven with the destinies of others in ways you may not fully comprehend. Every action, every choice, has consequences that ripple through the fabric of reality, binding you to a web of cosmic significance.",
                "Present": "You are a nexus of converging destinies, a focal point where the threads of fate intertwine. Your choices have far-reaching effects on the tapestry of life, shaping not only your own path but the paths of countless others.",
                "Future": "The threads of fate converge, and your path is inextricably intertwined with the grand design of the cosmos. Embrace your role in the unfolding drama, for you are a player in a game of cosmic proportions, a game with stakes beyond human comprehension."
            },
            "The Ancient One": {
                "Past": "You have been influenced by powerful forces and ancient knowledge, remnants of a time when gods walked the earth. This influence has shaped your understanding of the world, granting you insights that are both profound and terrifying.",
                "Present": "You stand in the presence of immense power and authority, a power that could reshape reality itself. Wield it wisely, for it can bring both creation and destruction, salvation and damnation. The choices you make now will echo through eternity.",
                "Future": "You will inherit a legacy of cosmic proportions, a burden and a gift that will define your existence. Embrace your power and responsibility with reverence and humility, for you are a steward of forces beyond mortal understanding, a guardian of the abyss."
            },
            "The Keeper of Secrets": {
                "Past": "Hidden knowledge and esoteric traditions have played a significant role in your journey, shaping your understanding of the unseen and granting you access to forbidden realms. You carry within you the weight of ages, the secrets of forgotten civilizations.",
                "Present": "You are entrusted with sacred mysteries, truths that could unravel the fabric of reality if revealed to the uninitiated. Guard them well, for they hold the key to unlocking profound truths, but also the potential for unimaginable chaos.",
                "Future": "The universe will reveal its secrets to you, but only if you prove yourself worthy of such knowledge. Seek wisdom with a humble heart, for the path to enlightenment is fraught with peril, and the price of truth may be higher than you can imagine."
            },
            "The Unbound": {
                "Past": "Your past was marked by a yearning for freedom and a rejection of constraints. You sought liberation from limitations, both internal and external, driven by a force that defied explanation. This relentless pursuit of freedom has shaped you in profound ways.",
                "Present": "You stand at the threshold of unbound potential, a state of existence where anything is possible and nothing is forbidden. Embrace chaos and let your spirit soar, but be mindful of the consequences of unchecked power and the seductive allure of the abyss.",
                "Future": "The future is a canvas upon which you can paint your wildest dreams or your most terrifying nightmares. The only limits are those you impose upon yourself. Will you create a masterpiece of cosmic beauty, or will you succumb to the darkness that lurks within the boundless expanse of freedom?"
            },
            "The Harbinger": {
                "Past": "Your past has been a series of transitions and transformations, each one a catalyst for change and a harbinger of things to come. You have learned to embrace the inevitability of change, even when it is painful or frightening.",
                "Present": "You are a force of change, a catalyst that sets events in motion. Your will is a powerful instrument, capable of shaping the world around you. Use it wisely, for your actions have consequences that ripple through time and space.",
                "Future": "The future is in your hands. You have the power to shape your destiny and the destiny of others. Embrace your role as a harbinger of change, but be mindful of the responsibility that comes with such power. The choices you make now will determine the course of events for generations to come."
            },
            "The Hidden Strength": {
                "Past": "Your past has been marked by trials and tribulations, moments of darkness that tested the very core of your being. Yet, you have endured, drawing upon a hidden strength that you may not have even known you possessed.",
                "Present": "You possess a wellspring of inner power, a resilience that allows you to face adversity with courage and determination. Trust in your hidden strength, for it will guide you through the challenges that lie ahead.",
                "Future": "The future holds challenges, but you are more than capable of overcoming them. Your hidden strength will be your greatest ally, a source of power that will never fail you. Embrace your inner lion, and let your courage roar."
            },
            "The Seer": {
                "Past": "Your past has been a journey of introspection and solitude, a path of self-discovery that has led you to develop a profound connection to your inner self. You have always been drawn to the mysteries of the unseen world.",
                "Present": "You possess a unique gift of insight, an ability to perceive truths that are hidden from others. Embrace your role as a seer, and use your gift to guide yourself and others through the labyrinth of existence.",
                "Future": "The future will reveal itself to you in glimpses and visions, fragments of a reality that is both beautiful and terrifying. Trust your intuition, for it is your most reliable guide in the face of the unknown. The path ahead is shrouded in mystery, but your inner light will illuminate the way."
            },
            "The Wheel of Misfortune": {
                "Past": "Your past has been a series of ups and downs, a cycle of fortune and misfortune that has left you feeling like a plaything of fate. You have learned that change is the only constant, and that nothing lasts forever.",
                "Present": "You are at a turning point, a moment of profound change that will alter the course of your life. Embrace the uncertainty, for the wheel of fortune is always turning, and what seems like misfortune may ultimately lead to a greater good.",
                "Future": "The future is a whirlwind of possibilities, a chaotic dance of chance and destiny. Do not cling to the past, for the wheel of misfortune will continue to turn, and resistance is futile. Instead, learn to adapt and flow with the currents of change."
            },
            "The Impartial Judge": {
                "Past": "Your past has been shaped by a strong sense of justice and fairness. You have always strived to do what is right, even when it was difficult or unpopular. Your actions have been guided by a deep-seated belief in cosmic order.",
                "Present": "You are called upon to make a difficult decision, a judgment that will have far-reaching consequences. Strive for impartiality, and let your conscience be your guide. The scales of justice are balanced, and your choices will determine the outcome.",
                "Future": "The future will bring you face-to-face with the consequences of your actions. You will reap what you sow, for the universe is governed by a strict code of cosmic law. Embrace the truth, and accept the consequences of your choices, both good and bad."
            },
            "The Sacrificed": {
                "Past": "Your past has involved periods of sacrifice and letting go. You have had to surrender things that were important to you, whether by choice or by necessity. These sacrifices have shaped you, leading to a profound shift in perspective.",
                "Present": "You are in a state of surrender, a moment of profound transformation that requires you to release your grip on the familiar. Embrace the unknown, and trust that this sacrifice will lead to a new beginning. Let go, and allow yourself to be transformed.",
                "Future": "The future holds the promise of renewal, but only through sacrifice. You must be willing to let go of the old in order to embrace the new. This may involve pain and loss, but the rewards will be immeasurable. The path to rebirth lies through the crucible of sacrifice."
            },
            "The Great Transition": {
                "Past": "Your past has been marked by significant endings and beginnings, periods of upheaval and transformation that have reshaped your reality. You have experienced the cyclical nature of existence, the dance of death and rebirth.",
                "Present": "You are on the cusp of a great transition, a profound shift that will alter the course of your life. Embrace the unknown with courage, for this ending is also a beginning, a doorway to a new reality. Let go of the past, and step into the future.",
                "Future": "The future holds the promise of a new era, a time of rebirth and renewal. The old ways will fade away, and a new world will emerge from the ashes of the old. Embrace the change, for it is the lifeblood of the universe, the force that drives all creation."
            },
            "The Alchemist": {
                "Past": "Your past has been a journey of experimentation and transformation, a quest to understand the fundamental building blocks of reality. You have sought to transmute the base elements of your existence into something more refined and valuable.",
                "Present": "You possess the power to transform your reality, to combine disparate elements and create something new and wondrous. Embrace your inner alchemist, and let your creativity flow. The possibilities are limitless, and the potential for transformation is immense.",
                "Future": "The future holds the promise of alchemical mastery, the ability to transmute not only your own life but the world around you. Seek balance and harmony, for true transformation comes from within. The universe is your laboratory, and the possibilities for creation are endless."
            },
            "The Tempter": {
                "Past": "Your past has been marked by temptations and illusions, moments when you were led astray by desires and false promises. You have learned the hard way that not all that glitters is gold, and that the path to true fulfillment is often fraught with peril.",
                "Present": "You are faced with a choice, a temptation that could lead you down a dark path. Be wary of illusions, and trust your instincts. The shadow self lurks within, waiting for an opportunity to seize control. Resist the allure of the forbidden, and stay true to your values.",
                "Future": "The future holds the potential for both great reward and terrible consequence. The choices you make now will determine whether you succumb to temptation or rise above it. The path ahead is shrouded in darkness, but your inner light can guide you through the shadows. Choose wisely, for the stakes are high."
            },
            "The Shattered Reality": {
                "Past": "Your past has been marked by sudden upheavals and unexpected disruptions, moments when your reality was shattered and you were forced to confront the fragility of existence. These experiences have left you feeling shaken, but also more aware of the impermanence of all things.",
                "Present": "You are in the midst of a cataclysmic event, a moment of chaos and revelation that is tearing apart the fabric of your reality. Embrace the change, for this destruction is also a form of creation, a necessary step on the path to transformation. Let go of your attachments, and allow yourself to be reborn.",
                "Future": "The future holds the promise of a new reality, a world forged from the fragments of the old. This will be a time of great upheaval and change, but also a time of immense possibility. Be prepared to adapt and evolve, for the only constant is change, and the universe is in a perpetual state of flux."
            },
            "The Guiding Light": {
                "Past": "Your past has been marked by moments of hope and inspiration, glimmers of light that pierced through the darkness and guided you on your path. You have always been drawn to the positive, seeking out the beauty and wonder in the world around you.",
                "Present": "You are a beacon of hope, a source of inspiration for yourself and others. Your inner light shines brightly, illuminating the path forward and dispelling the shadows of doubt and fear. Embrace your role as a guiding light, and let your positivity radiate outwards.",
                "Future": "The future holds the promise of renewal and enlightenment, a time when the light will shine even brighter, dispelling the darkness and ushering in an era of peace and understanding. Continue to be a source of hope, and your light will help to guide humanity towards a brighter future. The power of positivity should not be underestimated."
            },
            "The Faceless Moon": {
                "Past": "Your past has been shrouded in mystery and illusion, a time of uncertainty and hidden truths. You have often felt like you were navigating in the dark, guided only by your intuition and a sense of the unknown. The faceless moon has always been a symbol of the enigmatic forces that have shaped your journey.",
                "Present": "You are surrounded by illusions, unable to discern reality from fantasy. Trust your instincts, but be wary of appearances, for things are not always as they seem. The faceless moon watches over you, a silent guardian of the hidden realms. Seek the truth, but be prepared to confront the unsettling nature of the unknown.",
                "Future": "The future holds many mysteries, secrets that will be revealed only to those who dare to venture into the shadows. Embrace the unknown, but proceed with caution, for the faceless moon can be both a guide and a deceiver. The path ahead is uncertain, but the rewards for those who persevere will be great. The universe is full of secrets, and you are destined to uncover some of them."
            },
            "The Cosmic Fire": {
                "Past": "Your past has been marked by periods of intense creativity and energy, moments of fiery passion that consumed you and drove you to achieve great things. You have always been a force of nature, a spark of divine inspiration in a world that often feels cold and indifferent.",
                "Present": "You are a conduit for cosmic energy, a vessel of creation and destruction. Your passion burns brightly, fueling your ambitions and driving you forward with unstoppable force. Embrace the fire within, but be careful not to let it consume you. The power you wield is immense, and it must be channeled with wisdom and control.",
                "Future": "The future holds the promise of even greater creative power, a time when your inner fire will ignite the world around you. You have the potential to shape reality itself, to bring forth new worlds and new possibilities. Embrace your role as a creator, and let your imagination soar. The universe is your playground, and the only limits are those you impose upon yourself."
            },
            "The Awakening": {
                "Past": "Your past has been a journey of spiritual awakening, a gradual unfolding of consciousness that has led you to question the nature of reality and your place within it. You have experienced moments of profound insight, glimpses behind the veil of illusion that have forever changed your perception of the world.",
                "Present": "You are on the verge of a major breakthrough, a moment of profound revelation that will shatter your old beliefs and usher in a new era of enlightenment. Embrace the change, for this awakening is a necessary step on the path to true understanding. The universe is calling you, and you must answer.",
                "Future": "The future holds the promise of complete and total enlightenment, a state of cosmic consciousness where you will transcend the limitations of your physical form and merge with the divine. This is the ultimate goal of your spiritual journey, the culmination of all your efforts and sacrifices. The path ahead is challenging, but the rewards are beyond comprehension. Prepare yourself for the ultimate awakening."
            },
            "The All-Encompassing": {
                "Past": "Your past has been a journey of integration and unification, a quest to find wholeness and connection in a world that often feels fragmented and disconnected. You have sought to understand the interconnectedness of all things, the underlying unity that binds the cosmos together.",
                "Present": "You are experiencing a sense of oneness with the universe, a feeling of complete and total unity with all that is. Embrace this moment of cosmic consciousness, for it is a rare and precious gift. You are a part of something greater than yourself, a microcosm of the infinite macrocosm.",
                "Future": "The future holds the promise of complete and total integration, a state of being where you will transcend the limitations of individuality and merge with the All-Encompassing. This is the ultimate goal of your spiritual journey, the final destination on the path to enlightenment. The universe awaits, and you are ready to become one with the cosmos."
            }
        };
        return interpretations[card.name][position] || "An unreadable prophecy... The stars are not aligned.";
    };

    const generateOverallInterpretation = () => {
        if (selectedCards.length !== 3) return "The cards whisper, but their voices are faint. Draw all three for a complete reading.";

        const themes: string[] = [];
        let hasMajorArcana = false;

        selectedCards.forEach(card => {
            if (["The Crawling Chaos", "The Void", "The Oracle of the Deep", "The Weaver of Fates", "The Ancient One", "The Keeper of Secrets", "The Unbound", "The Harbinger", "The Hidden Strength", "The Seer", "The Wheel of Misfortune", "The Impartial Judge", "The Sacrificed", "The Great Transition", "The Alchemist", "The Tempter", "The Shattered Reality", "The Guiding Light", "The Faceless Moon", "The Cosmic Fire", "The Awakening", "The All-Encompassing"].includes(card.name)) {
                hasMajorArcana = true;
            }

            if (["The Unbound", "The Tempter"].includes(card.name)) {
                themes.push("chaos and temptation");
            }

            if (["The Oracle of the Deep", "The Seer", "The Faceless Moon"].includes(card.name)) {
                themes.push("mystery and intuition");
            }

            if (["The Ancient One", "The Impartial Judge", "The All-Encompassing"].includes(card.name)) {
                themes.push("cosmic order and power");
            }

            if (["The Wheel of Misfortune", "The Shattered Reality", "The Great Transition"].includes(card.name)) {
                themes.push("upheaval and transformation");
includes themes.push("centers strongly around " + uniqueThemes[0] + ". ");
        } else {
            interpretation += "weaves together elements of " + uniqueThemes.join(' and ') + ". ";
        }
    } else if (hasMajorArcana) {
        interpretation += "involves significant life lessons and spiritual growth. ";
    } else {
        interpretation += "focuses on everyday experiences that collectively shape your path. ";
    }

    interpretation += "Consider how these energies flow from your past through your present and into your future. ";
    interpretation += "Remember that you have the power to shape your path forward by being conscious of these influences.";

    return interpretation;
};

    const handleReset = () => {
        setSelectedCards([null, null, null]);
        setIsShuffled(false);
        setIsReadingComplete(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <header className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 text-center shadow-md">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-wide mb-2">
                    Luminous Void Tarot
                </h1>
                <p className="text-lg italic font-light">
                    Glimpse the Unseen
                </p>
            </header>

            <main className="container mx-auto px-4 py-8">
                <section className="mb-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Unveil Your Path
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Select three cards to receive guidance from the Luminous Void. Focus on your question
                        or intention as you draw.
                    </p>
                    <Button
                        onClick={handleShuffle}
                        disabled={isShuffled}
                        className={cn(
                            "mt-6 px-6 py-3 rounded-full transition-all duration-300",
                            isShuffled
                                ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                                : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:scale-105"
                        )}
                    >
                        {isShuffled ? 'Shuffling...' : 'Shuffle the Cards'}
                    </Button>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mb-8">
                    {positions.map((position, index) => (
                        <TarotCard
                            key={index}
                            card={selectedCards[index] || { name: '', meaning: '', icon: <FaceFrown className="w-10 h-10" /> }}
                            position={position}
                            isRevealed={selectedCards[index] !== null}
                            onClick={() => handleCardClick(index)}
                        />
                    ))}
                </section>

                <AnimatePresence>
                    {isReadingComplete && (
                        <motion.section
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                                Your Interpretation
                            </h3>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
                                {selectedCards.map((card, index) => (
                                    <div key={index} className="mb-4">
                                        <h4 className="font-semibold">{positions[index]}: {card?.name}</h4>
                                        <p className="text-sm">
                                            {generateInterpretation(card, positions[index])}
                                        </p>
                                    </div>
                                ))}
                                <div className="mt-6">
                                    <h5 className="font-bold text-lg">Overall Interpretation:</h5>
                                    <p className="text-md">{generateOverallInterpretation()}</p>
                                </div>
                            </div>
                            <Button
                                onClick={handleReset}
                                className="mt-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-blue-600 hover:to-teal-600 px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                Draw Again
                            </Button>
                        </motion.section>
                    )}
                </AnimatePresence>
            </main>

            <footer className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-4 text-center mt-8">
                <p>&copy; {new Date().getFullYear()} Luminous Void Tarot. All rights reserved.</p>
                <p>
                    <a
                        href="https://www.example.com/privacy" // Replace with a real privacy policy URL
                        className="text-blue-500 hover:underline"
                    >
                        Privacy Policy
                    </a>
                    <span> | </span>
                    <a
                        href="https://www.example.com/terms"  // Replace with real terms of service URL
                        className="text-blue-500 hover:underline"
                    >
                        Terms of Service
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default LuminousTarot;
