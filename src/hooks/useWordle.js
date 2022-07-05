import { useState } from "react";

const MAX_TURN = 6;

export const useWordle = solution => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState(["hello", "ninja"]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    console.log("formatting guess - ", currentGuess);
  };

  const addNewGuess = () => {};

  const handleKeyUp = ({ key }) => {
    if (key === "Enter") {
      if (turn > 5) {
        console.log("only 5 turn");
        return;
      }
      if (history.includes(currentGuess)) {
        console.log("already tried");
        return;
      }
      if (currentGuess.length !== 5) {
        console.log("must 5 word");
        return;
      }
      formatGuess();
    }

    if (key === "Backspace") {
      setCurrentGuess(currentState => {
        return currentGuess.slice(0, -1);
      });
      return;
    }

    if (/^[a-zA-Z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(currentState => {
          return currentState + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};
