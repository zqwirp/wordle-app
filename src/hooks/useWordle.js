import { useState } from "react";

const MAX_TURN = 6;

export const useWordle = solution => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map(l => {
      return { key: l, color: "grey" };
    });

    formattedGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        formattedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });

    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    });

    return formattedGuess;
  };

  const addNewGuess = formattedGuess => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }

    setGuesses(state => {
      let newGuesses = [...state];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory(state => {
      return [...state, currentGuess];
    });

    setTurn(state => {
      return state + 1;
    });

    setUsedKeys(state => {
      let newKeys = { ...state };
      formattedGuess.forEach(l => {
        const currentColor = newKeys[l.key];
        if (l.color === "green") {
          newKeys[l.key] = "green";
          return;
        }

        if (l.color === "yellow" && currentGuess !== "green") {
          newKeys[l.key] = "yellow";
          return;
        }

        if (l.color === "grey" && l.color !== "green" && l.color !== "yellow") {
          newKeys[l.key] = "grey";
          return;
        }
      });
      return newKeys;
    });
    setCurrentGuess("");
  };

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
      const formatted = formatGuess();
      addNewGuess(formatted);
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

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp, usedKeys };
};
