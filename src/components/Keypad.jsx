import { useState } from "react";
import wordleData from "../data/db.json";

function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(() => {
    return wordleData.letters;
  });

  // useEffect(() => {
  //   fetch("http://localhost:3001/letters")
  //     .then(response => response.json())
  //     .then(json => {
  //       setLetters(json);
  //     });
  // }, []);

  return (
    <>
      <div className='keypad'>
        {letters &&
          letters.map(l => {
            const color = usedKeys[l.key];
            return (
              <div key={l.key} className={color}>
                {l.key}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Keypad;
