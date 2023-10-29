import Row from "./Row";

function Grid({ currentGuess, guesses, turn, deleteChar }) {
  return (
    <>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} deleteChar={deleteChar} />;
        }
        return <Row key={i} guess={g} />;
      })}
    </>
  );
}

export default Grid;
