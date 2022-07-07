import { useState } from "react";
import Wordle from "./components/Wordle";
import wordleData from "./data/db.json";

function App() {
  const [solution, setSolution] = useState(() => {
    const wordleSolutions = wordleData.solutions;
    const randomSolution =
      wordleSolutions[Math.floor(Math.random() * wordleSolutions.length)];
    return randomSolution.word;
  });

  // useEffect(() => {
  //   fetch("http://localhost:3001/solutions")
  //     .then(res => res.json())
  //     .then(json => {
  //       const randomSolution = json[Math.floor(Math.random() * json.length)];
  //       setSolution(randomSolution.word);
  //     });
  // }, [setSolution]);

  return (
    <div className='App'>
      <h1>Wordle (Lingo)</h1>
      {solution && <Wordle solution={solution} setSolution={setSolution} />}
    </div>
  );
}

export default App;
