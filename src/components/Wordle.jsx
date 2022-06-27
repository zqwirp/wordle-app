import { useEffect } from "react";
import { useWordle } from "../hooks/useWordle";

function Wordle({ solution }) {
  const { currentGuess, handleKeyUp } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      console.log("clean up");
      return window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp]);

  return (
    <>
      <div>current guess - {currentGuess}</div>
    </>
  );
}

export default Wordle;
