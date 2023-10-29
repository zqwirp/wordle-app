import { useEffect, useState } from "react";
import { useWordle } from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";
import { useWordleContext } from "../contexts/WordleContext";

function Wordle() {
  const {
    solution,
    currentGuess,
    handleKeyUp,
    guesses,
    isCorrect,
    turn,
    usedKeys,
    clickChar,
    submitAnswer,
    deleteChar,
  } = useWordleContext();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => {
      return window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp, isCorrect]);

  return (
    <>
      {/* <div>solution - {solution}</div> */}
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
        deleteChar={deleteChar}
      />
      <Keypad
        usedKeys={usedKeys}
        submitAnswer={submitAnswer}
        clickChar={clickChar}
      />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </>
  );
}

export default Wordle;
