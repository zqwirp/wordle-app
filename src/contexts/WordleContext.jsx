import { useState, useContext, createContext } from "react";
import wordleData from "../data/db.json";
import { useWordle } from "../hooks/useWordle";

const WordleContext = createContext();

export function useWordleContext() {
  return useContext(WordleContext);
}

export function WordleProvider({ children }) {
  const [solution, setSolution] = useState(() => {
    const wordleSolutions = wordleData.solutions;
    const randomSolution =
      wordleSolutions[Math.floor(Math.random() * wordleSolutions.length)];
    return randomSolution.word;
  });

  const { currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);

  return (
    <WordleContext.Provider
      value={{
        solution,
        setSolution,
        currentGuess,
        handleKeyUp,
        guesses,
        isCorrect,
        turn,
        usedKeys,
      }}
    >
      {children}
    </WordleContext.Provider>
  );
}
