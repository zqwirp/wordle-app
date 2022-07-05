import Row from "./Row";

function Grid({ currentGuess, guesses, turn }) {
  return (
    <>
      {guesses.map((g, i) => {
        return <Row key={i} guess={g} />;
      })}
    </>
  );
}

export default Grid;
