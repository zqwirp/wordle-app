import { useState, useEffect } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then(res => res.json())
      .then(json => {
        const randomSolution =
          json[Math.floor(Math.random() * json.length - 1)];
        setSolution(randomSolution);
      });
  }, [setSolution]);

  return (
    <div className='App'>
      <h1>Wordle (Lingo)</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
