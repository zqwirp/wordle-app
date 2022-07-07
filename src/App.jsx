import { useState } from "react";
import Wordle from "./components/Wordle";
import { useWordleContext } from "./contexts/WordleContext";

function App() {
  const { solution } = useWordleContext();

  return (
    <div className='App'>
      <h1>Wordle (Lingo)</h1>
      {solution && <Wordle />}
    </div>
  );
}

export default App;
