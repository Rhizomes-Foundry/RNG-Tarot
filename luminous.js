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
